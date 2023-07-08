import { TEST_NAME } from '@/constants/tests';

export const getTestModalKey = (testName: string) => {
  const map = {
    [TEST_NAME.BLOOD_TEST]: 'INPUT_BLOOD_TEST_RESULT',
    [TEST_NAME.SERUM_IRON_TEST]: 'INPUT_SERUM_IRON_TEST_RESULT',
    [TEST_NAME.HEMOGLOBIN_TEST]: 'INPUT_HEMOGLOBIN_TEST_RESULT',
    [TEST_NAME.DOUBLE_TEST]: 'INPUT_DOUBLE_TEST_RESULT',
    [TEST_NAME.TRIPLE_TEST]: 'INPUT_TRIPLE_TEST_RESULT',
    [TEST_NAME.FIRST_ULTRASOUND_TEST]: 'INPUT_FIRST_ULTRASOUND_TEST_RESULT',
    [TEST_NAME.SECOND_ULTRASOUND_TEST]: 'INPUT_SECOND_ULTRASOUND_TEST_RESULT',
  };
  return map[testName];
};