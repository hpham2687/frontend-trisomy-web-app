import BaseModal from '@/components/Common/Modal';
import { StyledForm } from '@/components/Common/TestResult';
import { TEST_NAME } from '@/constants/tests';
import useAsync from '@/hooks/useAsync';
import { Button, DatePicker, Form, Input, message } from 'antd';
import { addTestResult, editTestResult } from './service';
import './style/index.css';

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
