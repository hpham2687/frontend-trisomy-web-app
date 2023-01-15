import BaseModal from '@/components/Common/Modal';
import { StyledForm } from '@/components/Common/TestResult';
import { TEST_NAME } from '@/constants/tests';
import useAsync from '@/hooks/useAsync';
import { Button, Form, Input, message } from 'antd';
import { addTestResult, editTestResult } from './service';
import './style/index.css';

export const ModalInputChildInformation = ({
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
              testName: TEST_NAME.TRIPLE_TEST,
            })
              .then(() => {
                message.success(`Sửa kết quả xét nghiệm thành công!`);
                getPatientDetail();
                onCancel();
              })
              .catch((error: any) => {
                console.log(error);
                message.error(error.error || 'Có lỗi xảy ra!');
              }),
          );
        } else {
          run(
            addTestResult({
              patientId: patientDetail.id,
              testName: TEST_NAME.TRIPLE_TEST,
              payload,
            })
              .then(() => {
                message.success(`Thêm kết quả xét nghiệm thành công!`);
                getPatientDetail();
                onCancel();
              })
              .catch((error: any) => {
                console.log(error);
                message.error(error.error || 'Có lỗi xảy ra!');
              }),
          );
        }
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
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
      <StyledForm name="child-information-form" form={form} initialValues={editingData}>
        <Form.Item
          name={'weeks_old'}
          label="Số tuần"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị MoM'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'days_old'}
          label="Số ngày"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị MoM'}
        >
          <Input
            type="text"
            style={{ width: '100%' }}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'heart_beat'}
          label="Nhịp tim thai"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị MoM'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
      </StyledForm>
    </BaseModal>
  );
};
