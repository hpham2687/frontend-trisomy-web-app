import { useDispatch, useSelector } from 'umi';
import GeneralInfo from './GeneralInfo';
import { ModalSelectTestType } from './PatientDetailModals';
import { ModalInputBloodTestResult } from './PatientDetailModals/BloodTest';
import { ModalInputChildInformation } from './ChildInformationModals/ChildInformation';
import { ModalInputDoubleTestResult } from './PatientDetailModals/DoubleTest';
import { ModalInputFirstUltrasoundTestResult } from './PatientDetailModals/FirstUltrasoundTest';
import { ModalInputHemoglobinTestResult } from './PatientDetailModals/HemoglobinTest';
import { ModalInputSecondUltrasoundTestResult } from './PatientDetailModals/SecondUltrasoundTest';
import { ModalInputSerumIronTestResult } from './PatientDetailModals/SerumIronTest';
import { ModalInputTripleTestResult } from './PatientDetailModals/TripleTest';

export const ModalKey = {
  INPUT_BLOOD_TEST_RESULT: 'INPUT_BLOOD_TEST_RESULT',
  INPUT_DOUBLE_TEST_RESULT: 'INPUT_DOUBLE_TEST_RESULT',
  INPUT_TRIPLE_TEST_RESULT: 'INPUT_TRIPLE_TEST_RESULT',
  INPUT_SERUM_IRON_TEST_RESULT: 'INPUT_SERUM_IRON_TEST_RESULT',
  INPUT_HEMOGLOBIN_TEST_RESULT: 'INPUT_HEMOGLOBIN_TEST_RESULT',
  INPUT_FIRST_ULTRASOUND_TEST_RESULT: 'INPUT_FIRST_ULTRASOUND_TEST_RESULT',
  INPUT_SECOND_ULTRASOUND_TEST_RESULT: 'INPUT_SECOND_ULTRASOUND_TEST_RESULT',
  INPUT_CHILD_INFORMATION: 'INPUT_CHILD_INFORMATION',
  ADD_TEST_RESULT: 'ADD_TEST_RESULT',
  GENERAL_INFO: 'GENERAL_INFO',
};
const modalMap: Record<string, any> = {};

modalMap[ModalKey.INPUT_BLOOD_TEST_RESULT] = ModalInputBloodTestResult;
modalMap[ModalKey.INPUT_DOUBLE_TEST_RESULT] = ModalInputDoubleTestResult;
modalMap[ModalKey.INPUT_TRIPLE_TEST_RESULT] = ModalInputTripleTestResult;
modalMap[ModalKey.INPUT_SERUM_IRON_TEST_RESULT] = ModalInputSerumIronTestResult;
modalMap[ModalKey.INPUT_HEMOGLOBIN_TEST_RESULT] = ModalInputHemoglobinTestResult;
modalMap[ModalKey.INPUT_FIRST_ULTRASOUND_TEST_RESULT] = ModalInputFirstUltrasoundTestResult;
modalMap[ModalKey.INPUT_SECOND_ULTRASOUND_TEST_RESULT] = ModalInputSecondUltrasoundTestResult;
modalMap[ModalKey.INPUT_CHILD_INFORMATION] = ModalInputChildInformation;
modalMap[ModalKey.ADD_TEST_RESULT] = ModalSelectTestType;
modalMap[ModalKey.GENERAL_INFO] = GeneralInfo;

export function ModalContainer(): JSX.Element | null {
  const dispatch = useDispatch();
  const { displayModal, onModalClose, ...rest } = useSelector((state) => state.modal);

  const handleModalClose = () => {
    dispatch({
      type: 'modal/showModal',
      payload: null,
    });
  };

  if (!displayModal) {
    return null;
  }
  const modalProps = {
    onCancel: () => {
      handleModalClose();

      if (onModalClose) onModalClose();
    },
    ...rest,
  };

  const DisplayedModal = modalMap[displayModal];
  return <DisplayedModal {...modalProps} />;
}
