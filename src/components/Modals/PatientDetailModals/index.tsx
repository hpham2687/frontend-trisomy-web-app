/* eslint-disable @typescript-eslint/no-use-before-define */
import BaseModal from '@/components/Common/Modal';
import { TEST_NAME } from '@/constants/tests';
import useAsync from '@/hooks/useAsync';
import { ProFormRadio } from '@ant-design/pro-form';
import { Button, Col, Row, DatePicker, Form, Input, message, InputNumber } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'umi';
import { ModalKey } from '..';
import { addTestResult, editTestResult } from './service';
import './style/index.css';

const isTestExist = (tests: any[], name: string) => {
  return !!tests?.find((test) => test.testName === name);
};

export const ModalSelectTestType = ({ getPatientDetail, patientDetail, ...rest }: any) => {
  const dispatch = useDispatch();
  const { tests } = patientDetail;
  return (
    <BaseModal footer={null} title="Chọn xét nghiệm" {...rest}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.BLOOD_TEST)}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_BLOOD_TEST_RESULT,
                customProps: {
                  patientDetail,
                  getPatientDetail: () => {
                    // TODO: backend return only created test, we will add to redux, don't need to fetch again
                    getPatientDetail();
                  },
                },
              },
            });
          }}
        >
          Xét nghiệm máu
        </Button>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.SERUM_IRON_TEST)}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_SERUM_IRON_TEST_RESULT,
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
          Xét nghiệm sắt huyết thanh
        </Button>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.HEMOGLOBIN_TEST)}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_HEMOGLOBIN_TEST_RESULT,
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
          Xét nghiệm điện di huyết sắc tố
        </Button>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.DOUBLE_TEST)}
          // style={{ marginLeft: 8 }}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_DOUBLE_TEST_RESULT,
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
          Double test
        </Button>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.TRIPLE_TEST)}
          // style={{ marginLeft: 8 }}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_TRIPLE_TEST_RESULT,
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
          Triple test
        </Button>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.FIRST_ULTRASOUND_TEST)}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_FIRST_ULTRASOUND_TEST_RESULT,
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
          Siêu âm kỳ 1
        </Button>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.SECOND_ULTRASOUND_TEST)}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_SECOND_ULTRASOUND_TEST_RESULT,
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
          Siêu âm kỳ 2
        </Button>
      </div>
    </BaseModal>
  );
};

