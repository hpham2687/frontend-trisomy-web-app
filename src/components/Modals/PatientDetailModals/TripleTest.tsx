import { Button, DatePicker, Form, Input, InputNumber } from 'antd';
import BaseModal from '@/components/Common/Modal';
import { StyledForm } from '@/components/Common/TestResult';
import useCURDTest from '@/hooks/useCURDTest';
import './style/index.css';

export const ModalInputTripleTestResult = ({
  testType: testTypeProps,
  patientDetail,
  editingData,
  getPatientDetail,
  readonly,
  onCancel,
  ...rest
}: any) => {
  const [form] = Form.useForm();
  const { isLoading, handleSubmit } = useCURDTest({ form, onCancel });
  const testType = editingData?.testType?.id ? editingData?.testType?.id : testTypeProps;

  const handleOk = () => {
    handleSubmit({
      testType,
      editingData,
      patientDetail,
      getPatientDetail,
    });
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
      <StyledForm name="nest-messages" form={form} initialValues={editingData}>
        <Form.Item
          name={'testDate'}
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
