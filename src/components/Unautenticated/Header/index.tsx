import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { history } from 'umi';
const { Header } = Layout;

const StyledMenu = styled(Menu)`
  [data-menu-id='header-menu-login'] {
    margin-left: auto;
  }
`;

const menu = [
  { key: 'introduction', label: 'Giới thiệu' },
  { key: 'login', label: 'Đăng nhập' },
];

function UnauthenticatedHeader() {
  const isLoginMenuItemActive = history.location.pathname === '/user/login';
  return (
    <Header className="header">
      <div className="logo" />
      <StyledMenu
        id="header-menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[isLoginMenuItemActive ? 'login' : 'introduction']}
        onClick={(event: { key: string }) => {
          switch (event.key) {
            case 'introduction':
              history.push('/introduction');
              break;
            default:
              history.push('/user/login');
              break;
          }
        }}
        items={menu}
        right={<>dsfsdf</>}
      />
    </Header>
  );
}

export default UnauthenticatedHeader;