export const ModalInputBloodTestResult = ({
  patientDetail,
  editingData,
  getPatientDetail,
  readonly,
  onCancel,
  ...rest
}: any) => {
  const [form] = Form.useForm();
  const { run, isLoading } = useAsync();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        const payload = {};
        // Convert to number type
        Object.keys(values).forEach(function (key: string) {
          payload[key] = Number(values[key]);
        });

        if (editingData) {
          run(
            editTestResult({
              patientId: patientDetail.id,
              testId: editingData.id,
              payload,
              testName: TEST_NAME.BLOOD_TEST,
            }),
          )
            .then(() => {
              message.success(`Sửa kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        } else {
          run(
            addTestResult({
              patientId: patientDetail.id,
              testName: TEST_NAME.BLOOD_TEST,
              payload,
            }),
          )
            .then(() => {
              message.success(`Thêm kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        }
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <BaseModal
      title="Xét nghiệm máu"
      onOk={handleOk}
      isLoading={isLoading}
      loading={true}
      onCancel={onCancel}
      footer={
        readonly
          ? null
          : [
              <Button key="back" onClick={onCancel}>
                Hủy
              </Button>,
              <Button key="submit" type="primary" onClick={handleOk}>
                {editingData ? 'Sửa' : 'Thêm'}
              </Button>,
              ,
            ]
      }
      {...rest}
    >
      <StyledForm
        name="nest-messages"
        form={form}
        validateMessages={validateMessages}
        initialValues={editingData}
      >
        <Form.Item
          name={'test_date'}
          label="Ngày XN"
          rules={[{ required: true, message: 'Vui lòng nhập ngày xét nghiệm' }]}
        >
          <DatePicker
            placeholder="Nhập ngày xét nghiệm"
            style={{ width: '100%' }}
            className={`${readonly ? 'readonly' : ''}`}
            format="DD-MM-YYYY"
          />
        </Form.Item>
        <Form.Item
          name={'ctm_rbc'}
          label="RBC"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị G/l'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            readOnly={readonly}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'ctm_hgb'}
          label="HGB"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị g/l'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            readOnly={readonly}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'ctm_hct'}
          label="HCT"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị l/l'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            readOnly={readonly}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'ctm_mcv'}
          label="MCV"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị fl'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            readOnly={readonly}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'ctm_mch'}
          label="MCH"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị pg'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            readOnly={readonly}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'ctm_mchc'}
          label="MCHC"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị g/l'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            readOnly={readonly}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'ctm_rdw'}
          label="RDW"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            readOnly={readonly}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
      </StyledForm>
    </BaseModal>
  );
};

export const ModalInputSerumIronTestResult = ({
  patientDetail,
  editingData,
  getPatientDetail,
  readonly,
  onCancel,
  ...rest
}: any) => {
  const [form] = Form.useForm();
  const { run, isLoading } = useAsync();
  //TODO: handle route edit test
  const handleOk = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      const payload = {};
      Object.keys(values).forEach(function (key: string) {
        payload[key] = Number(values[key]);
      });
      if (editingData) {
        run(
          editTestResult({
            patientId: patientDetail.id,
            testId: editingData.id,
            payload,
            testName: TEST_NAME.SERUM_IRON_TEST,
          }),
        )
          .then(() => {
            message.success(`Sửa kết quả xét nghiệm thành công!`);
            getPatientDetail();
            onCancel();
          })
          .catch((error: any) => {
            console.log(error);
            message.error(error.error || 'Có lỗi xảy ra!');
          });
      } else {
        run(
          addTestResult({
            patientId: patientDetail.id,
            testName: TEST_NAME.SERUM_IRON_TEST,
            payload,
          }),
        )
          .then(() => {
            message.success(`Thêm kết quả xét nghiệm thành công!`);
            getPatientDetail();
            onCancel();
          })
          .catch((error: any) => {
            console.log(error);
            message.error(error.error || 'Có lỗi xảy ra!');
          });
      }
    });
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <BaseModal
      title="Xét nghiệm sắt huyết thanh"
      onOk={handleOk}
      isLoading={isLoading}
      loading={true}
      onCancel={onCancel}
      footer={
        readonly
          ? null
          : [
              <Button key="back" onClick={onCancel}>
                Hủy
              </Button>,
              <Button key="submit" type="primary" onClick={handleOk}>
                {editingData ? 'Sửa' : 'Thêm'}
              </Button>,
              ,
            ]
      }
      {...rest}
    >
      <Form
        name="nest-messages"
        form={form}
        validateMessages={validateMessages}
        initialValues={editingData}
        wrapperCol={{ span: 24 }}
        layout="vertical"
      >
        <Form.Item
          name={'test_date'}
          label="Ngày XN"
          rules={[{ required: true, message: 'Vui lòng nhập ngày xét nghiệm' }]}
        >
          <DatePicker
            placeholder="Nhập ngày xét nghiệm"
            style={{ width: '100%' }}
            format="DD-MM-YYYY"
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 24 }}
          name={'ctm_sathuyetthanh'}
          label="Định lượng sắt huyết thanh"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị umol/l'}
          wrapperCol={{ span: 24 }}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 12 }}
          name={'ctm_ferritinehuyetthanh'}
          label="Định lượng Ferritine huyết thanh"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị ug/l'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
      </Form>
    </BaseModal>
  );
};
export const ModalInputHemoglobinTestResult = ({
  patientDetail,
  editingData,
  getPatientDetail,
  readonly,
  onCancel,
  ...rest
}: any) => {
  const [form] = Form.useForm();
  const { run, isLoading } = useAsync();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        const payload = {};
        Object.keys(values).forEach(function (key: string) {
          payload[key] = Number(values[key]);
        });
        if (editingData) {
          run(
            editTestResult({
              patientId: patientDetail.id,
              testId: editingData.id,
              payload,
              testName: TEST_NAME.HEMOGLOBIN_TEST,
            }),
          )
            .then(() => {
              message.success(`Sửa kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        } else {
          run(
            addTestResult({
              patientId: patientDetail.id,
              testName: TEST_NAME.HEMOGLOBIN_TEST,
              payload,
            }),
          )
            .then(() => {
              message.success(`Thêm kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        }
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <BaseModal
      title="Xét nghiện điện di huyết sắc tố"
      onOk={handleOk}
      isLoading={isLoading}
      onCancel={onCancel}
      footer={
        readonly
          ? null
          : [
              <Button key="back" onClick={onCancel}>
                Hủy
              </Button>,
              <Button key="submit" type="primary" onClick={handleOk}>
                {editingData ? 'Sửa' : 'Thêm'}
              </Button>,
              ,
            ]
      }
      {...rest}
    >
      <StyledForm
        name="nest-messages"
        form={form}
        validateMessages={validateMessages}
        initialValues={editingData}
      >
        <Form.Item
          name={'test_date'}
          label="Ngày XN"
          rules={[{ required: true, message: 'Vui lòng nhập ngày xét nghiệm' }]}
        >
          <DatePicker
            placeholder="Nhập ngày xét nghiệm"
            style={{ width: '100%' }}
            format="DD-MM-YYYY"
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'dd_hba1'}
          label="HbA1"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'dd_hba2'}
          label="HbA2"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'dd_hbe'}
          label="HbE"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'dd_hbh'}
          label="Hb H"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'dd_hbbar'}
          label="Hb Bar"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'dd_hbf'}
          label="HbF"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'dd_hbkhac'}
          label="Hb khác"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
      </StyledForm>
    </BaseModal>
  );
};
export const ModalInputDoubleTestResult = ({
  patientDetail,
  editingData,
  getPatientDetail,
  readonly,
  onCancel,
  ...rest
}: any) => {
  const [form] = Form.useForm();
  const { run, isLoading } = useAsync();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        const payload = {};
        Object.keys(values).forEach(function (key: string) {
          payload[key] = Number(values[key]);
        });

        if (editingData) {
          run(
            editTestResult({
              patientId: patientDetail.id,
              testId: editingData.id,
              payload,
              testName: TEST_NAME.DOUBLE_TEST,
            }),
          )
            .then(() => {
              message.success(`Sửa kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        } else {
          run(
            addTestResult({
              patientId: patientDetail.id,
              testName: TEST_NAME.DOUBLE_TEST,
              payload,
            }),
          )
            .then(() => {
              message.success(`Thêm kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        }
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <BaseModal
      title="Xét nghiệm Double Test"
      onOk={handleOk}
      isLoading={isLoading}
      loading={true}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {editingData ? 'Sửa' : 'Thêm'}
        </Button>,
        ,
      ]}
      {...rest}
    >
      <StyledForm
        name="nest-messages"
        form={form}
        validateMessages={validateMessages}
        initialValues={editingData}
      >
        <Form.Item
          name={'test_date'}
          label="Ngày XN"
          rules={[{ required: true, message: 'Vui lòng nhập ngày xét nghiệm' }]}
        >
          <DatePicker
            placeholder="Nhập ngày xét nghiệm"
            style={{ width: '100%' }}
            format="DD-MM-YYYY"
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'bhcg'}
          label="β-hCG tự do"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị MoM'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'pappa'}
          label="PAPP-A"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị MoM'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'nt'}
          label="NT"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị MoM'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
      </StyledForm>
    </BaseModal>
  );
};

