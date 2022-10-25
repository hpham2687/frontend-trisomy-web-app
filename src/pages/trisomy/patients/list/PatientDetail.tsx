/* eslint-disable @typescript-eslint/no-use-before-define */
import { ModalKey } from '@/components/Modals';
import { getVietnameseTestName, TEST_NAME } from '@/constants/tests';
import useAsync from '@/hooks/useAsync';
import { deleteTestResult, queryPatientDetail } from '@/pages/trisomy/patients/list/service';
import {
  ExclamationCircleOutlined,
  FundOutlined,
  PlusOutlined,
  RollbackOutlined,
} from '@ant-design/icons';
import ProForm, { ProFormInstance, ProFormSelect, ProFormTextArea } from '@ant-design/pro-form';
import { GridContent, PageContainer, RouteContext } from '@ant-design/pro-layout';
import { Button, Card, Descriptions, message, Modal, Row, Statistic, Table } from 'antd';
import moment from 'moment';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'umi';

import styles from './style/index.less';
import './style/index.css';
import styled from 'styled-components';
import { BreakPoints } from '@/constants/common';

const convertResponseToTableData = (tests: any) => {
  return tests.map((test: any) => ({
    key: test.id,
    testId: test.id,
    testName: test.testName,
    createdDate: 'cratedatae',
    action: test,
  }));
};

const extra = (
  <div className={styles.moreInfo}>
    <Statistic title="Ngày đăng ký khám" value="NaN" />
    <Statistic style={{ marginLeft: 8 }} title="Ngày khám gần nhất" value="NaN" />
  </div>
);

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

const getTestDetail = (tests: any, testName: string) => {
  return tests.find((test: any) => test.testName === testName).action;
};

const getModalKey = (testName: string) => {
  const map = {
    [TEST_NAME.BLOOD_TEST]: 'INPUT_BLOOD_TEST_RESULT',
    [TEST_NAME.SERUM_IRON_TEST]: 'INPUT_SERUM_IRON_TEST_RESULT',
    [TEST_NAME.HEMOGLOBIN_TEST]: 'INPUT_HEMOGLOBIN_TEST_RESULT',
  };
  return map[testName];
};

