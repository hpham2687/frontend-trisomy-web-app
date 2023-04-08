import ProForm, { ProFormDatePicker, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { Col, Row } from 'antd';
import { useRef } from 'react';

function AddDoctorForm(props) {
  const form = useRef<any>();

  return (
    <>
      <ProForm
        layout="vertical"
        //   onFinish={handleClickUpdate}
        submitter={{
          searchConfig: {
            submitText: 'Lưu',
          },
          render: (_, dom) => dom[1],
        }}
        initialValues={
          {
            // ...currentUser,
          }
        }
        hideRequiredMark
      >
        <h3 style={{ marginBottom: '24px' }}>Nhập thông tin bác sĩ</h3>
        <Row gutter={16}>
          <Col md={6} xs={24}>
            <ProFormText
              label="Họ và tên"
              name="fullName"
              rules={[{ required: true, message: 'Vui lòng nhập tên bác sĩ' }]}
              placeholder="Nhập họ và tên"
            />
          </Col>
          <Col md={6} xs={24}>
            <ProFormDatePicker
              label="Ngày sinh"
              name="dateOfBirth"
              rules={[{ required: true, message: 'Vui lòng nhập ngày sinh' }]}
              placeholder="Nhập ngày sinh"
              fieldProps={{
                style: {
                  width: '100%',
                },
              }}
            />
          </Col>
          <Col lg={{ span: 12 }} md={{ span: 12 }} xs={24}>
            <ProFormText
              label="Địa chỉ"
              name="address"
              // rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
              placeholder="Nhập địa chỉ bác sĩ"
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col lg={{ span: 6 }} md={{ span: 12 }} xs={24}>
            <ProFormText
              label="Số điện thoại"
              name="phoneNumber"
              // rules={[
              //   { required: true, message: 'Vui lòng nhập địa chỉ' },
              //   // { type: 'email', message: '账户名应为邮箱格式' },
              // ]}
              placeholder="Nhập địa chỉ bác sĩ"
            />
          </Col>
          <Col lg={6} md={12} xs={24}>
            <ProFormSelect
              label="Bệnh viện"
              name="hospital"
              // rules={[{ required: true, message: '请选择审批员' }]}
              options={[
                {
                  label: 'Y đa khoa HN',
                  value: 'xiao',
                },
                {
                  label: 'BV 108',
                  value: 'mao',
                },
                {
                  label: 'Khác',
                  value: 'other',
                },
              ]}
              placeholder="Nhập bệnh viện của bác sĩ"
            />
          </Col>
        </Row>
      </ProForm>
    </>
  );
}

export default AddDoctorForm;
