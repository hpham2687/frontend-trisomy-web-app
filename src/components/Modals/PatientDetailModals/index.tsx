/* eslint-disable @typescript-eslint/no-use-before-define */
import BaseModal from '@/components/Common/Modal';
import type { TestType } from '@/types/tests';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'umi';
import { ModalKey } from '..';
import './style/index.css';

const isTestExist = (tests: any[], id: number) => {
  return !!tests?.find((test) => test?.action?.testType?.id === id);
};

const TEST_IDS = {
  BLOOD_TEST: 1,
  SERUM_IRON_TEST: 3,
  HEMOGLOBIN_TEST: 4,
  DOUBLE_TEST: 5,
  TRIPLE_TEST: 6,
  FIRST_ULTRASOUND_TEST: 7,
  SECOND_ULTRASOUND_TEST: 8,
};

const getModalKeyFromId = (testId: number) => {
  switch (testId) {
    case TEST_IDS.BLOOD_TEST:
      return ModalKey.INPUT_BLOOD_TEST_RESULT;
    case TEST_IDS.SERUM_IRON_TEST:
      return ModalKey.INPUT_SERUM_IRON_TEST_RESULT;
    case TEST_IDS.HEMOGLOBIN_TEST:
      return ModalKey.INPUT_HEMOGLOBIN_TEST_RESULT;
    case TEST_IDS.DOUBLE_TEST:
      return ModalKey.INPUT_DOUBLE_TEST_RESULT;
    case TEST_IDS.TRIPLE_TEST:
      return ModalKey.INPUT_TRIPLE_TEST_RESULT;
    case TEST_IDS.FIRST_ULTRASOUND_TEST:
      return ModalKey.INPUT_FIRST_ULTRASOUND_TEST_RESULT;
    case TEST_IDS.SECOND_ULTRASOUND_TEST:
      return ModalKey.INPUT_SECOND_ULTRASOUND_TEST_RESULT;
    default:
      return null;
  }
};

export const ModalSelectTestType = ({ getPatientDetail, patientDetail, ...rest }: any) => {
  const dispatch = useDispatch();
  const testConfig = useSelector((state) => state.tests);

  const { tests: patientTests } = patientDetail;

  return (
    <BaseModal footer={null} title="Chọn xét nghiệm" {...rest}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {testConfig.map((test: TestType) => {
          if ([5, 6, 7, 8].includes(test.id)) {
            return (
              <Button
                key={test.id}
                type="primary"
                disabled={isTestExist(patientTests, test.id)}
                onClick={() => {
                  dispatch({
                    type: 'modal/showModal',
                    payload: {
                      modalKey: getModalKeyFromId(test.id),
                      customProps: {
                        testType: test.id,
                        patientDetail,
                        getPatientDetail: () => {
                          // TODO: Fetch right page
                          getPatientDetail();
                        },
                      },
                    },
                  });
                }}
              >
                {test.testName}
              </Button>
            );
          }
          return null;
        })}
      </div>
    </BaseModal>
  );
};
