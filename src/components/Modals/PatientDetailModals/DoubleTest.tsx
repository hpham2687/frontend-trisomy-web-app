import BaseModal from '@/components/Common/Modal';
import { StyledForm } from '@/components/Common/TestResult';
import { TEST_NAME } from '@/constants/tests';
import useAsync from '@/hooks/useAsync';
import { convertObjectValuesToNumber } from '@/utils/object';
import { Button, DatePicker, Form, Input, message } from 'antd';
import { addTestResult, editTestResult } from './service';
import './style/index.css';

export const ModalInputDoubleTestResult = ({
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
        const payload = convertObjectValuesToNumber(values);

        if (editingData) {
          run(
            editTestResult({
              patientId: patientDetail.id,
              testId: editingData.id,
              payload,
              testName: TEST_NAME.DOUBLE_TEST,
            })
              .then(() => {
                form.resetFields();
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
              testName: TEST_NAME.DOUBLE_TEST,
              payload,
            })
              .then(() => {
                form.resetFields();
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
          name={'test_date'}
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
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'pappa'}
          label="PAPP-A"
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
          name={'nt'}
          label="NT"
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