export const ModalInputTripleTestResult = ({
  patientDetail,
  editingData,
  getPatientDetail,
  readonly,
  onCancel,
  ...rest
}: any) => {
  const [form] = Form.useForm();
  const { run, isLoading } = useAsync();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        const payload = {};
        // Convert to number type
        Object.keys(values).forEach(function (key: string) {
          payload[key] = Number(values[key]);
        });

        if (editingData) {
          run(
            editTestResult({
              patientId: patientDetail.id,
              testId: editingData.id,
              payload,
              testName: TEST_NAME.TRIPLE_TEST,
            }),
          )
            .then(() => {
              message.success(`Sửa kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        } else {
          run(
            addTestResult({
              patientId: patientDetail.id,
              testName: TEST_NAME.TRIPLE_TEST,
              payload,
            }),
          )
            .then(() => {
              message.success(`Thêm kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        }
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <BaseModal
      title="Xét nghiệm Triple Test"
      onOk={handleOk}
      isLoading={isLoading}
      loading={true}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {editingData ? 'Sửa' : 'Thêm'}
        </Button>,
        ,
      ]}
      {...rest}
    >
      <StyledForm
        name="nest-messages"
        form={form}
        validateMessages={validateMessages}
        initialValues={editingData}
      >
        <Form.Item
          name={'test_date'}
          label="Ngày XN"
          rules={[{ required: true, message: 'Vui lòng nhập ngày xét nghiệm' }]}
        >
          <DatePicker
            placeholder="Nhập ngày xét nghiệm"
            style={{ width: '100%' }}
            format="DD-MM-YYYY"
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'ue3'}
          label="uE3"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị MoM'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'afp'}
          label="AFP"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị MoM'}
        >
          <InputNumber style={{ width: '100%' }} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'hcg'}
          label="hCG"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị MoM'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
      </StyledForm>
    </BaseModal>
  );
};

