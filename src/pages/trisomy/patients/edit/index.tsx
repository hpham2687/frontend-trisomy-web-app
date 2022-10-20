/* eslint-disable @typescript-eslint/no-use-before-define */
import useAsync from '@/hooks/useAsync';
import AdministrativeInforStep from '@/pages/trisomy/patients/add/AdministrativeInforStep';
import PrehistoricStep from '@/pages/trisomy/patients/add/PrehistoricStep';
import { StepsForm } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import {
  Button,
  Card,
  Descriptions,
  Divider,
  FormInstance,
  message,
  Result,
  Statistic,
} from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import type { StepDataType } from './data';
import { postAddPatient, postEditPatient, queryPatientDetail } from './service';
import styles from './style.less';

const StepDescriptions: React.FC<{
  stepData: StepDataType;
  bordered?: boolean;
}> = ({ stepData, bordered }) => {
  return (
    <Descriptions column={1} bordered={bordered}>
      <Descriptions.Item label="付款账户"> dsf</Descriptions.Item>
      <Descriptions.Item label="收款账户">e</Descriptions.Item>
      <Descriptions.Item label="收款人姓名"> sdfsdf</Descriptions.Item>
      <Descriptions.Item label="转账金额">
        <Statistic
          value={423}
          suffix={
            <span
              style={{
                fontSize: 14,
              }}
            >
              元
            </span>
          }
          precision={2}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};

const StepResult: React.FC<{
  onFinish: () => Promise<void>;
}> = (props) => {
  return (
    <Result
      status="success"
      title="Thành công"
      subTitle="Sua bệnh nhân thành công"
      extra={
        <>
          <Button type="primary" onClick={props.onFinish}>
            Xem tất cả bệnh nhân
          </Button>
          <Button>Xem tất cả bệnh nhân vừa thêm</Button>
        </>
      }
      className={styles.result}
    >
      {props.children}
    </Result>
  );
};

const stepDataInitalState = {
  payAccount: 'ant-design@alipay.com',
  weight: '43',
  address: 'Alex',
  fullName: 'thai hung 4',
  dateOfBirth: '2000-3-28',
};

const AddPatient: React.FC<Record<string, any>> = () => {
  const [administrativeInforStep, setAdministrativeInforStep] = useState<StepDataType>(null);
  const [prehistoric, setPrehistoric] = useState<any>();
  const [current, setCurrent] = useState(0);
  const formRef = useRef<FormInstance>();
  const { run, isLoading } = useAsync();
  const { patientId } = useParams();

  useEffect(() => {
    run(queryPatientDetail(patientId))
      .then((response: any) => {
        setAdministrativeInforStep(response);
        console.log(response);
        console.log(formRef.current);

        formRef.current?.setFieldsValue({
          ...response,
        });
      })
      .catch((error: any) => {
        console.log(error);
        message.error(error.error || 'Có lỗi xảy ra!');
      });
  }, [patientId, formRef]);

  const onSubmitAdministrativeInforStep = async (values: any) => {
    setAdministrativeInforStep(values);
    return true;
  };

  const onSubmitPrehistoricStep = async (values: any) => {
    console.log(values);
    // setCurrent(1);
    setPrehistoric(values);
    // SUbmit value here
    const payload = {
      ...administrativeInforStep,
      ...prehistoric,
    };
    try {
      const editPatient = await postEditPatient(patientId, payload);
      if (editPatient) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      message.error(error);
      return false;
    }
  };

  if (isLoading || !administrativeInforStep) {
    return 'loading';
  }
  return (
    <PageContainer content="Mô tả nhập thông tin bệnh nhân">
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
      </Card>
    </PageContainer>
  );
};

export default AddPatient;
