import { getVietnameseTestName, TEST_NAME } from '@/constants/tests';
import { deleteTestResult, queryPatientDetail } from '@/pages/patients/list/service';
import { getTestModalKey } from '@/utils/patientDetail';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { message, Modal } from 'antd';
import moment from 'moment';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'umi';
import useAsync from './useAsync';

const convertResponseToTableData = (tests: any) => {
  return tests.map((test: any) => ({
    key: test.id,
    testId: test.id,
    testName: test.testName,
    testDate: test.testDate,
    action: test,
  }));
};

function usePatientDetail({ patientId }: any) {
  const [patientDetail, setPatientDetail] = useState<any>(null);
  const { run, isLoading } = useAsync();
  const { run: runDeleteTest, isLoading: isLoadingDelete } = useAsync();

  const dispatch = useDispatch();

  const getPatientDetail = useCallback(() => {
    run(queryPatientDetail(patientId)).then((response: any) => {
      const diseaseKey = [
        'bloodTests',
        'hemoglobinTests',
        'serumIronTests',
        'doubleTests',
        'tripleTests',
        'firstUltrasoundTests',
        'secondUltrasoundTests',
      ];
      let tests: any = [];

      diseaseKey.forEach((key) => {
        if (response[key]) {
          tests = [...tests, ...response[key]];
          delete response[key];
        }
      });
      setPatientDetail({ ...response, tests: convertResponseToTableData(tests) });
    });
  }, [patientId]);

  const handleViewTest = useCallback(
    (data: any) => {
      const editingData = data;
      editingData.testDate = moment(Number(editingData.testDate));
      dispatch({
        type: 'modal/showModal',
        payload: {
          modalKey: getTestModalKey(data.testName),
          customProps: {
            patientDetail,
            editingData,
            readonly: true,
            getPatientDetail: () => {
              getPatientDetail();
            },
          },
        },
      });
    },
    [getPatientDetail, patientDetail],
  );

  const handleEditTest = useCallback(
    (data: any) => {
      const editingData = data;

      editingData.testDate = moment(Number(editingData.testDate));
      dispatch({
        type: 'modal/showModal',
        payload: {
          modalKey: getTestModalKey(data.testName),
          customProps: {
            patientDetail,
            editingData,
            getPatientDetail: () => {
              getPatientDetail();
            },
          },
        },
      });
    },
    [getPatientDetail, patientDetail],
  );

  const handleShowConfirmDelete = (removeTest: any) => {
    Modal.confirm({
      title: 'Xác nhận',
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có chắc là muốn xóa kết quả ${getVietnameseTestName(removeTest.testName)} chứ?`,
      okText: 'Có',
      cancelText: 'Không',

      onOk: () => {
        const testType = removeTest.testType.id;
        const testId = removeTest.id;
        runDeleteTest(deleteTestResult({ patientId, testType, testId })).then(() => {
          message.success(`Xóa kết quả ${testType} thành công!`);
          // Remove test from state list
          setPatientDetail((prev: any) => {
            let tests = prev.tests;
            if (tests?.length > 0) {
              tests = tests.filter((test: any) => {
                if (test.action?.testType?.id !== testType) {
                  return true;
                } else {
                  if (test.testId !== testId) {
                    return true;
                  }
                  return false;
                }
              });
            }
            return { ...prev, tests };
          });
        });
      },
    });
  };

  const shouldEnablePredictTrisomy = useMemo(() => {
    if (patientDetail) {
      const { tests } = patientDetail;
      const firstUltrasoundTest = tests.find(
        (test: any) => test.testName === TEST_NAME.FIRST_ULTRASOUND_TEST,
      )?.action;
      const secondUltrasoundTest = tests.find(
        (test: any) => test.testName === TEST_NAME.SECOND_ULTRASOUND_TEST,
      )?.action;
      const doubleTest = tests.find((test: any) => test.testName === TEST_NAME.DOUBLE_TEST)?.action;
      const tripleTest = tests.find((test: any) => test.testName === TEST_NAME.TRIPLE_TEST)?.action;

      const hasFirstPeriodData = firstUltrasoundTest && doubleTest;
      const hasSecondPeriodData = secondUltrasoundTest && tripleTest;

      return hasFirstPeriodData || hasSecondPeriodData;
    }
  }, [patientDetail]);

  const shouldEnablePredictThalassemia = useMemo(() => {
    if (patientDetail) {
      const { tests } = patientDetail;
      const bloodTest = tests.find((test: any) => test.testName === TEST_NAME.BLOOD_TEST)?.action;
      const serumIronTest = tests.find(
        (test: any) => test.testName === TEST_NAME.SERUM_IRON_TEST,
      )?.action;
      const hemoglobinTest = tests.find(
        (test: any) => test.testName === TEST_NAME.HEMOGLOBIN_TEST,
      )?.action;

      if (
        bloodTest ||
        (bloodTest && serumIronTest) ||
        (bloodTest && serumIronTest && hemoglobinTest)
      ) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }, [patientDetail]);

  useEffect(() => {
    if (patientId) {
      getPatientDetail();
    }
  }, [patientId, getPatientDetail]);

  return {
    patientDetail,
    setPatientDetail,
    isLoading,
    handleEditTest,
    handleViewTest,
    shouldEnablePredictThalassemia,
    shouldEnablePredictTrisomy,
    getPatientDetail,
    isLoadingDelete,
    handleDeleteTest: (test: any) => {
      handleShowConfirmDelete(test);
    },
  };
}

export default usePatientDetail;
