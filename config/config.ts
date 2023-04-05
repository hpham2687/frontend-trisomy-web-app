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
      name: 'Giới thiệu',
      layout: false,
      icon: 'smile',
      path: '/introduction',
      hideInMenu: true,
      component: './introduction',
    },
    {
      name: 'Trisomy sàng lọc',
      layout: false,
      icon: 'smile',
      path: '/trisomy',
      hideInMenu: true,
      component: './unauthenticated/TrisomyForm',
    },
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
          component: '404',
        },
      ],
    },
    {
      path: '/patients',
      icon: 'DotChartOutlined',
      name: 'Chuẩn đoán',
      routes: [
        {
          name: 'Thêm thai phụ',
          icon: 'PlusCircleOutlined',
          path: '/patients/add',
          component: './patients/add',
          exact: true,
        },
        {
          name: 'Phân tích thai phụ',
          icon: 'smile',
          path: '/patients/:patientId',
          hideInMenu: true,
          component: './patients/list/PatientDetail',
          exact: true,
        },
        {
          name: 'Sửa thông tin thai phụ',
          icon: 'smile',
          path: '/patients/:patientId/edit',
          hideInMenu: true,
          component: './patients/edit',
          exact: true,
        },
        {
          name: 'Xem thông tin thai phụ',
          icon: 'smile',
          path: '/patients/:patientId/view',
          hideInMenu: true,
          component: './patients/view',
          exact: true,
        },
        {
          name: 'Danh sách thai phụ',
          icon: 'table',
          path: '/patients/',
          component: './patients/list',
          exact: true,
        },
      ],
    },
    {
      name: 'Quản lý',
      icon: 'ClusterOutlined',
      path: '/manage',
      routes: [
        {
          path: '/manage',
          redirect: '/manage/doctor',
        },
        {
          name: 'Bệnh viện',
          icon: 'smile',
          path: '/manage/hostpital',
          component: './manage/doctor',
        },
        {
          name: 'Bác sĩ',
          icon: 'smile',
          path: '/manage/doctor',
          component: './account/settings',
        },
      ],
    },
    {
      name: 'Tài khoản',
      icon: 'user',
      path: '/account',
      routes: [
        {
          path: '/account',
          redirect: '/account/settings',
        },
        {
          name: 'Thông tin cá nhân',
          icon: 'smile',
          path: '/account/settings',
          component: './account/settings',
        },
      ],
    },
    {
      name: 'Đánh giá nguy cơ',
      icon: 'InfoCircleOutlined',
      path: '/prediction',
      routes: [
        {
          path: '/prediction',
          redirect: '/prediction',
        },
        {
          name: 'Trisomy',
          icon: 'smile',
          path: '/prediction/trisomies',
          component: './account/settings',
        },
        {
          name: 'Thalassemia',
          icon: 'smile',
          path: '/prediction/thalassemia',
          component: './account/settings',
        },
      ],
    },
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
    },

    {
      path: '/members',
      name: 'Thành viên',
      icon: 'crown',
      access: 'canAdmin',
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
