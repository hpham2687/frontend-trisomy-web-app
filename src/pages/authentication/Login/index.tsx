/* eslint-disable @typescript-eslint/no-use-before-define */
import Footer from '@/components/Footer';
import { login } from '@/services/ant-design-pro/api';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { Alert, message, Tabs } from 'antd';
import React, { useState } from 'react';
import type { IndexModelState, Loading } from 'umi';
import { connect, history, useIntl, useModel } from 'umi';

import UnauthenticatedHeader from '@/components/Unautenticated/Header';
import token from '@/utils/token';
import './style/index.css';
import styles from './style/index.less';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = ({ index }: any) => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<'doctor' | 'admin'>('doctor');
  const { setInitialState } = useModel('@@initialState');

  const intl = useIntl();

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      const msg = await login({ ...values, type });
      if (msg?.user) {
        token.save(msg.accessToken, msg.refreshToken);
        message.success('Đăng nhập thành công!');
        await setInitialState((s) => ({
          ...s,
          currentUser: msg.user,
        }));
        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as { redirect: string };
        history.push(redirect || '/');
        return;
      }

      setUserLoginState(msg);
    } catch (error) {
      console.log('login error', error);

      message.error('Đăng nhập thất bại!');
    }
  };
  const { status, type: loginType } = userLoginState;

  return (
    <>
      <UnauthenticatedHeader />
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <Row> */}
          {/* <Col md={12} xs={24}> */}
          <LoginForm
            submitter={{
              searchConfig: {
                submitText: 'Đăng nhập',
              },
            }}
            title="Trường Đại học Bách Khoa Hà Nội và Trường Đại học Y Hà Nội"
            subTitle={'Tầm soát bệnh di truyền ở thai nhi'}
            initialValues={{
              autoLogin: true,
            }}
            onFinish={async (values) => {
              await handleSubmit(values as API.LoginParams);
            }}
          >
            <Tabs
              activeKey={type}
              onChange={(e) => {
                setType(e);
              }}
            >
              <Tabs.TabPane key="doctor" tab={'Bác sĩ'} />
              {/* <Tabs.TabPane key="admin" tab={'Quản trị viên'} /> */}
            </Tabs>

            {status === 'error' && loginType === 'account' && (
              <LoginMessage
                content={intl.formatMessage({
                  id: 'pages.login.accountLogin.errorMessage',
                  defaultMessage: '账户或密码错误(admin/ant.design)',
                })}
              />
            )}
            {type === 'doctor' && (
              <>
                <ProFormText
                  name="email"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder={'Nhập email của bác sĩ'}
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập email của bác sĩ',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="password"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder={'Nhập mật khẩu'}
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhận mật khẩu',
                    },
                  ]}
                />
              </>
            )}

            {status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}
            {type === 'admin' && (
              <>
                <ProFormText
                  name="email"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder={'Nhập email của bác sĩ'}
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập email của bác sĩ',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="password"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder={'Nhập mật khẩu'}
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhận mật khẩu',
                    },
                  ]}
                />
              </>
            )}
            <div
              style={{
                marginBottom: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                Nhớ mật khẩu
              </ProFormCheckbox>
              {/* <a
                style={{
                  float: 'right',
                }}
              >
                Quên mật khẩu
              </a> */}
            </div>
          </LoginForm>
          {/* </Col> */}
          {/* </Row> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default connect(({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
  index,
  loading: loading.models.index,
}))(Login);
