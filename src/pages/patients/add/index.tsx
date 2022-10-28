/* eslint-disable @typescript-eslint/no-use-before-define */
import AdministrativeInforStep from '@/pages/patients/add/AdministrativeInforStep';
import PrehistoricStep from '@/pages/patients/add/PrehistoricStep';
import { StepsForm } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, FormInstance, message, Result } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'umi';
import type { AdministrativeStepDataType } from './data';
import { postAddPatient } from './service';

import './style/index.css';
import styles from './style/index.less';

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
          <Link to="/patients/">
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
  address: '',
  fullName: '',
};

const AddPatient: React.FC<Record<string, any>> = () => {
  const [administrativeInforStep, setAdministrativeInforStep] =
    useState<AdministrativeStepDataType>(stepDataInitalState);
  const [prehistoric, setPrehistoric] = useState<any>(stepDataInitalState);
  const [current, setCurrent] = useState(0);
  const formRefAdministrativeInforStep = useRef<FormInstance>();
  const formRefPrehistoricStep = useRef<FormInstance>();

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
        message.error(JSON.stringify(error));
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
            searchConfig: {
              submitText: 'Tiếp',
            },
            render: (props: any, dom: any) => {
              if (props.step === 2) {
                return null;
              }
              return null;
            },
          }}
          // stepsFormRender={(steps, dom) => {

          //   return dom;
          // }}
        >
          <StepsForm.StepForm<any>
            formRef={formRefAdministrativeInforStep}
            title="Thông tin hành chính"
            initialValues={administrativeInforStep}
            onFinish={onSubmitAdministrativeInforStep}
            style={{ width: '100%' }}
          >
            <AdministrativeInforStep />
          </StepsForm.StepForm>

          <StepsForm.StepForm<StepDataType>
            formRef={formRefPrehistoricStep}
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
                formRefAdministrativeInforStep.current?.resetFields();
              }}
            ></StepResult>
          </StepsForm.StepForm>
        </StepsForm>

        <div className="steps-action">
          {current < 2 && (
            <Button
              type="primary"
              onClick={() => {
                if (current === 1) {
                  formRefPrehistoricStep.current?.validateFields().then((values) => {
                    setCurrent((prev) => prev + 1);
                    onSubmitPrehistoricStep(values);
                  });
                  return;
                }
                formRefAdministrativeInforStep.current?.validateFields().then((values) => {
                  setAdministrativeInforStep(values);
                  setCurrent((prev) => prev + 1);
                });
              }}
            >
              {current === 1 ? 'Lưu' : 'Tiếp theo'}
            </Button>
          )}

          {current > 0 && current < 2 && (
            <Button style={{ margin: '0 8px' }} onClick={() => setCurrent((prev) => prev - 1)}>
              Quay lại
            </Button>
          )}
        </div>
      </Card>
    </PageContainer>
  );
};

export default AddPatient;
