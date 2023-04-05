import { Button, Checkbox, Form, Input } from 'antd';
import BaseModal from '../Common/Modal';

function AddHospital({ body, onCancel, handleOk, ...rest }: any) {
  const [form] = Form.useForm();

  return (
    <BaseModal
      footer={[
        <Button key="back" onClick={onCancel}>
          Huỷ
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Thêm
        </Button>,
      ]}
      title="Thêm bệnh viện"
      {...rest}
    >
      <Form form={form} initialValues={{ name: '', isCentral: false }}>
        <Form.Item name="hospitalName" label="Tên bệnh viện" rules={[{ required: true }]}>
          <Input type="text" />
        </Form.Item>
        <Checkbox checked={true} onChange={(e) => {}}>
          Bệnh viện cấp trung ương
        </Checkbox>
      </Form>
    </BaseModal>
  );
}

export default AddHospital;
