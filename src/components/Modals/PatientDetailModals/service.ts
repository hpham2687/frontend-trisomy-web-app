import { getCreateDeleteTestResultEndpoint } from '@/constants/tests';
import request from '@/utils/request';
import token from '@/utils/token';
import { getEditRemoveTestEndpoint } from '@/constants/tests';

export async function addTestResult({
  patientId,
  payload,
  testType,
}: {
  patientId: string;
  payload: any;
  testType: string;
}) {
  return request(getCreateDeleteTestResultEndpoint(testType, patientId), {
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
    data: payload,
    method: 'POST',
  });
}

export async function editTestResult({
  patientId,
  payload,
  testId,
  testType,
}: {
  patientId: string;
  payload: any;
  testId: number;
  testType: string;
}) {
  return request(getEditRemoveTestEndpoint(testType, testId, patientId), {
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
    data: payload,
    method: 'PUT',
  });
}
