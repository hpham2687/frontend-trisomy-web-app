import request from '@/utils/request';
import type { CurrentUser, GeographicItemType } from './data';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('/api/accountSettingCurrentUser');
}

export async function queryProvince(): Promise<{ data: GeographicItemType[] }> {
  return request('/api/geographic/province');
}

export async function queryCity(province: string): Promise<{ data: GeographicItemType[] }> {
  return request(`/api/geographic/city/${province}`);
}

export async function query() {
  return request('/api/users');
}

export async function updateUser({
  name,
  uid,
}: {
  name: string;
  uid: string;
}): Promise<{ data: CurrentUser }> {
  return request(`/users/${uid}`, {
    method: 'PUT',
    data: { name },
  });
}

export async function uploadAvatar(formData: any): Promise<{ data: CurrentUser }> {
  return request(`/users/avatar`, {
    method: 'PUT',
    data: formData,
  });
}
