import request from '@/utils/request';

export async function postTrisomies(payload: any) {
  return request('/patients/predict-trisomies', {
    method: 'POST',
    data: payload,
  });
}
