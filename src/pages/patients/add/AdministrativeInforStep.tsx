/* eslint-disable @typescript-eslint/no-use-before-define */
import { ProFormDatePicker, ProFormRadio, ProFormSelect, ProFormText } from '@ant-design/pro-form';
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
            extra="Nguyễn Thị A"
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
            // rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
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
                value: 'muchu',
              },
              {
                label: 'Tiểu học',
                value: 'tieuhoc',
              },
              {
                label: 'Trung học',
                value: 'trunghoc',
              },
              {
                label: 'Đại học',
                value: 'daihoc',
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
            extra="Đơn vị cm"
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
            extra="Đơn vị kg"
          />
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 24 }} xs={24}>
          <ProFormText
            label="Cân nặng (hiện tại)"
            name="weight"
            // rules={[{ required: true, message: 'Vui lòng nhập cân nặng' }]}
            placeholder="Nhập cân nặng"
            extra="Đơn vị kg"
          />
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={24}>
          <ProFormText
            label="Huyết áp"
            name="blood_pressure"
            // rules={[
            //   { required: true, message: 'Vui lòng nhập địa chỉ' },
            //   // { type: 'email', message: '账户名应为邮箱格式' },
            // ]}
            placeholder="Nhập huyết áp bệnh nhân"
          />
        </Col>
      </Row>
      <Divider style={{ margin: '16px 0px 24px 0px' }} />
      <h3 style={{ marginBottom: '24px' }}>Thông tin chồng thai phụ</h3>

      <Row gutter={16}>
        <Col lg={6} md={12} xs={24}>
          <ProFormText
            label={'Họ và tên'}
            name="husbandFullName"
            // rules={[{ required: true, message: 'Vui lòng nhập tên bệnh nhân' }]}
            placeholder="Nhập họ và tên"
          />
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={24}>
          <ProFormDatePicker.Year
            label={'Năm sinh'}
            name="husbandYearOfBirth"
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
            name="husbandPhoneNumber"
            // rules={[
            //   { required: true, message: 'Vui lòng nhập địa chỉ' },
            //   // { type: 'email', message: '账户名应为邮箱格式' },
            // ]}
            placeholder="Nhập số điện thoại chồng bệnh nhân"
          />
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 6 }} xs={24}>
          <ProFormSelect
            label={'Nghề nghiệp'}
            name="husbandJob"
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
          <ProFormRadio.Group
            radioType="button"
            label="Hút thuốc"
            name="husbandSmoke"
            options={[
              { label: 'Có', value: true },
              { label: 'Không', value: false },
            ]}
          />
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={24}>
          <ProFormRadio.Group
            radioType="button"
            label="Uống rượu"
            name="husbandDrink"
            options={[
              { label: 'Có', value: true },
              { label: 'Không', value: false },
            ]}
          />
        </Col>
      </Row>
    </>
  );
}

export default AdministrativeInforStep;
