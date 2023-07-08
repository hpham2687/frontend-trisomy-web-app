import useAsync from '@/hooks/useAsync';
import { getAvatarURL } from '@/utils/avatar';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import ProForm, { ProFormDatePicker, ProFormText } from '@ant-design/pro-form';
import { Form, message, Upload } from 'antd';
import type { RcFile } from 'antd/lib/upload';
import React, { useState } from 'react';
import { useModel } from 'umi';
import { updateUser, uploadAvatar } from '../service';

import styles from './BaseView.less';

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const AvatarView = ({ avatar }: { avatar: string }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>(avatar);

  const handleChange: any = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleUploadError = () => {
    message.error('Cập nhật ảnh đại diện không thành công!');
  };

  const handleUploadSuccess = (file: RcFile) => {
    getBase64(file as RcFile, (url) => {
      setImageUrl(url);
    });
    setLoading(false);
    message.success('Cập nhật ảnh đại diện thành công!');
  };

  const customRequest = ({ file }: any) => {
    const formData = new FormData();
    formData.append('avatar', file);
    uploadAvatar(formData)
      .then(() => {
        handleUploadSuccess(file);
      })
      .catch(() => {
        handleUploadError();
      });
  };

  return (
    <>
      <div className={styles.avatar_title}>Ảnh đại diện</div>

      <Upload
        customRequest={customRequest}
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </>
  );
};

const BaseView: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const { run, isLoading } = useAsync();
  const [form] = Form.useForm();

  const handleClickUpdate = (data: any) => {
    if (currentUser) {
      form
        .validateFields()
        .then((values) => {
          run(
            updateUser({ ...values, uid: currentUser.id })
              .then(() => {
                message.success('Cập nhật thông tin thành công');
              })
              .catch((error: any) => {
                message.error(error.error || 'Có lỗi xảy ra!');
              }),
          );
        })
        .catch((info) => {
          console.log('Validate Failed:', info);
        });
    }
  };

  return (
    <div className={styles.baseView}>
      {!currentUser ? null : (
        <>
          <div className={styles.left}>
            <ProForm
              layout="vertical"
              onFinish={handleClickUpdate}
              submitter={{
                searchConfig: {
                  submitText: 'Cập nhật',
                },
                render: (_, dom) => dom[1],
              }}
              initialValues={{
                ...currentUser,
              }}
              hideRequiredMark
              form={form}
            >
              <ProFormText
                width="md"
                name="email"
                label="Email"
                readonly
                placeholder="Nhập vào email của bạn"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập email!',
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="fullName"
                label="Họ và tên"
                allowClear={false}
                placeholder="Nhập vào tên của bạn"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập họ và tên!',
                  },
                ]}
              />
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
              <ProFormText
                width="md"
                name="address"
                label="Địa chỉ"
                allowClear={false}
                placeholder="Nhập vào địa chỉ của bạn"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập địa chỉ!',
                  },
                ]}
              />
              <ProFormText
                label="Số điện thoại"
                name="phoneNumber"
                // rules={[
                //   { required: true, message: 'Vui lòng nhập địa chỉ' },
                //   // { type: 'email', message: '账户名应为邮箱格式' },
                // ]}
                placeholder="Nhập số điện thoại"
              />
              <ProFormText
                width="md"
                readonly
                name="hospitalId"
                label="Bệnh viện"
                value={currentUser.hospital.name}
              />
            </ProForm>
          </div>
          <div className={styles.right}>
            <AvatarView avatar={getAvatarURL(currentUser?.avatarPath)} />
          </div>
        </>
      )}
    </div>
  );
};

export default BaseView;
