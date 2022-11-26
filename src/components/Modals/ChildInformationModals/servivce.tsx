import { getEditRemoveChildInformationEndpoint, getCreateDeleteChildInformationEndpoint } from '@/constants/childInformation';
import request from '@/utils/request';
import token from '@/utils/token';

export async function addChildInformationResult({
  patientId,
  payload,
  inforType,
}: {
  patientId: string;
  payload: any;
  inforType: string;
}) {
  return request(getCreateDeleteChildInformationEndpoint(inforType, patientId), {
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
    data: payload,
    method: 'POST',
  });
}

export async function editChildInformationResult({
  patientId,
  payload,
  childId,
  inforType,
}: {
  patientId: string;
  payload: any;
  childId: number;
  inforType: string;
}) {
  return request(getEditRemoveChildInformationEndpoint(inforType, childId, patientId), {
    headers: {
      Authorization: `Bearer ${token.get().accessToken}`,
    },
    data: payload,
    method: 'PUT',
  });
}
