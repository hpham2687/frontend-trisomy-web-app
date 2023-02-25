import useAsync from '@/hooks/useAsync';
import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';
import { UploadOutlined } from '@ant-design/icons';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Button, message, Upload } from 'antd';
import React, { useEffect, useState } from 'react';

import styles from './BaseView.less';

const AvatarView = ({ avatar }: { avatar: string }) => (
  <>
    <div className={styles.avatar_title}>Ảnh đại diện</div>
    <div className={styles.avatar}>
      <img
        src={
          'https://previews.123rf.com/images/cundrawan703/cundrawan7031207/cundrawan703120700008/14519717-dog-avatar-cartoon-character-icon.jpg' ||
          avatar
        }
        alt="avatar"
      />
    </div>
    <Upload showUploadList={false}>
      <div className={styles.button_view}>
        <Button>
          <UploadOutlined />
          Chọn ảnh
        </Button>
      </div>
    </Upload>
  </>
);

const BaseView: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const { run, isLoading } = useAsync();

  useEffect(() => {
    run(queryCurrentUser()).then(setCurrentUser);
  }, []);

  const getAvatarURL = (currentUserAvatar?: string) => {
    if (currentUserAvatar) {
      return currentUserAvatar;
    }
    const url =
      'https://previews.123rf.com/images/cundrawan703/cundrawan7031207/cundrawan703120700008/14519717-dog-avatar-cartoon-character-icon.jpg';
    return url;
  };

  const handleFinish = async () => {
    message.success('更新基本信息成功');
  };

  return (
    <div className={styles.baseView}>
      {isLoading ? null : (
        <>
          <div className={styles.left}>
            <ProForm
              layout="vertical"
              onFinish={handleFinish}
              submitter={{
                searchConfig: {
                  submitText: 'Cập nhật',
                },
                render: (_, dom) => dom[1],
              }}
              initialValues={{
                ...currentUser,
                // phone: currentUser?.phone.split('-'),
              }}
              hideRequiredMark
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
                name="name"
                label="Họ và tên"
                placeholder="Nhập vào tên của bạn"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập họ và tên!',
                  },
                ]}
              />

              <ProFormText
                width="md"
                readonly
                name="hospitalId"
                label="Bệnh viện"
                rules={[
                  {
                    required: true,
                    message: '请输入您的街道地址!',
                  },
                ]}
              />
            </ProForm>
          </div>
          <div className={styles.right}>
            <AvatarView avatar={getAvatarURL(currentUser?.avatar)} />
          </div>
        </>
      )}
    </div>
  );
};

export default BaseView;
