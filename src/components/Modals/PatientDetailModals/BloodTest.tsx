import BaseModal from '@/components/Common/Modal';
import { StyledForm } from '@/components/Common/TestResult';
import useCURDTest from '@/hooks/useCURDTest';
import { Button, DatePicker, Form, Input } from 'antd';
import './style/index.css';

interface ModalBloodTestProps {
  testType?: string;
  patientDetail: any;
  editingData: any;
  getPatientDetail: any;
  readonly: any;
  [key: string]: any;
}

export const ModalInputBloodTestResult = ({
  testType: testTypeProps,
  patientDetail,
  editingData,
  getPatientDetail,
  readonly,
  onCancel,
  ...rest
}: ModalBloodTestProps) => {
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
      <StyledForm name="nest-messages" form={form} initialValues={editingData}>
        <Form.Item
          name={'testDate'}
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
          name={'ctmRbc'}
          label="RBC"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị G/l'}
        >
          <Input type="text" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ctmHgb'}
          label="HGB"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị g/l'}
        >
          <Input type="text" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ctmHct'}
          label="HCT"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị l/l'}
        >
          <Input type="text" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ctmMcv'}
          label="MCV"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị fl'}
        >
          <Input type="text" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ctmMch'}
          label="MCH"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị pg'}
        >
          <Input type="text" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ctmMchc'}
          label="MCHC"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị g/l'}
        >
          <Input type="text" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'ctmRdw'}
          label="RDW"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị %'}
        >
          <Input type="text" readOnly={readonly} className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
      </StyledForm>
    </BaseModal>
  );
};
