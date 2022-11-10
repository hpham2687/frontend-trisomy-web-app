/* eslint-disable @typescript-eslint/no-use-before-define */
import { ModalKey } from '@/components/Modals';
import { getVietnameseTestName, TEST_NAME } from '@/constants/tests';
import useAsync from '@/hooks/useAsync';
import { deleteTestResult, queryPatientDetail } from '@/pages/patients/list/service';
import {
  ExclamationCircleOutlined,
  EyeOutlined,
  FundOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import ProForm, { ProFormInstance, ProFormSelect, ProFormTextArea } from '@ant-design/pro-form';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Descriptions,
  Form,
  message,
  Modal,
  Row,
  Select,
  Statistic,
  Table,
} from 'antd';
import moment from 'moment';
import { useCallback, useEffect, useRef, useState } from 'react';
import { history, useDispatch, useParams } from 'umi';

import styles from './style/index.less';
import './style/index.css';
import styled from 'styled-components';
import { BreakPoints } from '@/constants/common';
const { Option } = Select;

const convertResponseToTableData = (tests: any) => {
  return tests.map((test: any) => ({
    key: test.id,
    testId: test.id,
    testName: test.test_name,
    testDate: test.test_date,
    action: test,
  }));
};

const convertResponseToDateObj = (tests: any) => {
  const dateOptions: any = [];
  const obj = {};
  tests?.forEach((test: any) => {
    const date = test.testDate;
    if (!obj[date]) {
      obj[date] = test;
      dateOptions.push(<Option key={date}>{moment(Number(date)).format('DD-MM-YYYY')}</Option>);
    }
  });
  return dateOptions;
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
  const { run: runDeleteTest, isLoading: isLoadingDelete } = useAsync();
  const dispatch = useDispatch();
  const formRef = useRef<ProFormInstance>();
  const { patientId } = useParams<any>();

  const onOperationTabChange = (key: string) => {
    seTabStatus({ ...tabStatus, operationKey: key });
  };

  const getPatientDetail = useCallback(() => {
    run(queryPatientDetail(patientId)).then((response: any) => {
      const {
        blood_tests,
        hemoglobin_tests,
        serum_iron_tests,
        double_tests,
        triple_tests,
        first_ultrasound_tests,
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

      setPatientDetail({ ...rest, tests: convertResponseToTableData(tests) });
    });
  }, [patientId]);

  useEffect(() => {
    if (patientId) {
      getPatientDetail();
    }
  }, [patientId]);

  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Tên xét nghiệm',
      dataIndex: 'testName',
      key: 'testName',
      render: (testName: string, record: any, index) => {
        return (
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              const editingData = record.action;
              editingData.test_date = moment(Number(editingData.test_date));
              dispatch({
                type: 'modal/showModal',
                payload: {
                  modalKey: getModalKey(testName),
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
            }}
          >
            {getVietnameseTestName(testName)}{' '}
          </span>
        );
      },
    },

    {
      title: 'Ngày xét nghiệm',
      dataIndex: 'testDate',
      key: 'testDate',
      sorter: (a: any, b: any) => Number(a.testDate) - Number(b.testDate),
      render: (testDate: any) => moment(Number(testDate)).format('DD-MM-YYYY'),
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
      render: (test: any, record: any) => {
        return (
          <>
            <span
              style={{ marginLeft: 8, cursor: 'pointer', color: 'var(--ant-primary-color)' }}
              onClick={() => {
                const editingData = record.action;
                editingData.test_date = moment(Number(editingData.test_date));
                dispatch({
                  type: 'modal/showModal',
                  payload: {
                    modalKey: getModalKey(test.test_name),
                    customProps: {
                      patientDetail,
                      editingData,
                      getPatientDetail: () => {
                        getPatientDetail();
                      },
                    },
                  },
                });
              }}
            >
              Sửa
            </span>
            <span
              onClick={() => handleShowConfirmDelete(test)}
              style={{ marginLeft: 8, color: 'red', cursor: 'pointer' }}
            >
              Xóa
            </span>
          </>
        );
      },
    },
  ];

  const handleShowConfirmDelete = (removeTest: any) => {
    Modal.confirm({
      title: 'Xác nhận',
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có chắc là muốn xóa kết quả ${getVietnameseTestName(
        removeTest.test_name,
      )} ngày chứ?`,
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
                console.log(tests);

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

  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
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
            className="ai-diagnosis-button"
            type="primary"
            style={{ marginBottom: 24, marginLeft: 8 }}
            onClick={() => {
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
                            <Descriptions.Item label="Thalassemia alpha">0.3</Descriptions.Item>
                            <Descriptions.Item label="Thalassemia beta">0.3</Descriptions.Item>
                            <Descriptions.Item label="Không mang bệnh">0.4</Descriptions.Item>
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
            }}
          >
            <FundOutlined />
            AI chẩn đoán Thalassemia
          </Button>
          <Button
            className="ai-diagnosis-button"
            type="primary"
            style={{ marginBottom: 24, marginLeft: 8 }}
            onClick={() => {
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
                            <Descriptions.Item label="Trisomy 21">0.32</Descriptions.Item>
                            <Descriptions.Item label="Trisomy 18">0.44</Descriptions.Item>
                            <Descriptions.Item label="Trisomy 13">0.2</Descriptions.Item>
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
            }}
          >
            <FundOutlined />
            AI chẩn đoán Trisomy
          </Button>
        </ActionButtonWrapper>
        <Table
          loading={isLoading || isLoadingDelete}
          dataSource={patientDetail?.tests || []}
          columns={columns}
          rowKey={(obj) => obj.test_name}
          pagination={{ position: ['bottomRight'] }}
        />
      </>
    ),
    tab2: (
      <>sdf</>
      // <Table pagination={false} loading={loading} dataSource={patientTests} columns={columns} />
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