export const ModalInputFirstUltrasoundTestResult = ({
  patientDetail,
  editingData,
  getPatientDetail,
  readonly,
  onCancel,
  ...rest
}: any) => {
  const [form] = Form.useForm();
  const { run, isLoading } = useAsync();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        console.log(values);
        const payload = {};
        // Convert to number type
        Object.keys(values).forEach(function (key: string) {
          payload[key] = Number(values[key]);
        });

        if (editingData) {
          run(
            editTestResult({
              patientId: patientDetail.id,
              testId: editingData.id,
              payload,
              testName: TEST_NAME.FIRST_ULTRASOUND_TEST,
            }),
          )
            .then(() => {
              message.success(`Sửa kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        } else {
          run(
            addTestResult({
              patientId: patientDetail.id,
              testName: TEST_NAME.FIRST_ULTRASOUND_TEST,
              payload,
            }),
          )
            .then(() => {
              message.success(`Thêm kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        }
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <BaseModal
      title="Siêu âm kỳ 1"
      onOk={handleOk}
      isLoading={isLoading}
      loading={true}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {editingData ? 'Sửa' : 'Thêm'}
        </Button>,
        ,
      ]}
      {...rest}
    >
      <StyledFormUltraSound
        name="first-ultrasound-form"
        form={form}
        validateMessages={validateMessages}
        initialValues={editingData}
      >
        <Form.Item
          name={'test_date'}
          label="Ngày XN"
          rules={[{ required: true, message: 'Vui lòng nhập ngày xét nghiệm' }]}
        >
          <DatePicker
            placeholder="Nhập ngày siêu âm"
            style={{ width: '100%' }}
            format="DD-MM-YYYY"
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'nuchal_translucency'}
          label="Độ mờ da gáy NT"
          rules={[{ required: true, message: 'Vui lòng nhập thông tin độ mờ da gáy' }]}
          extra={readonly ? '' : 'Đơn vị mm'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'crown_rump_length'}
          // Crown Rump Length
          label="Chiều dài đầu mông"
          rules={[{ required: false, message: 'Vui lòng nhập thông tin chiều dài đầu mông' }]}
          extra={readonly ? '' : 'Đơn vị mm'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'heartbeat'}
          label="Nhịp tim thai"
          rules={[{ required: false, message: '' }]}
          extra={readonly ? '' : 'Đơn vị lần/phút'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Row>
          <Col span={12}>
            <ProFormRadio.Group
              radioType="button"
              label="Xương mũi"
              name="nose_bone"
              options={[
                { label: 'Có', value: true },
                { label: 'Không', value: false },
              ]}
              readonly={readonly}
              rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
            />
          </Col>
          <Col span={12}>
            <ProFormRadio.Group
              radioType="button"
              label="Dị tật tim"
              name="heart_defect"
              options={[
                { label: 'Có', value: true },
                { label: 'Không', value: false },
              ]}
              readonly={readonly}
              rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProFormRadio.Group
              radioType="button"
              label="Nang bạch huyết vùng cổ"
              name="cervical_lymph_node"
              options={[
                { label: 'Có', value: true },
                { label: 'Không', value: false },
              ]}
              readonly={readonly}
              rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
            />
          </Col>
        </Row>
      </StyledFormUltraSound>
    </BaseModal>
  );
};

