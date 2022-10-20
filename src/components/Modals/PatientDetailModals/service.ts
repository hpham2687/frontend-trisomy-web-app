import token from '@/utils/token';
import { getCreateDeleteTestResultEndpoint } from '@/constants/tests';
import request from '@/utils/request';
export async function addBloodTestResult({
  patientId,
  payload,
  testName,
}: {
  patientId: string;
  payload: any;
  testName: string;
}) {
  return request(getCreateDeleteTestResultEndpoint(testName, patientId), {
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
    data: payload,
    method: 'POST',
  });
}
export async function editBloodTestResult({
  patientId,
  payload,
  testName,
}: {
  patientId: string;
  payload: any;
  testName: string;
}) {
  return request(getCreateDeleteTestResultEndpoint(testName, patientId), {
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
    data: payload,
    method: 'PUT',
  });
}
