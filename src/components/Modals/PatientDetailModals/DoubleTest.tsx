import { Button, DatePicker, Form, Input } from 'antd';
import BaseModal from '@/components/Common/Modal';
import { StyledForm } from '@/components/Common/TestResult';
import useCURDTest from '@/hooks/useCURDTest';
import './style/index.css';

export const ModalInputDoubleTestResult = ({
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
          name={'bhcg'}
          label="β-hCG tự do"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị MoM'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'pappa'}
          label="PAPP-A"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị MoM'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'nt'}
          label="NT"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị MoM'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
      </StyledForm>
    </BaseModal>
  );
};
