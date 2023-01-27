import { Button, DatePicker, Form, Input } from 'antd';
import BaseModal from '@/components/Common/Modal';
import { StyledForm } from '@/components/Common/TestResult';
import useCURDTest from '@/hooks/useCURDTest';
import './style/index.css';

export const ModalInputHemoglobinTestResult = ({
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
          name={'ddHba1'}
          label="HbA1"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ddHba2'}
          label="HbA2"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ddHbe'}
          label="HbE"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ddHbh'}
          label="Hb H"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ddHbbar'}
          label="Hb Bar"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ddHbf'}
          label="HbF"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ddHbkhac'}
          label="Hb khác"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
      </StyledForm>
    </BaseModal>
  );
};
