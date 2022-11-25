/* eslint-disable @typescript-eslint/no-use-before-define */
import { ModalKey } from '@/components/Modals';
import { getVietnameseTestName, TEST_NAME } from '@/constants/tests';
import useAsync from '@/hooks/useAsync';
import {
  deleteTestResult,
  predictThalassemia,
  predictTrisomy,
  queryPatientDetail,
} from '@/pages/patients/list/service';
import {
  ExclamationCircleOutlined,
  EyeOutlined,
  FundOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-form';
import ProForm, { ProFormTextArea } from '@ant-design/pro-form';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Descriptions,
  Divider,
  Form,
  message,
  Modal,
  Row,
  Select,
  Table,
} from 'antd';
import moment from 'moment';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { history, useDispatch, useParams } from 'umi';

import styles from './style/index.less';
import './style/index.css';
import styled from 'styled-components';
import { BreakPoints } from '@/constants/common';
import {
  numericalOrderColumn,
  testActionColumn,
  testDateColumn,
  testNameColumn,
} from '@/constants/patientDetail';

const convertResponseToTableData = (tests: any) => {
  return tests.map((test: any) => ({
    key: test.id,
    testId: test.id,
    testName: test.test_name,
    testDate: test.test_date,
    action: test,
  }));
};

const operationTabList = [
  {
    key: 'tab1',
    tab: 'Xét nghiệm',
  },
  {
    key: 'tab2',
    tab: 'Thai nhi',
  },
];

const getModalKey = (testName: string) => {
  const map = {
    [TEST_NAME.BLOOD_TEST]: 'INPUT_BLOOD_TEST_RESULT',
    [TEST_NAME.SERUM_IRON_TEST]: 'INPUT_SERUM_IRON_TEST_RESULT',
    [TEST_NAME.HEMOGLOBIN_TEST]: 'INPUT_HEMOGLOBIN_TEST_RESULT',
    [TEST_NAME.DOUBLE_TEST]: 'INPUT_DOUBLE_TEST_RESULT',
    [TEST_NAME.TRIPLE_TEST]: 'INPUT_TRIPLE_TEST_RESULT',
    [TEST_NAME.FIRST_ULTRASOUND_TEST]: 'INPUT_FIRST_ULTRASOUND_TEST_RESULT',
    [TEST_NAME.SECOND_ULTRASOUND_TEST]: 'INPUT_SECOND_ULTRASOUND_TEST_RESULT',
    [TEST_NAME.CHILD_INFORMATION]: 'INPUT_CHILD_INFORMATION_RESULT',
  };
  return map[testName];
};

