// @ts-ignore
/* eslint-disable */
import token from '@/utils/token';
import request from '@/utils/request';
import jwt_decode from 'jwt-decode';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  const accessToken = token.get().accessToken || '';
  const decoded: any = jwt_decode(accessToken);
  const { isAdmin = false } = decoded;
  return request<{
    data: API.CurrentUser;
  }>(isAdmin ? '/admin/currentUser' : '/user/currentUser', {
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  const { type, ...rest } = body;
  const endpoint = type === 'doctor' ? '/auth/login' : '/admin/auth/login';
  return request<API.LoginResult>(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: rest,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
