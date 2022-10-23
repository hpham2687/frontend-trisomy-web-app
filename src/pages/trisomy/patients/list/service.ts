import { getCreateDeleteTestResultEndpoint } from '@/constants/tests';
import request from '@/utils/request';
import { getDefaultFilterTimestamp } from '@/utils/time';
import token from '@/utils/token';
import moment from 'moment';
export const defaultDateRange = [
  getDefaultFilterTimestamp().start,
  getDefaultFilterTimestamp().end,
];

const PAGE_LIMIT = 3;
export async function queryPatients(
  page: number,
  startDate: string = defaultDateRange[0],
  endDate: string = defaultDateRange[1],
) {
  return request('/patients', {
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
    params: {
      page,
      limit: PAGE_LIMIT,
      startDate: moment(startDate).startOf('day').toISOString(),
      endDate: moment(endDate).endOf('day').toISOString(),
    },
    method: 'GET',
  });
}

export async function queryPatientDetail(patientId: string) {
  return request('/patients/' + patientId);
}

export async function deleteTestResult(data: {
  patientId: string;
  testName: 'blood-test' | 'serum-iron-test' | 'hemoglobin-test';
}) {
  return request(getCreateDeleteTestResultEndpoint(data.testName, data.patientId), {
    data,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
  });
}

export async function deletePatient(patientId: string) {
  return request('/patients/' + patientId, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
  });
}
