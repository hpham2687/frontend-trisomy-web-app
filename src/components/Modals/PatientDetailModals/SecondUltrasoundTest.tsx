import { ProFormRadio } from '@ant-design/pro-form';
import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import { useState } from 'react';
import BaseModal from '@/components/Common/Modal';
import { StyledFormUltraSound } from '@/components/Common/TestResult';
import useCURDTest from '@/hooks/useCURDTest';
import './style/index.css';

export const ModalInputSecondUltrasoundTestResult = ({
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
  // Hide or show noseBoneLength
  const [isHasNoseBone, setIsHasNoseBone] = useState(editingData?.noseBone);

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
      title="Siêu âm kỳ 2"
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
      <StyledFormUltraSound name="second-ultrasound-form" form={form} initialValues={editingData}>
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

        <ProFormRadio.Group
          radioType="button"
          label="Xương mũi"
          name="noseBone"
          options={[
            { label: 'Có', value: true, onChange: () => setIsHasNoseBone(true) },
            { label: 'Không', value: false, onChange: () => setIsHasNoseBone(false) },
          ]}
          readonly={readonly}
          rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
        />
        {isHasNoseBone && (
          <Form.Item
            name={'noseBoneLength'}
            label="Chiều dài xương mũi"
            rules={[{ required: true, message: 'Vui lòng nhập thông tin chiều dài xương mũi' }]}
            extra={readonly ? '' : 'Đơn vị mm'}
          >
            <Input
              type="number"
              onWheel={(event) => event.currentTarget.blur()}
              className={`${readonly ? 'readonly' : ''}`}
            />
          </Form.Item>
        )}

        <Row>
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
          <Col span={12}>
            <ProFormRadio.Group
              radioType="button"
              label="Nang bạch huyết ở vùng cổ"
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