function PatientDetail({ patientId, setSelectedPatient }: any) {
  const [tabStatus, seTabStatus] = useState({
    operationKey: 'tab1',
    tabActiveKey: 'detail',
  });
  const [patientDetail, setPatientDetail] = useState<any>(null);
  const { run, isLoading } = useAsync();
  const { run: runDeleteTest, isLoading: isLoadingDelete } = useAsync();
  const dispatch = useDispatch();
  const formRef = useRef<ProFormInstance>();

  const onOperationTabChange = (key: string) => {
    seTabStatus({ ...tabStatus, operationKey: key });
  };

  const getPatientDetail = useCallback(() => {
    run(queryPatientDetail(patientId)).then((response: any) => {
      console.log(response);
      const { blood_test, hemoglobin_test, serum_iron_test, ...rest } = response;
      const tests = [];
      if (blood_test) {
        tests.push(blood_test);
      }
      if (hemoglobin_test) {
        tests.push(hemoglobin_test);
      }
      if (serum_iron_test) {
        tests.push(response.serum_iron_test);
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
      render: (text, record, index) => {
        return getVietnameseTestName(text);
      },
    },
    // {
    //   title: 'Trạng thái',
    //   dataIndex: 'status',
    //   key: 'name',
    // },
    {
      title: 'Ngày thêm xét nghiệm',
      dataIndex: 'createdDate',
      key: 'name',
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
      render: (test: any) => {
        return (
          <>
            {/* <span>Xem</span> */}
            <span
              style={{ marginLeft: 8, cursor: 'pointer', color: 'var(--ant-primary-color)' }}
              onClick={() => {
                const editingData = getTestDetail(patientDetail.tests, test.testName);
                console.log(editingData);

                dispatch({
                  type: 'modal/showModal',
                  payload: {
                    modalKey: getModalKey(test.testName),
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
      content: `Bạn có chắc là muốn xóa kết quả xét nghiệm ${removeTest.testName} ngày chứ?`,
      okText: 'Có',
      cancelText: 'Không',

      onOk: () => {
        const removeTestName = removeTest.testName;
        runDeleteTest(deleteTestResult({ patientId, testName: removeTestName })).then(() => {
          message.success(`Xóa kết quả ${removeTestName} thành công!`);

          // Remove test from state list
          setPatientDetail((prev: any) => {
            let tests = prev.tests;
            if (tests?.length > 0) {
              tests = tests.filter((test: any) => test.testName !== removeTestName);
            }
            return { ...prev, tests };
          });
        });
      },
    });
  };
  const headerDescription = (
    <RouteContext.Consumer>
      {({ isMobile }) => (
        <>
          <Descriptions className={styles.headerList} size="small" column={isMobile ? 1 : 2}>
            {/* <Descriptions.Item label="Ngày sinh">27/03/2001</Descriptions.Item> */}
            <Descriptions.Item label="Địa chỉ">{patientDetail.address}</Descriptions.Item>
            <Descriptions.Item label="Số điện thoại">{patientDetail.phone}</Descriptions.Item>
            <Descriptions.Item label="Ngày sinh">
              {moment(patientDetail.dateOfBirth).format('YYYY-MM-DD')}
            </Descriptions.Item>
            {/* <Descriptions.Item label="生效日期">2017-07-07 ~ 2017-08-08</Descriptions.Item>
            <Descriptions.Item label="备注">请于两个工作日内确认</Descriptions.Item> */}
          </Descriptions>
        </>
      )}
    </RouteContext.Consumer>
  );
  // const [form] = Form.useForm<{ name: string; company: string }>();
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
                    body: (
                      <>
                        <ProForm
                          readonly={false}
                          name="validate_other"
                          initialValues={{
                            doctor_selection: 'trisomy21',
                          }}
                          onValuesChange={(_, values) => {
                            console.log(values);
                          }}
                          formRef={formRef}
                          onFinish={async (value) => console.log(value)}
                          submitter={{
                            render: () => {
                              <></>;
                            },
                          }}
                        >
                          <Descriptions layout="vertical" style={{ marginBottom: 16 }}>
                            <Descriptions.Item label="trisomy 21">0.32</Descriptions.Item>
                            <Descriptions.Item label="trisomy 18">0.44</Descriptions.Item>
                            <Descriptions.Item label="trisomy 13">0.2</Descriptions.Item>
                          </Descriptions>
                          <ProFormSelect
                            label={'Kết luận của bác sĩ'}
                            name="doctor_selection"
                            // rules={[{ required: true, message: '请选择审批员' }]}
                            options={[
                              {
                                label: 'Trisomy 21',
                                value: 'trisomy21',
                              },

                              {
                                label: 'Trisomy 18',
                                value: 'trisomy18',
                              },

                              {
                                label: 'Trisomy 13',
                                value: 'trisomy13',
                              },
                            ]}
                            placeholder="Nhập nghề nghiệp"
                          />
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
                          onValuesChange={(_, values) => {
                            console.log(values);
                          }}
                          formRef={formRef}
                          onFinish={async (value) => console.log(value)}
                          submitter={{
                            render: () => {
                              <></>;
                            },
                          }}
                        >
                          <Descriptions layout="vertical" style={{ marginBottom: 16 }}>
                            <Descriptions.Item label="trisomy 21">0.32</Descriptions.Item>
                            <Descriptions.Item label="trisomy 18">0.44</Descriptions.Item>
                            <Descriptions.Item label="trisomy 13">0.2</Descriptions.Item>
                          </Descriptions>
                          <ProFormSelect
                            label={'Kết luận của bác sĩ'}
                            name="doctor_selection"
                            // rules={[{ required: true, message: '请选择审批员' }]}
                            options={[
                              {
                                label: 'Trisomy 21',
                                value: 'trisomy21',
                              },

                              {
                                label: 'Trisomy 18',
                                value: 'trisomy18',
                              },

                              {
                                label: 'Trisomy 13',
                                value: 'trisomy13',
                              },
                            ]}
                            placeholder="Nhập nghề nghiệp"
                          />
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
      content={headerDescription}
      extraContent={extra}
      extra={[
        <>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setSelectedPatient(null);
            }}
          >
            <RollbackOutlined style={{ fontSize: 36 }} /> Quay lại
          </div>
        </>,
      ]}
      // tabActiveKey={tabStatus.tabActiveKey}
      // onTabChange={onTabChange}
      // tabList={[
      //   {
      //     key: 'detail',
      //     tab: '详情',
      //   },
      //   {
      //     key: 'rule',
      //     tab: '规则',
      //   },
      // ]}
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
