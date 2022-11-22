/* eslint-disable @typescript-eslint/no-use-before-define */
import BaseModal from '@/components/Common/Modal';
import { TEST_NAME } from '@/constants/tests';
import { Button } from 'antd';
import { useDispatch } from 'umi';
import { ModalKey } from '..';
import './style/index.css';

const isTestExist = (tests: any[], name: string) => {
  return !!tests?.find((test) => test.testName === name);
};

export const ModalSelectTestType = ({ getPatientDetail, patientDetail, ...rest }: any) => {
  const dispatch = useDispatch();
  const { tests } = patientDetail;
  return (
    <BaseModal footer={null} title="Chọn xét nghiệm" {...rest}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.BLOOD_TEST)}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_BLOOD_TEST_RESULT,
                customProps: {
                  patientDetail,
                  getPatientDetail: () => {
                    // TODO: backend return only created test, we will add to redux, don't need to fetch again
                    getPatientDetail();
                  },
                },
              },
            });
          }}
        >
          Xét nghiệm máu
        </Button>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.SERUM_IRON_TEST)}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_SERUM_IRON_TEST_RESULT,
                customProps: {
                  patientDetail,
                  getPatientDetail: () => {
                    getPatientDetail();
                  },
                },
              },
            });
          }}
        >
          Xét nghiệm sắt huyết thanh
        </Button>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.HEMOGLOBIN_TEST)}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_HEMOGLOBIN_TEST_RESULT,
                customProps: {
                  patientDetail,
                  getPatientDetail: () => {
                    getPatientDetail();
                  },
                },
              },
            });
          }}
        >
          Xét nghiệm điện di huyết sắc tố
        </Button>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.DOUBLE_TEST)}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_DOUBLE_TEST_RESULT,
                customProps: {
                  patientDetail,
                  getPatientDetail: () => {
                    getPatientDetail();
                  },
                },
              },
            });
          }}
        >
          Double test
        </Button>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.TRIPLE_TEST)}
          // style={{ marginLeft: 8 }}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_TRIPLE_TEST_RESULT,
                customProps: {
                  patientDetail,
                  getPatientDetail: () => {
                    getPatientDetail();
                  },
                },
              },
            });
          }}
        >
          Triple test
        </Button>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.FIRST_ULTRASOUND_TEST)}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_FIRST_ULTRASOUND_TEST_RESULT,
                customProps: {
                  patientDetail,
                  getPatientDetail: () => {
                    getPatientDetail();
                  },
                },
              },
            });
          }}
        >
          Siêu âm kỳ 1
        </Button>
        <Button
          type="primary"
          disabled={isTestExist(tests, TEST_NAME.SECOND_ULTRASOUND_TEST)}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.INPUT_SECOND_ULTRASOUND_TEST_RESULT,
                customProps: {
                  patientDetail,
                  getPatientDetail: () => {
                    getPatientDetail();
                  },
                },
              },
            });
          }}
        >
          Siêu âm kỳ 2
        </Button>
      </div>
    </BaseModal>
  );
};
