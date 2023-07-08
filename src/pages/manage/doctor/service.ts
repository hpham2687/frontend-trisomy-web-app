import request from '@/utils/request';
import type { CurrentUser } from './data';
import moment from 'moment';
import { getDefaultFilterTimestamp } from '@/utils/time';
import token from '@/utils/token';

export const defaultDateRange = [
  getDefaultFilterTimestamp().start,
  getDefaultFilterTimestamp().end,
];

const PAGE_LIMIT = 10;

export async function getDoctors({
  page,
  startDate = defaultDateRange[0],
  endDate = defaultDateRange[1],
  fullName,
}: {
  page: number;
  startDate: string;
  endDate: string;
  fullName?: string;
}) {
  return request('/users', {
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
    params: {
      page,
      fullName,
      limit: PAGE_LIMIT,
      startDate: moment(startDate).startOf('day').toISOString(),
      endDate: moment(endDate).endOf('day').toISOString(),
    },
    method: 'GET',
  });
}

export async function createDoctor(payload: {
  email: string;
  name: string;
  hospitalId: number;
  password: string;
}): Promise<{ data: CurrentUser }> {
  return request(`/auth/register`, {
    method: 'POST',
    data: payload,
  });
}

export async function updateDoctor({ id, ...payload }: any): Promise<any> {
  return request(`/users/doctor/${id}`, {
    method: 'PUT',
    data: payload,
  });
}

export async function uploadAvatar(formData: any): Promise<{ data: CurrentUser }> {
  return request(`/users/avatar`, {
    method: 'PUT',
    data: formData,
  });
}

export async function deleteDoctor(doctorId: number) {
  return request('/users/' + doctorId, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
  });
}
