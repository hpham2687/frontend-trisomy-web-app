/* eslint-disable @typescript-eslint/no-use-before-define */
import useAsync from '@/hooks/useAsync';
import AdministrativeInforStep from '@/pages/trisomy/patients/add/AdministrativeInforStep';
import PrehistoricStep from '@/pages/trisomy/patients/add/PrehistoricStep';
import { RollbackOutlined } from '@ant-design/icons';
import { StepsForm } from '@ant-design/pro-form';
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

  const onSubmitAdministrativeInforStep = async (values: any) => {
    setAdministrativeInforStep(values);
    return true;
  };

  const onSubmitPrehistoricStep = async (values: any) => {
    console.log(values);
    // setCurrent(1);
    setPrehistoric(values);
    // Submit value here
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
    return (
      <>
        {' '}
        <PageLoading />
      </>
    );
  }
  return (
    <PageContainer
      content="Trang sửa thông tin thai phụ"
      extra={[
        <>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              history.goBack();
            }}
          >
            <RollbackOutlined style={{ fontSize: 36 }} /> Quay lại
          </div>
        </>,
      ]}
    >
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

              return null;
            },
          }}
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
                history.push('/trisomy/patients/');
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
                formRefAdministrativeInforStep.current
                  ?.validateFields()
                  .then((values) => {
                    setAdministrativeInforStep(values);
                    setCurrent((prev) => prev + 1);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              Tiếp theo
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

export default EditPatient;
