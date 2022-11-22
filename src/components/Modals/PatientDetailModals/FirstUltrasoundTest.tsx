import BaseModal from '@/components/Common/Modal';
import { StyledFormUltraSound } from '@/components/Common/TestResult';
import { TEST_NAME } from '@/constants/tests';
import useAsync from '@/hooks/useAsync';
import { ProFormRadio } from '@ant-design/pro-form';
import { Button, Col, DatePicker, Form, Input, message, Row } from 'antd';
import { addTestResult, editTestResult } from './service';
import './style/index.css';

export const ModalInputFirstUltrasoundTestResult = ({
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
        console.log(values);
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
              testName: TEST_NAME.FIRST_ULTRASOUND_TEST,
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
            addTestResult({
              patientId: patientDetail.id,
              testName: TEST_NAME.FIRST_ULTRASOUND_TEST,
              payload,
            }),
          )
            .then(() => {
              message.success(`Thêm kết quả xét nghiệm thành công!`);
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
      title="Siêu âm kỳ 1"
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
      <StyledFormUltraSound
        name="first-ultrasound-form"
        form={form}
        validateMessages={validateMessages}
        initialValues={editingData}
      >
        <Form.Item
          name={'test_date'}
          label="Ngày XN"
          rules={[{ required: true, message: 'Vui lòng nhập ngày xét nghiệm' }]}
        >
          <DatePicker
            placeholder="Nhập ngày siêu âm"
            style={{ width: '100%' }}
            format="DD-MM-YYYY"
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'nuchal_translucency'}
          label="Độ mờ da gáy NT"
          rules={[{ required: true, message: 'Vui lòng nhập thông tin độ mờ da gáy' }]}
          extra={readonly ? '' : 'Đơn vị mm'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'crown_rump_length'}
          // Crown Rump Length
          label="Chiều dài đầu mông"
          rules={[{ required: false, message: 'Vui lòng nhập thông tin chiều dài đầu mông' }]}
          extra={readonly ? '' : 'Đơn vị mm'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Form.Item
          name={'heartbeat'}
          label="Nhịp tim thai"
          rules={[{ required: false, message: '' }]}
          extra={readonly ? '' : 'Đơn vị lần/phút'}
        >
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            className={`${readonly ? 'readonly' : ''}`}
          />
        </Form.Item>
        <Row>
          <Col span={12}>
            <ProFormRadio.Group
              radioType="button"
              label="Xương mũi"
              name="nose_bone"
              options={[
                { label: 'Có', value: true },
                { label: 'Không', value: false },
              ]}
              readonly={readonly}
              rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
            />
          </Col>
          <Col span={12}>
            <ProFormRadio.Group
              radioType="button"
              label="Dị tật tim"
              name="heart_defect"
              options={[
                { label: 'Có', value: true },
                { label: 'Không', value: false },
              ]}
              readonly={readonly}
              rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProFormRadio.Group
              radioType="button"
              label="Nang bạch huyết vùng cổ"
              name="cervical_lymph_node"
              options={[
                { label: 'Có', value: true },
                { label: 'Không', value: false },
              ]}
              readonly={readonly}
              rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
            />
          </Col>
        </Row>
      </StyledFormUltraSound>
    </BaseModal>
  );
};
