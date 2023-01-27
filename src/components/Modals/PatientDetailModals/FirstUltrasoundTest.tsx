import { ProFormRadio } from '@ant-design/pro-form';
import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import BaseModal from '@/components/Common/Modal';
import { StyledFormUltraSound } from '@/components/Common/TestResult';
import useCURDTest from '@/hooks/useCURDTest';
import './style/index.css';

export const ModalInputFirstUltrasoundTestResult = ({
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
      <StyledFormUltraSound name="first-ultrasound-form" form={form} initialValues={editingData}>
        <Form.Item
          name={'testDate'}
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
          name={'nuchalTranslucency'}
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
          name={'crownRumpLength'}
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
              name="noseBone"
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
              name="heartDefect"
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
              name="cervicalLymphNode"
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
