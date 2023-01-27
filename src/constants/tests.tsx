export const TEST_IDS = {
  BLOOD_TEST: 1,
  SERUM_IRON_TEST: 3,
  HEMOGLOBIN_TEST: 4,
  DOUBLE_TEST: 5,
  TRIPLE_TEST: 6,
  FIRST_ULTRASOUND_TEST: 7,
  SECOND_ULTRASOUND_TEST: 8,
};

export const TEST_NAME = {
  BLOOD_TEST: 'BLOOD_TEST',
  SERUM_IRON_TEST: 'SERUM_IRON_TEST',
  HEMOGLOBIN_TEST: 'HEMOGLOBIN_TEST',
  TRIPLE_TEST: 'TRIPLE_TEST',
  DOUBLE_TEST: 'DOUBLE_TEST',
  FIRST_ULTRASOUND_TEST: 'FIRST_ULTRASOUND_TEST',
  SECOND_ULTRASOUND_TEST: 'SECOND_ULTRASOUND_TEST',
};

const testPath = {
  [TEST_IDS.BLOOD_TEST]: 'blood-test',
  [TEST_IDS.SERUM_IRON_TEST]: 'serum-iron-test',
  [TEST_IDS.HEMOGLOBIN_TEST]: 'hemoglobin-test',
  [TEST_IDS.TRIPLE_TEST]: 'triple-test',
  [TEST_IDS.DOUBLE_TEST]: 'double-test',
  [TEST_IDS.FIRST_ULTRASOUND_TEST]: 'first-ultrasound-test',
  [TEST_IDS.SECOND_ULTRASOUND_TEST]: 'second-ultrasound-test',
};

export const getEditRemoveTestEndpoint = (testType: string, testId: number, patientId: string) => {
  return `/patients/${patientId}/${testPath[testType]}/${testId}`;
};

export const getCreateDeleteTestResultEndpoint = (testType: string, patientId: string) => {
  return '/patients/' + patientId + '/' + testPath[testType];
};

export const getVietnameseTestName = (testName: string) => {
  const map = {
    BLOOD_TEST: 'XN máu',
    SERUM_IRON_TEST: 'XN sắt huyết thanh',
    HEMOGLOBIN_TEST: 'XN điện di huyết sắc tố',
    TRIPLE_TEST: 'XN triple test',
    DOUBLE_TEST: 'XN double test',
    FIRST_ULTRASOUND_TEST: 'XN siêu âm kỳ 1',
    SECOND_ULTRASOUND_TEST: 'XN siêu âm kỳ 2',
  };
  return map[testName];
};

export const SUCCESS_ADD_TEST_MESSAGE = 'Sửa kết quả xét nghiệm thành công!';
