import BaseModal from '@/components/Common/Modal';
import useAsync from '@/hooks/useAsync';
import { Button, Form } from 'antd';

function TrisomyResult({
  patientDetail,
  editingData,
  getPatientDetail,
  readonly,
  onCancel,
  ...rest
}: any) {
  const handleOk = () => {};
  const [form] = Form.useForm();
  const { run, isLoading } = useAsync();
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
    />
  );
}

export default TrisomyResult;
