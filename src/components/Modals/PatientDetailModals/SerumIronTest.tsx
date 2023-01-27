import { Button, DatePicker, Form, Input } from 'antd';
import BaseModal from '@/components/Common/Modal';
import useCURDTest from '@/hooks/useCURDTest';
import './style/index.css';

export const ModalInputSerumIronTestResult = ({
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
        initialValues={editingData}
        wrapperCol={{ span: 24 }}
        layout="vertical"
      >
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
          labelCol={{ span: 24 }}
          name={'ctmSathuyetthanh'}
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
          name={'ctmFerritinehuyetthanh'}
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
