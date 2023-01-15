import React, { useEffect, useRef, useState } from 'react';
import type { FormInstance } from 'antd';
import { Button, Card, message } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import ProForm from '@ant-design/pro-form';
import { history } from 'umi';
import { PageContainer, PageLoading } from '@ant-design/pro-layout';
import { useParams } from 'react-router';
import useAsync from '@/hooks/useAsync';
import AdministrativeInforStep from '@/pages/patients/add/AdministrativeInforStep';
import PrehistoricStep from '@/pages/patients/add/PrehistoricStep';
import type { StepDataType } from './data';
import { queryPatientDetail } from './service';
import './style/index.css';

const EditPatient: React.FC<Record<string, any>> = () => {
  const [administrativeInforStep, setAdministrativeInforStep] = useState<StepDataType | null>(null);
  const formRefAdministrativeInforStep = useRef<FormInstance>();
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
    return <PageLoading />;
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
