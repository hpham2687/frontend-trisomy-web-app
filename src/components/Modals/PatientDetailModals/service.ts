import { getCreateDeleteTestResultEndpoint } from '@/constants/tests';
import request from '@/utils/request';
import token from '@/utils/token';
import { getEditRemoveTestEndpoint } from '@/constants/tests';

export async function addTestResult({
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

export async function editTestResult({
  patientId,
  payload,
  testId,
  testName,
}: {
  patientId: string;
  payload: any;
  testId: number;
  testName: string;
}) {
  return request(getEditRemoveTestEndpoint(testName, testId, patientId), {
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
    data: payload,
    method: 'PUT',
  });
}
