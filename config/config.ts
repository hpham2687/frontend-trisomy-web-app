// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
  },
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: false,
    siderWidth: 250,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {},
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './authentication/Login',
        },
        {
          path: '/user',
          redirect: '/authentication/login',
        },
        {
          name: 'register-result',
          icon: 'smile',
          path: '/user/register-result',
          component: './authentication/register-result',
        },
        {
          name: 'register',
          icon: 'smile',
          path: '/user/register',
          component: './authentication/register',
        },
        {
          component: '404',
        },
      ],
    },
    {
      path: '/patients',
      icon: 'DotChartOutlined',
      name: 'Thai phụ',
      routes: [
        // {
        //   path: '/patients',
        //   icon: 'PlusCircleOutlined',
        //   redirect: '/patients/add',
        // },
        {
          name: 'Thêm thai phụ',
          icon: 'PlusCircleOutlined',
          path: '/patients/add',
          component: './trisomy/patients/add',
          exact: true,
        },
        {
          name: 'Sửa thông tin thai phụ',
          icon: 'smile',
          path: '/patients/:patientId/edit',
          hideInMenu: true,
          component: './trisomy/patients/edit',
          exact: true,
        },
        {
          name: 'Danh sách thai phụ',
          icon: 'table',
          path: '/patients/',
          component: './trisomy/patients/list',
          exact: true,
        },
      ],
    },
    // {
    //   path: '/thalassemia',
    //   icon: 'form',
    //   name: 'Bệnh Thalassemia',
    // },

    {
      name: 'exception',
      icon: 'warning',
      path: '/exception',
      hideInMenu: true,
      routes: [
        {
          path: '/exception',
          redirect: '/exception/403',
        },
        {
          name: '403',
          icon: 'smile',
          path: '/exception/403',
          component: './exception/403',
        },
        {
          name: '404',
          icon: 'smile',
          path: '/exception/404',
          component: './exception/404',
        },
        {
          name: '500',
          icon: 'smile',
          path: '/exception/500',
          component: './exception/500',
        },
      ],
    },
    {
      name: 'Nhóm phát triển',
      icon: 'ApartmentOutlined',
      path: '/developers',
      component: './members/Developers',
      // routes: [
      //   {
      //     path: '/exception',
      //     redirect: '/exception/403',
      //   },
      //   {
      //     name: '403',
      //     icon: 'smile',
      //     path: '/exception/403',
      //   },
      //   {
      //     name: '404',
      //     icon: 'smile',
      //     path: '/exception/404',
      //     component: './exception/404',
      //   },
      //   {
      //     name: '500',
      //     icon: 'smile',
      //     path: '/exception/500',
      //     component: './exception/500',
      //   },
      // ],
    },

    {
      path: '/members',
      name: 'Thành viên',
      icon: 'crown',
      access: 'canAdmin',
      // component: './members',
      routes: [
        {
          path: '/members/add',
          name: 'Thêm thành viên',
          icon: 'smile',
          component: './members/add',
          exact: true,
          access: 'canAdmin',
        },
        {
          path: '/members/',
          name: 'Danh sách',
          icon: 'smile',
          component: './members/list',
          exact: true,
          access: 'canAdmin',
        },
        // {
        //   component: './404',
        // },
      ],
    },
    {
      path: '/',
      redirect: '/patients/',
    },
    {
      component: '404',
    },
  ],
  access: {},
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // 如果不想要 configProvide 动态设置主题需要把这个设置为 default
    // 只有设置为 variable， 才能使用 configProvide 动态设置主色调
    // https://ant.design/docs/react/customize-theme-variable-cn
    'root-entry-name': 'variable',
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},

  nodeModulesTransform: {
    type: 'none',
  },
  // mfsu: {},
  webpack5: {},
  exportStatic: {},
});
