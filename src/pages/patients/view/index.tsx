/* eslint-disable @typescript-eslint/no-use-before-define */
import useAsync from '@/hooks/useAsync';
import AdministrativeInforStep from '@/pages/patients/add/AdministrativeInforStep';
import PrehistoricStep from '@/pages/patients/add/PrehistoricStep';
import { RollbackOutlined } from '@ant-design/icons';
import ProForm, { StepsForm } from '@ant-design/pro-form';
import { PageContainer, PageLoading } from '@ant-design/pro-layout';
import { Button, Card, FormInstance, message, Result, Statistic } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { history } from 'umi';
import type { StepDataType } from './data';
import { postEditPatient, queryPatientDetail } from './service';
import './style/index.css';
import styles from './style/index.less';

const StepResult: React.FC<{
  onFinish: () => Promise<void>;
}> = (props) => {
  return (
    <Result
      status="success"
      title="Thành công"
      subTitle="Sửa bệnh nhân thành công"
      extra={
        <>
          <Button type="primary" onClick={props.onFinish}>
            Xem tất cả bệnh nhân
          </Button>
        </>
      }
      className={styles.result}
    >
      {props.children}
    </Result>
  );
};

const EditPatient: React.FC<Record<string, any>> = () => {
  const [administrativeInforStep, setAdministrativeInforStep] = useState<StepDataType>(null);
  const [prehistoric, setPrehistoric] = useState<any>();
  const [current, setCurrent] = useState(0);
  const formRefAdministrativeInforStep = useRef<FormInstance>();
  const formRefPrehistoricStep = useRef<FormInstance>();
  const { run, isLoading } = useAsync();
  const { patientId } = useParams<any>();
  const [tabStatus, seTabStatus] = useState({
    operationKey: 'tab1',
    tabActiveKey: 'detail',
  });
  useEffect(() => {
    run(queryPatientDetail(patientId))
      .then((response: any) => {
        setAdministrativeInforStep(response);
        console.log(response);
        // console.log(formRef.current);
        formRefAdministrativeInforStep.current?.setFieldsValue({
          ...response,
        });
      })
      .catch((error: any) => {
        console.log(error);
        message.error(error.error || 'Có lỗi xảy ra!');
      });
  }, [patientId, formRefAdministrativeInforStep]);

  if (isLoading || !administrativeInforStep) {
    return (
      <>
        {' '}
        <PageLoading />
      </>
    );
  }
  const contentList = {
    tab1: <AdministrativeInforStep readonly={true} />,
    tab2: <PrehistoricStep readonly={true} />,
  };
  const operationTabList = [
    {
      key: 'tab1',
      tab: 'Thông tin hành chính',
    },
    {
      key: 'tab2',
      tab: 'Tiền sử',
    },
  ];

  const onOperationTabChange = (key: string) => {
    seTabStatus({ ...tabStatus, operationKey: key });
  };

  return (
    <PageContainer
      content="Trang xem thông tin thai phụ"
      extra={[
        <>
          <Button
            style={{ padding: 0 }}
            type="link"
            onClick={() => {
              history.goBack();
            }}
          >
            <RollbackOutlined style={{ fontSize: 36 }} /> Quay lại
          </Button>
        </>,
      ]}
    >
      <Card bordered={false} tabList={operationTabList} onTabChange={onOperationTabChange}>
        <ProForm formRef={formRefAdministrativeInforStep} submitter={{ render: () => null }}>
          {contentList[tabStatus.operationKey]}
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default EditPatient;
