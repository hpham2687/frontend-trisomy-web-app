export const CHILD_INFORMATION = {
  CHILD_BASIC_INFORMATION: 'CHILD_BASIC_INFORMATION',
};

export const getEditRemoveChildInformationEndpoint = (inforType: string, childId: number, patientId: string) => {
  const map = {
    CHILD_BASIC_INFORMATION: 'child-basic-information',
  };
  return `/patients/${patientId}/${map[inforType]}/${childId}`;
};

export const getCreateDeleteChildInformationEndpoint = (inforType: string, patientId: string) => {
  const map = {
    CHILD_BASIC_INFORMATION: 'child-basic-information',
  };
  return '/patients/' + patientId + '/' + map[inforType];
};

export const getVietnameseChildInformationType = (testName: string) => {
  const map = {
    CHILD_BASIC_INFORMATION: 'Thông tin cơ bản của thai nhi',
  };
  return map[testName];
};