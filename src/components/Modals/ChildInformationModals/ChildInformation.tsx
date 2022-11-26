import BaseModal from '@/components/Common/Modal';
import { StyledForm } from '@/components/Common/TestResult';
import { CHILD_INFORMATION } from '@/constants/childInformation';
import useAsync from '@/hooks/useAsync';
import { Button, Form, Input, message } from 'antd';
import { addChildInformationResult,editChildInformationResult } from './servivce';


export const ModalInputChildInformation = ({
  patientDetail,
  patientId,
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
            editChildInformationResult({
              patientId: patientDetail.id,
              childId: editingData.id,
              payload,
              inforType: CHILD_INFORMATION.CHILD_BASIC_INFORMATION,
            }),
          )
            .then(() => {
              message.success(`Sửa kết quả xét nghiệm thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        } else {
          run(
            addChildInformationResult({
              patientId: patientDetail.id,
              inforType: CHILD_INFORMATION.CHILD_BASIC_INFORMATION,
              payload,
            }),
          )
            .then(() => {
              message.success(`Thêm thông tin thành công!`);
              getPatientDetail();
              onCancel();
            })
            .catch((error: any) => {
              console.log(error);
              message.error(error.error || 'Có lỗi xảy ra!');
            });
        }
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };
  console.log(editingData);
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  
  return (
    <BaseModal
      title="Thông tin thai nhi"
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
      <StyledForm
        name="child-information-form"
        form={form}
        validateMessages={validateMessages}
        initialValues={editingData}
      >
        <Form.Item
          name={'weeks_old'}
          label="Số tuần"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị Tuần'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
        <Form.Item
          name={'days_old'}
          label="Số ngày"
          rules={[{ required: true }]}
          extra={readonly ? '' : 'Đơn vị Ngày'}
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
          extra={readonly ? '' : 'Đơn vị Lần/Phút'}
        >
          <Input type="text" className={`${readonly ? 'readonly' : ''}`} />
        </Form.Item>
      </StyledForm>
    </BaseModal>
  );
};
