/* eslint-disable @typescript-eslint/no-use-before-define */
import BaseModal from '@/components/Common/Modal';
import { TEST_NAME } from '@/constants/tests';
import useAsync from '@/hooks/useAsync';
import { Button, Form, Input, message } from 'antd';
import { useDispatch } from 'umi';
import { ModalKey } from '..';
import { addBloodTestResult, editBloodTestResult } from './service';

const isTestAdded = (tests: any, testName: string) => {
  return tests.find((test: any) => test.testName === testName);
};

export const ModalSelectTestType = ({ getPatientDetail, patientDetail, ...rest }: any) => {
  const dispatch = useDispatch();
  const { tests } = patientDetail;

  return (
    <BaseModal footer={null} title="Chọn xét nghiệm" {...rest}>
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
        style={{ marginLeft: 8, marginBottom: 8 }}
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
        style={{ marginLeft: 8 }}
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
        style={{ marginLeft: 8 }}
        onClick={() => {
          dispatch({
            type: 'modal/showModal',
            payload: {
              modalKey: ModalKey.INPUT_HEMOGLOBIN_TEST_RESULT,
              customProps: {
                patientDetail,
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
        style={{ marginLeft: 8 }}
        onClick={() => {
          dispatch({
            type: 'modal/showModal',
            payload: {
              modalKey: ModalKey.INPUT_TRIPLE_TEST_RESULT,
            },
          });
        }}
      >
        Triple test
      </Button>
    </BaseModal>
  );
};

export const ModalInputBloodTestResult = ({
  patientDetail,
  editingData,
  getPatientDetail,
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

        let promise = addBloodTestResult;
        if (editingData) {
          promise = editBloodTestResult;
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
      <Form
        name="nest-messages"
        form={form}
        validateMessages={validateMessages}
        initialValues={editingData}
      >
        <Form.Item name={'ctm_rbc'} label="ctm_rbc" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'ctm_hgb'} label="ctm_hgb" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'ctm_hct'} label="ctm_hct" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'ctm_mcv'} label="ctm_mcv" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'ctm_mch'} label="ctm_mch" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'ctm_mchc'} label="ctm_mchc" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'ctm_rdw'} label="ctm_rdw" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
      </Form>
    </BaseModal>
  );
};

export const ModalInputSerumIronTestResult = ({
  patientDetail,
  editingData,
  getPatientDetail,
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
        let promise = addBloodTestResult;
        if (editingData) {
          promise = editBloodTestResult;
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
      <Form
        name="nest-messages"
        form={form}
        validateMessages={validateMessages}
        initialValues={editingData}
      >
        <Form.Item
          name={'ctm_sathuyetthanh'}
          label="ctm_sathuyetthanh"
          rules={[{ required: true }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name={'ctm_ferritinehuyetthanh'}
          label="ctm_ferritinehuyetthanh"
          rules={[{ required: true }]}
        >
          <Input type="number" />
        </Form.Item>
      </Form>
    </BaseModal>
  );
};
export const ModalInputHemoglobinTestResult = ({
  patientDetail,
  editingData,
  getPatientDetail,
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
        let promise = addBloodTestResult;
        if (editingData) {
          promise = editBloodTestResult;
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
      <Form
        name="nest-messages"
        form={form}
        validateMessages={validateMessages}
        initialValues={editingData}
      >
        <Form.Item name={'dd_hba1'} label="dd_hba1" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'dd_hba2'} label="dd_hba2" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'dd_hbe'} label="dd_hbe" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'dd_hbh'} label="dd_hbh" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'dd_hbbar'} label="dd_hbbar" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'dd_hbf'} label="dd_hbf" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'dd_hbkhac'} label="dd_hbkhac" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
      </Form>
    </BaseModal>
  );
};
export const ModalInputDoubleTestResult = ({ onCancel, ...rest }: any) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        console.log(values);
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
    <BaseModal title="Xét nghiệm Double Test" onOk={handleOk} onCancel={onCancel} {...rest}>
      <Form name="nest-messages" form={form} validateMessages={validateMessages}>
        <Form.Item name={'β-hCG tự do'} label="β-hCG tự do" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'PAPP-A'} label="PAPP-A" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
      </Form>
    </BaseModal>
  );
};

export const ModalInputTripleTestResult = ({ onCancel, ...rest }: any) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        console.log(values);
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
    <BaseModal title="Xét nghiệm Triple Test" onOk={handleOk} onCancel={onCancel} {...rest}>
      <Form name="nest-messages" form={form} validateMessages={validateMessages}>
        <Form.Item name={'uE3'} label="uE3" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'AFP'} label="AFP" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'hCG'} label="hCG" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
      </Form>
    </BaseModal>
  );
};
