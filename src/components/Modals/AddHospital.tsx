import { Button, Checkbox, Form, Input, message } from 'antd';
import { useState } from 'react';
import BaseModal from '../Common/Modal';
import { updateHospital } from '@/pages/manage/hospital/service';
import { createHospital } from '@/pages/manage/hospital/service';

function AddHospital({ body, onCancel, fetchHospitals, editingData, ...rest }: any) {
  const [form] = Form.useForm();
  const [checkIsCentral, setCheckIsCentral] = useState(editingData?.isCentral);

  const handleOk = () => {
    if (editingData) {
      updateHospital({
        id: editingData.id,
        name: form.getFieldValue('name'),
        isCentral: checkIsCentral,
      })
        .then(async () => {
          message.success('Cập nhật thành công');
          await fetchHospitals();
          onCancel();
        })
        .catch(() => {
          message.error('Cập nhật thất bại');
          onCancel();
        });
    } else {
      createHospital({
        name: form.getFieldValue('name'),
        isCentral: checkIsCentral,
      })
        .then(async () => {
          message.success('Thêm mới bệnh viện thành công');
          await fetchHospitals();
          onCancel();
        })
        .catch(() => {
          message.error('Thêm mới bệnh viện thất bại');
          onCancel();
        });
    }
  };

  const onCheckboxChange = (e: { target: { checked: boolean } }) => {
    setCheckIsCentral(e.target.checked);
  };

  return (
    <BaseModal
      footer={[
        <Button key="back" onClick={onCancel}>
          Huỷ
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {editingData ? 'Lưu' : 'Thêm'}
        </Button>,
      ]}
      title={`${editingData ? 'Sửa' : 'Thêm'} thông tin bệnh viện`}
      {...rest}
    >
      <Form form={form} initialValues={editingData}>
        <Form.Item name="name" label="Tên bệnh viện" rules={[{ required: true }]}>
          <Input type="text" />
        </Form.Item>
        <Checkbox name="isCentral" checked={checkIsCentral} onChange={onCheckboxChange}>
          Bệnh viện cấp trung ương
        </Checkbox>
      </Form>
    </BaseModal>
  );
}

export default AddHospital;
