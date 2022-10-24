/* eslint-disable @typescript-eslint/no-use-before-define */
import AdministrativeInforStep from '@/pages/trisomy/patients/add/AdministrativeInforStep';
import PrehistoricStep from '@/pages/trisomy/patients/add/PrehistoricStep';
import { StepsForm } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, FormInstance, Result } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'umi';
import type { AdministrativeStepDataType } from './data';
import { postAddPatient } from './service';

import './style/index.css';
import styles from './style/index.less';

const StepDescriptions: React.FC<{
  stepData: AdministrativeStepDataType;
  bordered?: boolean;
}> = ({ stepData, bordered }) => {
  const { payAccount, receiverAccount, receiverName, amount } = stepData;
  return <>null</>;
};

const StepResult: React.FC<{
  onFinish: () => Promise<void>;
}> = (props) => {
  return (
    <Result
      status="success"
      title="Thành công"
      subTitle="Thêm bệnh nhân thành công"
      extra={
        <>
          <Link to="/trisomy/patients/">
            <Button type="primary" onClick={props.onFinish}>
              Xem tất cả bệnh nhân
            </Button>
          </Link>
        </>
      }
      className={styles.result}
    ></Result>
  );
};

const stepDataInitalState = {
  weight: '',
  address: '',
  fullName: '',
  dateOfBirth: '2000-3-28',
};

const AddPatient: React.FC<Record<string, any>> = () => {
  const [administrativeInforStep, setAdministrativeInforStep] =
    useState<AdministrativeStepDataType>(stepDataInitalState);
  const [prehistoric, setPrehistoric] = useState<any>(stepDataInitalState);
  const [current, setCurrent] = useState(0);
  const formRef = useRef<FormInstance>();

  const onSubmitAdministrativeInforStep = async (values: any) => {
    console.log(values);
    // setCurrent(1);
    setAdministrativeInforStep(values);
    return true;
  };

  const onSubmitPrehistoricStep = useCallback(
    async (values: any) => {
      setPrehistoric(values);
      // Submit value here
      const payload = {
        ...administrativeInforStep,
        ...values,
      };
      try {
        const addPatient = await postAddPatient(payload);
        if (addPatient) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
        message.error(error);
        return false;
      }
    },
    [administrativeInforStep, prehistoric],
  );

  return (
    <PageContainer content="Trang nhập thông tin thai phụ">
      <Card bordered={false}>
        <StepsForm
          containerStyle={{ width: '100%' }}
          current={current}
          onCurrentChange={setCurrent}
          submitter={{
            render: (props: any, dom: any) => {
              if (props.step === 2) {
                return null;
              }
              return dom;
            },
          }}
        >
          <StepsForm.StepForm<any>
            formRef={formRef}
            title="Thông tin hành chính"
            initialValues={administrativeInforStep}
            onFinish={onSubmitAdministrativeInforStep}
            style={{ width: '100%' }}
          >
            <AdministrativeInforStep />
          </StepsForm.StepForm>

          <StepsForm.StepForm<StepDataType>
            formRef={formRef}
            title="Tiền sử"
            initialValues={prehistoric}
            onFinish={onSubmitPrehistoricStep}
            style={{ width: '100%' }}
          >
            <PrehistoricStep />
          </StepsForm.StepForm>

          <StepsForm.StepForm title="Hoàn thành">
            <StepResult
              onFinish={async () => {
                setCurrent(0);
                formRef.current?.resetFields();
              }}
            >
              <StepDescriptions stepData={prehistoric} />
            </StepResult>
          </StepsForm.StepForm>
        </StepsForm>
        {/* <Divider style={{ margin: '40px 0 24px' }} /> */}
        {/* <div className={styles.desc}>
          <h3>abcd</h3>
          <h4>efgh</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto nam ut excepturi
            suscipit, libero aliquid neque mollitia corrupti beatae asperiores dolorum, recusandae
            eius, quos dignissimos ipsa repellat illum officia!
          </p>
          <h4>转账到银行卡</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam maiores molestias facere
            a fugit! Quidem aspernatur vero minus porro perspiciatis amet distinctio in dolor sed
            suscipit! Tenetur quod eaque numquam.
          </p>
        </div> */}
      </Card>
    </PageContainer>
  );
};

export default AddPatient;