function PatientDetail() {
  const [tabStatus, seTabStatus] = useState({
    operationKey: 'tab1',
    tabActiveKey: 'detail',
  });
  const [patientDetail, setPatientDetail] = useState<any>(null);
  const { run, isLoading } = useAsync();
  const { run: runPredictThalassemia, isLoading: isLoadingPredictThalassemia } = useAsync();
  const { run: runPredictTrisomy, isLoading: isLoadingPredictTrisomy } = useAsync();
  const { run: runDeleteTest, isLoading: isLoadingDelete } = useAsync();
  const dispatch = useDispatch();
  const formRef = useRef<ProFormInstance>();
  const { patientId } = useParams<any>();

  const onOperationTabChange = (key: string) => {
    seTabStatus({ ...tabStatus, operationKey: key });
  };

  const shouldEnablePredictTrisomy = useMemo(() => {
    if (patientDetail) {
      const { tests } = patientDetail;
      const firstUltrasoundTest = tests.find(
        (test: any) => test.testName === TEST_NAME.FIRST_ULTRASOUND_TEST,
      )?.action;
      const secondUltrasoundTest = tests.find(
        (test: any) => test.testName === TEST_NAME.SECOND_ULTRASOUND_TEST,
      )?.action;
      const doubleTest = tests.find((test: any) => test.testName === TEST_NAME.DOUBLE_TEST)?.action;
      const tripleTest = tests.find((test: any) => test.testName === TEST_NAME.TRIPLE_TEST)?.action;

      const hasFirstPeriodData = firstUltrasoundTest && doubleTest;
      const hasSecondPeriodData = secondUltrasoundTest && tripleTest;

      return hasFirstPeriodData || hasSecondPeriodData;
    }
  }, [patientDetail]);

  const shouldEnablePredictThalassemia = useMemo(() => {
    if (patientDetail) {
      const { tests } = patientDetail;
      const bloodTest = tests.find((test: any) => test.testName === TEST_NAME.BLOOD_TEST)?.action;
      const serumIronTest = tests.find(
        (test: any) => test.testName === TEST_NAME.SERUM_IRON_TEST,
      )?.action;
      const hemoglobinTest = tests.find(
        (test: any) => test.testName === TEST_NAME.HEMOGLOBIN_TEST,
      )?.action;

      if (
        bloodTest ||
        (bloodTest && serumIronTest) ||
        (bloodTest && serumIronTest && hemoglobinTest)
      ) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }, [patientDetail]);

  const getPatientDetail = useCallback(() => {
    run(queryPatientDetail(patientId)).then((response: any) => {
      const {
        blood_tests,
        hemoglobin_tests,
        serum_iron_tests,
        double_tests,
        triple_tests,
        first_ultrasound_tests,
        second_ultrasound_tests,
        ...rest
      } = response;
      let tests: any = [];

      if (blood_tests) {
        tests = [...tests, ...blood_tests];
      }
      if (hemoglobin_tests) {
        tests = [...tests, ...hemoglobin_tests];
      }
      if (serum_iron_tests) {
        tests = [...tests, ...serum_iron_tests];
      }
      if (double_tests) {
        tests = [...tests, ...double_tests];
      }
      if (triple_tests) {
        tests = [...tests, ...triple_tests];
      }
      if (first_ultrasound_tests) {
        tests = [...tests, ...first_ultrasound_tests];
      }
      if (second_ultrasound_tests) {
        tests = [...tests, ...second_ultrasound_tests];
      }

      setPatientDetail({ ...rest, tests: convertResponseToTableData(tests) });
    });
  }, [patientId]);

  useEffect(() => {
    if (patientId) {
      getPatientDetail();
    }
  }, [patientId]);

  const handleViewTest = (data: any) => {
    const editingData = data;
    editingData.test_date = moment(Number(editingData.test_date));
    dispatch({
      type: 'modal/showModal',
      payload: {
        modalKey: getModalKey(data.test_name),
        customProps: {
          patientDetail,
          editingData,
          readonly: true,
          getPatientDetail: () => {
            getPatientDetail();
          },
        },
      },
    });
  };

  const handleEditTest = (data: any) => {
    const editingData = data;
    editingData.test_date = moment(Number(editingData.test_date));
    dispatch({
      type: 'modal/showModal',
      payload: {
        modalKey: getModalKey(data.test_name),
        customProps: {
          patientDetail,
          editingData,
          getPatientDetail: () => {
            getPatientDetail();
          },
        },
      },
    });
  };

  const handleDeleteTest = (test: any) => {
    handleShowConfirmDelete(test);
  };

  const columns: any = [
    numericalOrderColumn,
    testNameColumn({ handleViewTest }),
    testDateColumn,
    testActionColumn({ handleEditTest, handleDeleteTest }),
  ];

  const handleShowConfirmDelete = (removeTest: any) => {
    Modal.confirm({
      title: 'Xác nhận',
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có chắc là muốn xóa kết quả ${getVietnameseTestName(
        removeTest.test_name,
      )} chứ?`,
      okText: 'Có',
      cancelText: 'Không',

      onOk: () => {
        const removeTestName = removeTest.test_name;
        const testId = removeTest.id;
        runDeleteTest(deleteTestResult({ patientId, testName: removeTestName, testId })).then(
          () => {
            message.success(`Xóa kết quả ${removeTestName} thành công!`);

            // Remove test from state list
            setPatientDetail((prev: any) => {
              let tests = prev.tests;
              if (tests?.length > 0) {
                tests = tests.filter((test: any) => {
                  if (test.testName !== removeTestName) {
                    return true;
                  } else {
                    if (test.testId !== testId) {
                      return true;
                    }
                    return false;
                  }
                });
              }
              return { ...prev, tests };
            });
          },
        );
      },
    });
  };

  const handleShowThalassemiaResult = (result: any) => {
    dispatch({
      type: 'modal/showModal',
      payload: {
        modalKey: ModalKey.GENERAL_INFO,
        customProps: {
          footer: null,
          body: (
            <>
              <ProForm
                name="validate_other"
                initialValues={{
                  doctor_selection: 'trisomy21',
                }}
                onValuesChange={(_, values) => {
                  console.log(values);
                }}
                formRef={formRef}
                onFinish={async (value) => console.log(value)}
                submitter={{ render: () => null }}
              >
                {/* step 2 */}
                <Descriptions layout="vertical" style={{ marginBottom: 16 }}>
                  <Descriptions.Item label="Tỉ lệ bị bệnh">
                    {1 - result.noGen.toFixed(2)}
                  </Descriptions.Item>
                  <Descriptions.Item span={2} label="Tỉ lệ không bị bệnh">
                    {result.noGen.toFixed(2)}
                  </Descriptions.Item>
                  <Descriptions.Item label="Thalassemia alpha">
                    {result.alphaGen.toFixed(2)}
                  </Descriptions.Item>
                  <Descriptions.Item label="Thalassemia beta">
                    {result.betaGen.toFixed(2)}
                  </Descriptions.Item>
                </Descriptions>

                <div style={{ marginBottom: 16 }}>
                  <p>Kết luận của bác sĩ</p>
                  <Form.Item name="diseaseName">
                    <Checkbox.Group style={{ width: '100%' }}>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="trisomy21" style={{ lineHeight: '32px' }}>
                            Alpha
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="trisomy18" style={{ lineHeight: '32px' }}>
                            Beta
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="trisomy13" style={{ lineHeight: '32px' }}>
                            Không mang bệnh
                          </Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </Form.Item>
                </div>
                <ProFormTextArea
                  label="Chẩn đoán của bác sỹ"
                  name="doctorComment"
                  placeholder="Nhập chẩn đoán của bác sỹ"
                />
                <Button
                  type="primary"
                  onClick={() => {
                    formRef.current?.validateFields().then((values) => {
                      console.log(values);
                    });
                  }}
                >
                  Lưu kết quả
                </Button>
              </ProForm>
            </>
          ),
        },
      },
    });
  };

  const handlePredictThalassemia = () => {
    if (!shouldEnablePredictThalassemia) {
      return alert('Not enough data');
    }
    const { tests } = patientDetail;

    const bloodTest = tests.find((test: any) => test.testName === TEST_NAME.BLOOD_TEST)?.action;
    const serumIronTest = tests.find(
      (test: any) => test.testName === TEST_NAME.SERUM_IRON_TEST,
    )?.action;
    const hemoglobinTest = tests.find(
      (test: any) => test.testName === TEST_NAME.HEMOGLOBIN_TEST,
    )?.action;

    let data2Send: any = {
      ctm_rbc: bloodTest.ctm_rbc,
      ctm_hgb: bloodTest.ctm_hgb,
      ctm_hct: bloodTest.ctm_hct,
      ctm_mcv: bloodTest.ctm_mcv,
      ctm_mch: bloodTest.ctm_mch,
      ctm_mchc: bloodTest.ctm_mchc,
      ctm_rdw: bloodTest.ctm_rdw,
    };
    if (serumIronTest) {
      data2Send = {
        ...data2Send,
        ctm_sathuyetthanh: serumIronTest.ctm_sathuyetthanh,
        ctm_ferritinehuyetthanh: serumIronTest.ctm_ferritinehuyetthanh,
      };
    }
    if (hemoglobinTest) {
      data2Send = {
        ...data2Send,
        dd_hba1: hemoglobinTest.dd_hba1,
        dd_hba2: hemoglobinTest.dd_hba2,
        dd_hbe: hemoglobinTest.dd_hbe,
        dd_hbh: hemoglobinTest.dd_hbh,
        dd_hbbar: hemoglobinTest.dd_hbbar,
        dd_hbkhac: hemoglobinTest.dd_hbkhac,
        dd_hbf: hemoglobinTest.dd_hbf,
      };
    }

    // check if blood, serrum , hemoglobin inputed
    runPredictThalassemia(
      predictThalassemia(data2Send)
        .then((response: any) => {
          handleShowThalassemiaResult(response);
        })
        .catch((error) => console.log(error)),
    );
    // Post API request
  };

  const handleShowTrisomyResult = (result: any) => {
    dispatch({
      type: 'modal/showModal',
      payload: {
        modalKey: ModalKey.GENERAL_INFO,
        customProps: {
          body: (
            <>
              <ProForm
                readonly={false}
                name="validate_other"
                initialValues={{
                  doctor_selection: 'trisomy21',
                }}
                // onValuesChange={(_, values) => {
                //   console.log(values);
                // }}
                formRef={formRef}
                onFinish={async (value) => console.log(value)}
                submitter={{
                  render: () => null,
                }}
              >
                {/* step 2 */}
                <Descriptions layout="horizontal" style={{ marginBottom: 16 }}>
                  <Descriptions.Item label="Trisomy 21">
                    {result.Trisomy21.toFixed(2)}
                  </Descriptions.Item>
                  <Descriptions.Item label="Trisomy 18">
                    {result.Trisomy18.toFixed(2)}
                  </Descriptions.Item>
                  <Descriptions.Item label="Trisomy 13">
                    {result.Trisomy13.toFixed(2)}
                  </Descriptions.Item>
                </Descriptions>
                <div style={{ marginBottom: 16 }}>
                  <p>Kết luận của bác sĩ</p>
                  <Form.Item name="diseaseName">
                    <Checkbox.Group>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="trisomy21" style={{ lineHeight: '32px' }}>
                            Trisomy 21
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="trisomy18" style={{ lineHeight: '32px' }}>
                            Trisomy 18
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="trisomy13" style={{ lineHeight: '32px' }}>
                            Trisomy 13
                          </Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </Form.Item>
                </div>
                <ProFormTextArea
                  label="Chẩn đoán của bác sỹ"
                  name="invoiceType"
                  placeholder="Nhập chẩn đoán của bác sỹ"
                />
              </ProForm>
            </>
          ),
        },
      },
    });
  };
  const handlePredictTrisomy = () => {
    if (!shouldEnablePredictTrisomy) {
      return alert('Not enough data');
    }
    const { tests } = patientDetail;
    const firstUltrasoundTest = tests.find(
      (test: any) => test.testName === TEST_NAME.FIRST_ULTRASOUND_TEST,
    )?.action;
    const secondUltrasoundTest = tests.find(
      (test: any) => test.testName === TEST_NAME.SECOND_ULTRASOUND_TEST,
    )?.action;
    const doubleTest = tests.find((test: any) => test.testName === TEST_NAME.DOUBLE_TEST)?.action;
    const tripleTest = tests.find((test: any) => test.testName === TEST_NAME.TRIPLE_TEST)?.action;

    const hasFirstPeriodData = firstUltrasoundTest && doubleTest;
    const hasSecondPeriodData = secondUltrasoundTest && tripleTest;
    let data2Send: any;
    if (hasFirstPeriodData) {
      data2Send = {
        co_khoangsangsaugay: firstUltrasoundTest.nuchal_translucency ? 1 : 0,
        co_nangbachhuyetvungco_1: firstUltrasoundTest.cervical_lymph_node ? 1 : 0,
        mat_xuongmui_1: firstUltrasoundTest.nose_bone ? 1 : 0,
        nguc_ditattim_1: firstUltrasoundTest.heart_defect ? 1 : 0,

        d_mom_hcgb: doubleTest.bhcg,
        d_mom_papa: doubleTest.pappa,
        d_mom_nt: doubleTest.nt,
      };
      console.log({ data2Send });
    }
    if (hasSecondPeriodData) {
      data2Send = {
        ...data2Send,
        co_nangbachhuyetvungco_2: secondUltrasoundTest.cervical_lymph_node ? 1 : 0,
        mat_xuongmui_2: secondUltrasoundTest.nose_bone ? 1 : 0,
        nguc_ditattim_2: secondUltrasoundTest.heart_defect ? 1 : 0,
        mat_xuongsongmui: secondUltrasoundTest.nose_bone
          ? secondUltrasoundTest.nose_bone_length
          : 0,
        t_mom_ue3: tripleTest.ue3,
        t_mom_afp: tripleTest.afp,
        t_mom_hcg: tripleTest.hcg,
      };
    }

    // fetch
    runPredictTrisomy(
      predictTrisomy(data2Send)
        .then((response: any) => {
          handleShowTrisomyResult(response);
        })
        .catch((error) => console.log(error)),
    );
  };

  const contentList = {
    tab1: (
      <>
        <ActionButtonWrapper>
          <Button
            className="ai-diagnosis-button"
            type="primary"
            style={{ marginBottom: 24 }}
            onClick={() => {
              dispatch({
                type: 'modal/showModal',
                payload: {
                  modalKey: ModalKey.ADD_TEST_RESULT,
                  customProps: {
                    patientDetail,
                    getPatientDetail: getPatientDetail,
                  },
                },
              });
            }}
          >
            <PlusOutlined />
            Thêm xét nghiệm
          </Button>
          <Button
            loading={isLoadingPredictThalassemia}
            className="ai-diagnosis-button"
            type="primary"
            style={{ marginBottom: 24, marginLeft: 8 }}
            onClick={handlePredictThalassemia}
            disabled={!shouldEnablePredictThalassemia}
          >
            <FundOutlined />
            AI sàng lọc Thalassemia
          </Button>
          <Button
            className="ai-diagnosis-button"
            type="primary"
            style={{ marginBottom: 24, marginLeft: 8 }}
            onClick={handlePredictTrisomy}
            loading={isLoadingPredictTrisomy}
            disabled={!shouldEnablePredictTrisomy}
          >
            <FundOutlined />
            AI sàng lọc Trisomy
          </Button>
        </ActionButtonWrapper>
        <Table
          loading={isLoading || isLoadingDelete}
          dataSource={patientDetail?.tests || []}
          columns={columns}
          rowKey={(obj) => obj.id}
          pagination={{ position: ['bottomRight'] }}
        />
        <Divider style={{ margin: '40px 0 24px' }} />
        <div className={styles.desc}>
          <h3>Hướng dẫn</h3>
          <Row>
            <Col xs={24} md={12}>
              <h4>AI sàng lọc Thalassemia</h4>
              <p>
                Hỗ trợ sàng lọc khi nhập đủ một trong các trường hợp sau:
                <ul>
                  <li>Xét nghiệm máu</li>
                  <li>Xét nghiệm máu, Xét nghiệm sắt</li>
                  <li>Xét nghiệm máu, Xét nghiệm sắt, Xét nghiệm điện di</li>
                </ul>
              </p>
            </Col>
            <Col xs={24} md={12}>
              <h4>AI sàng lọc Trisomy</h4>
              <p>
                Hỗ trợ sàng lọc khi nhập đủ một trong các trường hợp sau:
                <ul>
                  <li>Siêu âm kì 1, xét nghiệm Double Test</li>
                  <li>Siêu âm kì 2, xét nghiệm Triple Test</li>
                </ul>
              </p>
            </Col>
          </Row>
        </div>
      </>
    ),
    tab2: (
      <Button
            className="child-information"
            type="primary"
            style={{ marginBottom: 24 }}
            onClick={() => {
              dispatch({
                type: 'modal/showModal',
                payload: {
                  modalKey: ModalKey.INPUT_CHILD_INFORMATION,
                  customProps: {
                    patientDetail,
                    getPatientDetail: () => {
                      getPatientDetail();
                    },
                  },
                },
              });
            }}
          >
            <PlusOutlined />
            Thêm thông tin thai nhi
          </Button>
    ),
    tab3: (
      <>sdf</>
      // <Table pagination={false} loading={loading} dataSource={patientTests} columns={columns} />
    ),
  };

  if (isLoading || !patientDetail) {
    return <>Loading...</>;
  }

  return (
    <PageContainer
      title={`Bệnh nhân ：${patientDetail?.fullName}`}
      className={styles.pageHeader}
      // content={headerDescription}
      // extraContent={extra}
      extra={[
        <>
          <Button
            style={{ display: 'flex', alignItems: 'center', padding: 0 }}
            type="link"
            onClick={() => {
              history.push(`/patients/${patientId}/view`);
            }}
            icon={<EyeOutlined style={{ fontSize: 24 }} />}
          >
            Chi tiết
          </Button>
        </>,
      ]}
    >
      <div className={styles.main}>
        <GridContent>
          <Card
            className={styles.tabsCard}
            bordered={false}
            tabList={operationTabList}
            onTabChange={onOperationTabChange}
          >
            {contentList[tabStatus.operationKey]}
          </Card>
        </GridContent>
      </div>
    </PageContainer>
  );
}

export default PatientDetail;

const ActionButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${BreakPoints.PHONE}px) {
    .ai-diagnosis-button {
      margin-left: 0 !important;
    }
  }
`;
