/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-form';
import { Col, Divider, Row } from 'antd';

function AdministrativeInforStep() {
  return (
    <>
      <h3 style={{ marginBottom: '24px' }}>Thông tin thai phụ</h3>
      <Row gutter={16}>
        <Col md={6} xs={24}>
          <ProFormText
            label={'Họ và tên'}
            name="fullName"
            rules={[{ required: true, message: 'Vui lòng nhập tên bệnh nhân' }]}
            placeholder="Nhập họ và tên"
          />
        </Col>
        <Col md={6} xs={24}>
          <ProFormDatePicker
            label={'Ngày sinh'}
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
            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
            placeholder="Nhập địa chỉ bệnh nhân"
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
            placeholder="Nhập địa chỉ bệnh nhân"
          />
        </Col>
        <Col lg={6} md={12} xs={24}>
          <ProFormSelect
            label={'Nghề nghiệp'}
            name="job"
            // rules={[{ required: true, message: '请选择审批员' }]}
            options={[
              {
                label: '付晓晓',
                value: 'xiao',
              },
              {
                label: '周毛毛',
                value: 'mao',
              },
            ]}
            placeholder="Nhập nghề nghiệp"
          />
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 24 }} xs={24}>
          <ProFormSelect
            label={'Học vấn'}
            name="education"
            // rules={[{ required: true, message: '请选择审批员' }]}

            options={[
              {
                label: 'Mù chữ',
                value: 'xiao',
              },
              {
                label: 'Tiểu học',
                value: 'mao',
              },
              {
                label: 'Trung học',
                value: 'mao',
              },
              {
                label: 'Đại học',
                value: 'mao',
              },
            ]}
            placeholder="Nhập học vấn"
          />
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={24}>
          <ProFormText
            label="Dân tộc"
            name="folk"
            // rules={[
            //   { required: true, message: 'Vui lòng nhập địa chỉ' },
            //   // { type: 'email', message: '账户名应为邮箱格式' },
            // ]}
            placeholder="Nhập dân tộc"
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={24}>
          <ProFormText
            label="Chiều cao"
            name="height"
            // rules={[
            //   { required: true, message: 'Vui lòng nhập chiều cao' },
            //   // { type: 'email', message: '账户名应为邮箱格式' },
            // ]}
            placeholder="Nhập chiều cao"
          />
        </Col>
        <Col lg={6} md={12} xs={24}>
          <ProFormText
            label="Cân nặng (trước khi có thai)"
            name="weight_before"
            // rules={[
            //   { required: true, message: 'Vui lòng nhập chiều cao' },
            //   // { type: 'email', message: '账户名应为邮箱格式' },
            // ]}
            placeholder="Nhập cân nặng"
          />
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 24 }} xs={24}>
          <ProFormText
            label="Cân nặng (hiện tại)"
            name="weight"
            rules={[{ required: true, message: 'Vui lòng nhập cân nặng' }]}
            placeholder="Nhập cân nặng"
          />
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={24}>
          <ProFormText
            label="Tôn giáo"
            name="religion"
            // rules={[
            //   { required: true, message: 'Vui lòng nhập địa chỉ' },
            //   // { type: 'email', message: '账户名应为邮箱格式' },
            // ]}
            placeholder="Nhập tôn giáo bệnh nhân"
          />
        </Col>
      </Row>
      <Divider style={{ margin: '16px 0px 24px 0px' }} />
      <h3 style={{ marginBottom: '24px' }}>Thông tin chồng thai phụ</h3>

      <Row gutter={16}>
        <Col lg={6} md={12} xs={24}>
          <ProFormText
            label={'Họ và tên'}
            name="name2"
            // rules={[{ required: true, message: 'Vui lòng nhập tên bệnh nhân' }]}
            placeholder="Nhập họ và tên"
          />
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={24}>
          <ProFormDatePicker.Year
            label={'Năm sinh'}
            name="dateRange2"
            // rules={[{ required: true, message: '请输入' }]}
            placeholder="Nhập năm sinh"
            fieldProps={{
              style: {
                width: '100%',
              },
            }}
          />
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={24}>
          <ProFormText
            label="Số điện thoại"
            name="parentPhoneNumber"
            // rules={[
            //   { required: true, message: 'Vui lòng nhập địa chỉ' },
            //   // { type: 'email', message: '账户名应为邮箱格式' },
            // ]}
            placeholder="Nhập số điện thoại bệnh nhân"
          />
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 6 }} xs={24}>
          <ProFormSelect
            label={'Nghề nghiệp'}
            name="approver2"
            // rules={[{ required: true, message: '请选择审批员' }]}
            options={[
              {
                label: '付晓晓',
                value: 'xiao',
              },
              {
                label: '周毛毛',
                value: 'mao',
              },
            ]}
            placeholder="Nhập nghề nghiệp"
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={24}>
          <ProFormCheckbox.Group name="checkbox-group" options={['Hút thuốc', 'Uống rượu']} />
        </Col>
      </Row>
    </>
  );
}

export default AdministrativeInforStep;
