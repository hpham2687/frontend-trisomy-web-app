import { Card, message } from 'antd';
import ProForm, {
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import type { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
// import { fakeSubmitForm } from './service';
// import styles from './style.less';

function MembersAdd() {
  const run = null;

  const onFinish = async (values: Record<string, any>) => {
    // run(values);
  };
  return (
    <PageContainer content="Trang thêm thành viên mới">
      <Card bordered={false}>
        <ProForm
          style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
          name="basic"
          layout="vertical"
          initialValues={{ fullName: '' }}
          onFinish={onFinish}
          submitter={{
            searchConfig: {
              submitText: 'Thêm ',
              resetText: 'Đặt lại',
            },
          }}
        >
          <ProFormText
            width="md"
            label="Họ và tên"
            name="fullName"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập họ và tên',
              },
            ]}
            placeholder="Nhập vào họ và tên"
          />

          <ProFormText
            width="md"
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email',
              },
            ]}
            placeholder="Nhập vào email"
          />
          <ProFormText
            width="md"
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },
            ]}
            placeholder="Nhập vào họ và tên"
          />
          <ProFormText
            width="md"
            label="Nhập lại mật khẩu"
            name="passwordConfirm"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },

              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Mật khẩu xác nhận không đúng!');
                },
              }),
            ]}
            placeholder="Nhập vào họ và tên"
          />

          <ProFormSelect
            width="md"
            label={'Nhóm tài khoản'}
            name="job"
            rules={[{ required: true, message: 'Vui lòng chọn nhóm tài khoản' }]}
            options={[
              {
                label: 'Bác sĩ trung ương',
                value: 'xiao',
              },
              {
                label: 'Bác sĩ địa phương',
                value: 'mao',
              },
            ]}
            placeholder="Chọn nhóm tài khoản"
          />

          <ProFormUploadButton
            extra="Đuôi mở rộng：.jpg .png "
            label="Ảnh đại diện"
            name="file"
            title="Ảnh đại diện"
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
}

export default MembersAdd;
