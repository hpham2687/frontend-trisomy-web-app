import request from '@/utils/request';
import type { CurrentUser } from './data';
import type { Hospital } from '@/types/hospital';
import token from '@/utils/token';

export async function getHospitals(): Promise<Hospital[]> {
  return request('/hospitals');
}

export async function updateHospital({
  id,
  name,
  isCentral,
}: {
  name: string;
  id: number;
  isCentral: boolean;
}): Promise<any> {
  return request(`/hospitals/${id}`, {
    method: 'PUT',
    data: { name, isCentral },
  });
}

export async function createHospital({
  name,
  isCentral,
}: {
  name: string;

  isCentral: boolean;
}): Promise<any> {
  return request(`/hospitals`, {
    method: 'POST',
    data: { name, isCentral },
  });
}

export async function deleteHospital(hospitalId: number) {
  return request('/hospitals/' + hospitalId, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
  });
}

export async function uploadAvatar(formData: any): Promise<{ data: CurrentUser }> {
  return request(`/users/avatar`, {
    method: 'PUT',
    data: formData,
  });
}
