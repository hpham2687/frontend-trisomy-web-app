/* eslint-disable @typescript-eslint/no-use-before-define */
import BaseModal from '@/components/Common/Modal';
import { TEST_NAME } from '@/constants/tests';
import useAsync from '@/hooks/useAsync';
import { Button, DatePicker, Form, Input, message } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'umi';
import { ModalKey } from '..';
import { addTestResult, editTestResult } from './service';

import './style/index.css';

const isTestAdded = (tests: any, testName: string) => {
  return tests.find((test: any) => test.testName === testName);
};

export const ModalSelectTestType = ({ getPatientDetail, patientDetail, ...rest }: any) => {
  const dispatch = useDispatch();
  const { tests } = patientDetail;

  return (
    <BaseModal footer={null} title="Chọn xét nghiệm" {...rest}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Button
          type="primary"
          disabled={isTestAdded(tests, TEST_NAME.BLOOD_TEST)}
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
          // style={{ marginLeft: 8, marginBottom: 8 }}
          disabled={isTestAdded(tests, TEST_NAME.SERUM_IRON_TEST)}
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
          // style={{ marginLeft: 8 }}
          disabled={isTestAdded(tests, TEST_NAME.HEMOGLOBIN_TEST)}
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
          disabled={patientDetail?.double_test}
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
          disabled={patientDetail?.triple_test}
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

        let promise = addTestResult;
        if (editingData) {
          promise = editTestResult;
        }
        run(
          promise({
            patientId: patientDetail.id,
            testName: TEST_NAME.BLOOD_TEST,
            payload,
          }),
        )
          .then(() => {
            message.success(`${editingData ? 'Sửa' : 'Thêm'} kết quả xét nghiệm thành công!`);
            getPatientDetail();
            onCancel();
          })
          .catch((error: any) => {
            console.log(error);
            message.error(error.error || 'Có lỗi xảy ra!');
          });
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
        <Form.Item name={'test_date'} label="Ngày XN" rules={[{ required: true }]}>
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
          <Input type="number" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ctm_hgb'}
          label="HGB"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị g/l'}
        >
          <Input type="number" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ctm_hct'}
          label="HCT"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị l/l'}
        >
          <Input type="number" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ctm_mcv'}
          label="MCV"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị fl'}
        >
          <Input type="number" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ctm_mch'}
          label="MCH"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị pg'}
        >
          <Input type="number" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ctm_mchc'}
          label="MCHC"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị g/l'}
        >
          <Input type="number" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ctm_rdw'}
          label="RDƯ"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="number" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
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

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        const payload = {};
        Object.keys(values).forEach(function (key: string) {
          payload[key] = Number(values[key]);
        });
        let promise = addTestResult;
        if (editingData) {
          promise = editTestResult;
        }
        run(
          promise({
            patientId: patientDetail.id,
            testName: TEST_NAME.SERUM_IRON_TEST,
            payload,
          }),
        )
          .then(() => {
            message.success(`${editingData ? 'Sửa' : 'Thêm'} kết quả xét nghiệm thành công!`);
            getPatientDetail();
            onCancel();
          })
          .catch((error: any) => {
            console.log(error);
            message.error(error.error || 'Có lỗi xảy ra!');
          });
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
        <Form.Item name={'test_date'} label="Ngày XN" rules={[{ required: true }]}>
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
          <Input type="number" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 12 }}
          name={'ctm_ferritinehuyetthanh'}
          label="Định lượng Ferritine huyết thanh"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị ug/l'}
        >
          <Input type="number" className={`${readonly ? 'readonly' : ''}`} />
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
        let promise = addTestResult;
        if (editingData) {
          promise = editTestResult;
        }
        run(
          promise({
            patientId: patientDetail.id,
            testName: TEST_NAME.HEMOGLOBIN_TEST,
            payload,
          }),
        )
          .then((response: any) => {
            console.log(response);
            getPatientDetail();
            message.success('Thêm kết quả xét nghiệm thành công!');
            onCancel();
          })
          .catch((error: any) => {
            console.log(error);
            message.error(error.error || 'Có lỗi xảy ra!');
          });
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
        <Form.Item name={'test_date'} label="Ngày XN" rules={[{ required: true }]}>
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
          <Input type="number" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'dd_hba2'}
          label="HbA2"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="number" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'dd_hbe'}
          label="HbE"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="number" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'dd_hbh'}
          label="Hb H"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="number" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'dd_hbbar'}
          label="Hb Bar"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="number" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'dd_hbf'}
          label="HbF"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="number" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'dd_hbkhac'}
          label="Hb khác"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="number" className={`${readonly ? 'readonly' : ''}`} />
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
      console.log(values);
      const payload = {};
      Object.keys(values).forEach(function (key: string) {
        payload[key] = Number(values[key]);
      });

      let promise = addTestResult;
      if (editingData) {
        promise = editTestResult;
      }
      run(
        promise({
          patientId: patientDetail.id,
          testName: TEST_NAME.DOUBLE_TEST,
          payload,
        }),
      )
        .then((response: any) => {
          console.log(response);
          getPatientDetail();
          message.success(`${editingData ? 'Sửa' : 'Thêm'} kết quả xét nghiệm thành công!`);
          onCancel();
        })
        .catch((error: any) => {
          console.log(error);
          message.error(error.error || 'Có lỗi xảy ra!');
        });
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
        <Form.Item name={'testDate'} label="Ngày XN" rules={[{ required: true }]}>
        <DatePicker
          placeholder="Nhập ngày xét nghiệm"
          style={{ width: '100%' }}
          format="DD-MM-YYYY"
          className={`${readonly ? 'readonly' : ''}`}
        />
      </Form.Item>
      <Form.Item 
      name={'β-hCG tự do'} 
      label="β-hCG tự do" rules={[{ required: true }]}>
        <Input type="number" className={`${readonly ? 'readonly' : ''}`}/>
      </Form.Item>
      <Form.Item 
      name={'PAPP-A'} 
      label="PAPP-A" rules={[{ required: true }]}>
        <Input type="number" className={`${readonly ? 'readonly' : ''}`}/>
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
      console.log(values);
      const payload = {};
      // Convert to number type
      Object.keys(values).forEach(function (key: string) {
        payload[key] = Number(values[key]);
      });

      let promise = addTestResult;
      if (editingData) {
        promise = editTestResult;
      }
      run(
        promise({
          patientId: patientDetail.id,
          testName: TEST_NAME.BLOOD_TEST,
          payload,
        }),
      )
        .then(() => {
          message.success(`${editingData ? 'Sửa' : 'Thêm'} kết quả xét nghiệm thành công!`);
          getPatientDetail();
          onCancel();
        })
        .catch((error: any) => {
          console.log(error);
          message.error(error.error || 'Có lỗi xảy ra!');
        });
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

const onFinish = (values: any) => {
  console.log(values);
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
      <Form.Item name={'testDate'} label="Ngày XN" rules={[{ required: true }]}>
        <DatePicker
          placeholder="Nhập ngày xét nghiệm"
          style={{ width: '100%' }}
          format="DD-MM-YYYY"
          className={`${readonly ? 'readonly' : ''}`}
        />
      </Form.Item>
      <Form.Item 
      name={'uE3'} 
      label="uE3" rules={[{ required: true }]}>
        <Input type="number" className={`${readonly ? 'readonly' : ''}`}/>
      </Form.Item>
      <Form.Item 
      name={'AFP'} 
      label="AFP" rules={[{ required: true }]}>
        <Input type="number" className={`${readonly ? 'readonly' : ''}`}/>
      </Form.Item>
      <Form.Item 
      name={'hCG'} 
      label="hCG" rules={[{ required: true }]}>
        <Input type="number" className={`${readonly ? 'readonly' : ''}`}/>
      </Form.Item>
    </StyledForm>
  </BaseModal>
);
};

const StyledForm = styled(Form)`
.ant-form-item-label {
  min-width: 100px !important;
  /* text-align: left !important; */
}
`;