export const ModalInputSecondUltrasoundTestResult = ({
  patientDetail,
  editingData,
  getPatientDetail,
  readonly,
  onCancel,
  ...rest
}: any) => {
  const [form] = Form.useForm();
  const { run, isLoading } = useAsync();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        console.log(values);
        const payload = {};
        // Convert to number type
        Object.keys(values).forEach(function (key: string) {
          payload[key] = Number(values[key]);
        });

        if (editingData) {
          run(
            editTestResult({
              patientId: patientDetail.id,
              testId: editingData.id,
              payload,
              testName: TEST_NAME.SECOND_ULTRASOUND_TEST,
            }),
          )
            .then(() => {
              message.success(`Sửa kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        } else {
          run(
            addTestResult({
              patientId: patientDetail.id,
              testName: TEST_NAME.SECOND_ULTRASOUND_TEST,
              payload,
            }),
          )
            .then(() => {
              message.success(`Thêm kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        }
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  // Hide or show nose_bone_length
  const [isHasNoseBone, setIsHasNoseBone] = useState(editingData?.nose_bone);
  return (
    <BaseModal
      title="Siêu âm kỳ 2"
      onOk={handleOk}
      isLoading={isLoading}
      loading={true}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {editingData ? 'Sửa' : 'Thêm'}
        </Button>,
        ,
      ]}
      {...rest}
    >
      <StyledFormUltraSound
        name="second-ultrasound-form"
        form={form}
        validateMessages={validateMessages}
        initialValues={editingData}
      >
        <Form.Item
          name={'test_date'}
          label="Ngày XN"
          rules={[{ required: true, message: 'Vui lòng nhập ngày xét nghiệm' }]}
        >
          <DatePicker
            placeholder="Nhập ngày siêu âm"
            style={{ width: '100%' }}
            format="DD-MM-YYYY"
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>

        <ProFormRadio.Group
          radioType="button"
          label="Xương mũi"
          name="nose_bone"
          options={[
            { label: 'Có', value: true, onChange: () => setIsHasNoseBone(true) },
            { label: 'Không', value: false, onChange: () => setIsHasNoseBone(false) },
          ]}
          readonly={readonly}
          rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
        />
        {isHasNoseBone && (
          <Form.Item
            name={'nose_bone_length'}
            label="Chiều dài xương mũi"
            rules={[{ required: true, message: 'Vui lòng nhập thông tin chiều dài xương mũi' }]}
            extra={readonly ? '' : 'Đơn vị mm'}
          >
            <Input
              type="number"
              onWheel={(event) => event.currentTarget.blur()}
              className={`${readonly ? 'readonly' : ''}`}
            />
          </Form.Item>
        )}

        <Row>
          <Col span={12}>
            <ProFormRadio.Group
              radioType="button"
              label="Dị tật tim"
              name="heart_defect"
              options={[
                { label: 'Có', value: true },
                { label: 'Không', value: false },
              ]}
              readonly={readonly}
              rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
            />
          </Col>
          <Col span={12}>
            <ProFormRadio.Group
              radioType="button"
              label="Nang bạch huyết ở vùng cổ"
              name="cervical_lymph_node"
              options={[
                { label: 'Có', value: true },
                { label: 'Không', value: false },
              ]}
              readonly={readonly}
              rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
            />
          </Col>
        </Row>
      </StyledFormUltraSound>
    </BaseModal>
  );
};

const StyledForm = styled(Form)`
  .ant-form-item-label {
    min-width: 100px !important;
  }
`;

const StyledFormUltraSound = styled(Form)`
  .ant-col.ant-form-item-label {
    text-align: left;
  }
  .ant-row.ant-form-item-row {
    flex-direction: column;
  }
`;
