import request from '@/utils/request';
import type { CurrentUser } from './data';

export async function getHospitals(): Promise<{ data: CurrentUser }> {
  return request('/hospitals');
}

export async function updateHospital({
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
