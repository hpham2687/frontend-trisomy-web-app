import { GridContent } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'umi';
import { Menu } from 'antd';

import BaseView from './components/BaseView';
import styles from './style.less';

type SettingsStateKeys = 'information' | 'password';
type SettingsState = {
  selectKey: SettingsStateKeys;
};
const { Item } = Menu;

const menuMap: any = [
  {
    label: 'Thông tin cá nhân',
    path: 'information',
  },
  {
    label: 'Đổi mật khẩu',
    path: 'password',
  },
];

const Settings: React.FC = () => {
  const [initConfig, setInitConfig] = useState<SettingsState>({
    selectKey: 'information',
  });

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    const menuItem = menuMap.find((menu: any) => menu.path === tab);
    if (menuItem) {
      setInitConfig({ selectKey: menuItem.path });
    }
  }, [location]);

  const getMenu = () => {
    return menuMap.map((item: any) => (
      <Item key={item.path}>
        <NavLink to={`/account/settings?tab=${item.path}`}>{item.label}</NavLink>
      </Item>
    ));
  };

  const renderChildren = () => {
    const { selectKey } = initConfig;
    switch (selectKey) {
      case 'information':
        return <BaseView />;
      case 'password':
        return <>sdfsdfsf doi pass</>;

      default:
        return null;
    }
  };
  return (
    <GridContent>
      <div className={styles.main}>
        <div className={styles.leftMenu}>
          <Menu
            selectedKeys={[initConfig.selectKey]}
            onClick={({ key }) => {
              setInitConfig({
                ...initConfig,
                selectKey: key as SettingsStateKeys,
              });
            }}
          >
            {getMenu()}
          </Menu>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{menuMap[initConfig.selectKey]}</div>
          {renderChildren()}
        </div>
      </div>
    </GridContent>
  );
};
export default Settings;
