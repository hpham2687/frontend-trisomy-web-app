import request from '@/utils/request';

export async function postAddPatient(payload: any) {
  return request('/patients', {
    method: 'POST',
    data: payload,
  });
}
