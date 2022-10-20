import { useDispatch, useSelector } from 'umi';
import GeneralInfo from './GeneralInfo';
import {
  ModalInputBloodTestResult,
  ModalInputDoubleTestResult,
  ModalInputHemoglobinTestResult,
  ModalInputSerumIronTestResult,
  ModalInputTripleTestResult,
  ModalSelectTestType,
} from './PatientDetailModals';

export const ModalKey = {
  INPUT_BLOOD_TEST_RESULT: 'INPUT_BLOOD_TEST_RESULT',
  INPUT_DOUBLE_TEST_RESULT: 'INPUT_DOUBLE_TEST_RESULT',
  INPUT_TRIPLE_TEST_RESULT: 'INPUT_TRIPLE_TEST_RESULT',
  INPUT_SERUM_IRON_TEST_RESULT: 'INPUT_SERUM_IRON_TEST_RESULT',
  INPUT_HEMOGLOBIN_TEST_RESULT: 'INPUT_HEMOGLOBIN_TEST_RESULT',

  ADD_TEST_RESULT: 'ADD_TEST_RESULT',
  GENERAL_INFO: 'GENERAL_INFO',
};
const modalMap: { [modalKey: string]: any } = {};

modalMap[ModalKey.INPUT_BLOOD_TEST_RESULT] = ModalInputBloodTestResult;
modalMap[ModalKey.INPUT_DOUBLE_TEST_RESULT] = ModalInputDoubleTestResult;
modalMap[ModalKey.INPUT_TRIPLE_TEST_RESULT] = ModalInputTripleTestResult;
modalMap[ModalKey.INPUT_SERUM_IRON_TEST_RESULT] = ModalInputSerumIronTestResult;
modalMap[ModalKey.INPUT_HEMOGLOBIN_TEST_RESULT] = ModalInputHemoglobinTestResult;
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
