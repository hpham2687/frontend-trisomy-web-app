import { GridContent } from '@ant-design/pro-layout';
import React, { useState } from 'react';
import { Menu } from 'antd';

import BaseView from './components/base';
import styles from './style.less';

type SettingsStateKeys = 'base' | 'security';
type SettingsState = {
  selectKey: SettingsStateKeys;
};
const { Item } = Menu;

const menuMap: Record<string, React.ReactNode> = {
  base: 'Thông tin cá nhân',
  security: 'Đổi mật khẩu',
};

const Settings: React.FC = () => {
  const [initConfig, setInitConfig] = useState<SettingsState>({
    selectKey: 'base',
  });
  const getMenu = () => {
    return Object.keys(menuMap).map((item) => <Item key={item}>{menuMap[item]}</Item>);
  };

  const renderChildren = () => {
    const { selectKey } = initConfig;
    switch (selectKey) {
      case 'base':
        return <BaseView />;
      case 'security':
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
