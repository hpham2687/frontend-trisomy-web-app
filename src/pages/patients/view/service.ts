import token from '@/utils/token';
import request from '@/utils/request';

export async function postEditPatient(patientId: number, payload: any) {
  return request(`/patients/${patientId}`, {
    method: 'PUT',
    data: payload,
  });
}

export async function queryPatientDetail(patientId: number) {
  return request(`/patients/${patientId}`, {
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
    method: 'GET',
  });
}
