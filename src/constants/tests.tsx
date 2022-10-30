export const TEST_NAME = {
  BLOOD_TEST: 'BLOOD_TEST',
  SERUM_IRON_TEST: 'SERUM_IRON_TEST',
  HEMOGLOBIN_TEST: 'HEMOGLOBIN_TEST',
  TRIPLE_TEST: 'TRIPLE_TEST',
  DOUBLE_TEST: 'DOUBLE_TEST',
};

export const getCreateDeleteTestResultEndpoint = (testName: string, patientId: string) => {
  const map = {
    BLOOD_TEST: 'blood-test',
    SERUM_IRON_TEST: 'serum-iron-test',
    HEMOGLOBIN_TEST: 'hemoglobin-test',
    TRIPLE_TEST: 'triple-test',
    DOUBLE_TEST: 'double-test',
  };
  return '/patients/' + patientId + '/' + map[testName];
};

export const getVietnameseTestName = (testName: string) => {
  const map = {
    BLOOD_TEST: 'XN máu',
    SERUM_IRON_TEST: 'XN sắt huyết thanh',
    HEMOGLOBIN_TEST: 'XN điện di huyết sắc tố',
    TRIPLE_TEST: 'XN triple test',
    DOUBLE_TEST: 'XN double test',
  };
  return map[testName];
};