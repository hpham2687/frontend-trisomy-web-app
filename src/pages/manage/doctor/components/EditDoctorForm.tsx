import useAsync from '@/hooks/useAsync';
import ProForm, { ProFormDatePicker, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { Col, Form, Row, message } from 'antd';
import { updateDoctor } from '../service';

function EditDoctorForm({ hospitals, backToListView, editingDoctor }: any) {
  const [form] = Form.useForm();
  const { run, isLoading } = useAsync();

  const hospitalsSelectData = hospitals.map((hospital: any) => ({
    key: hospital.id,
    label: hospital.name,
    value: hospital.id,
  }));

  const handleSubmit = async (data: any) => {
    form
      .validateFields()
      .then((values) => {
        run(
          updateDoctor({ ...values, id: editingDoctor.id, hospitalId: Number(values.hospitalId) })
            .then(() => {
              message.success('Cập nhật thông tin bác sĩ thành công');
              backToListView();
            })
            .catch((error: any) => {
              message.error(error.error || 'Có lỗi xảy ra!');
            }),
        );
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <>
      <ProForm
        layout="vertical"
        onFinish={handleSubmit}
        submitter={{
          searchConfig: {
            submitText: 'Lưu',
          },
          render: (_, dom) => dom[1],
        }}
        initialValues={{ ...editingDoctor, hospitalId: editingDoctor.hospital.id }}
        hideRequiredMark
        form={form}
      >
        <h3 style={{ marginBottom: '24px' }}>Chỉnh sửa thông tin bác sĩ</h3>
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
              name="dob"
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
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Vui lòng nhập địa chỉ email' },
                { type: 'email', message: 'Địa chỉ email không đúng!' },
              ]}
              placeholder="Nhập địa chỉ email"
              disabled
            />
          </Col>
          {/* <Col lg={{ span: 6 }} md={{ span: 12 }} xs={24}>
            <ProFormText
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
              placeholder="Nhập địa mật khẩu"
            />
          </Col> */}
          <Col lg={{ span: 6 }} md={{ span: 12 }} xs={24}>
            <ProFormText
              label="Số điện thoại"
              name="phoneNumber"
              // rules={[
              //   { required: true, message: 'Vui lòng nhập địa chỉ' },
              //   // { type: 'email', message: '账户名应为邮箱格式' },
              // ]}
              placeholder="Nhập số điện thoại bác sĩ"
            />
          </Col>
          <Col lg={6} md={12} xs={24}>
            <ProFormSelect
              label="Bệnh viện"
              name="hospitalId"
              options={hospitalsSelectData}
              placeholder="Nhập bệnh viện của bác sĩ"
              rules={[{ required: true, message: 'Vui lòng nhập bệnh viện' }]}
            />
          </Col>
        </Row>
      </ProForm>
    </>
  );
}

export default EditDoctorForm;
