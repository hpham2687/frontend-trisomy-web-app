import BaseModal from '@/components/Common/Modal';
import { TEST_NAME } from '@/constants/tests';
import useAsync from '@/hooks/useAsync';
import { Button, DatePicker, Form, Input, message } from 'antd';
import { addTestResult, editTestResult } from './service';
import './style/index.css';

export const ModalInputSerumIronTestResult = ({
  patientDetail,
  editingData,
  getPatientDetail,
  readonly,
  onCancel,
  ...rest
}: any) => {
  const [form] = Form.useForm();
  const { run, isLoading } = useAsync();
  //TODO: handle route edit test
  const handleOk = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      const payload = {};
      Object.keys(values).forEach(function (key: string) {
        payload[key] = Number(values[key]);
      });
      if (editingData) {
        run(
          editTestResult({
            patientId: patientDetail.id,
            testId: editingData.id,
            payload,
            testName: TEST_NAME.SERUM_IRON_TEST,
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
            testName: TEST_NAME.SERUM_IRON_TEST,
            payload,
          })
            .then(() => {
              message.success(`Thêm kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              message.error(error.error || 'Có lỗi xảy ra!');
            }),
        );
      }
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
          labelCol={{ span: 24 }}
          name={'ctm_sathuyetthanh'}
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
          name={'ctm_ferritinehuyetthanh'}
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
