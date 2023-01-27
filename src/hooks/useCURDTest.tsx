import { addTestResult, editTestResult } from '@/components/Modals/PatientDetailModals/service';
import { SUCCESS_ADD_TEST_MESSAGE } from '@/constants/tests';
import { convertObjectValuesToNumber } from '@/utils/object';
import type { FormInstance } from 'antd';
import { message } from 'antd';
import useAsync from './useAsync';

interface UseCURDTestProps {
  form: FormInstance<any>;
  onCancel: () => void;
}

function useCURDTest({ form, onCancel }: UseCURDTestProps) {
  const { run, isLoading } = useAsync();

  const handleSubmit = ({ testType, editingData, patientDetail, getPatientDetail }: any) => {
    form
      .validateFields()
      .then((values) => {
        const payload = convertObjectValuesToNumber(values);
        if (editingData) {
          run(
            editTestResult({
              patientId: patientDetail.id,
              testId: editingData.id,
              payload,
              testType,
            })
              .then(() => {
                message.success(SUCCESS_ADD_TEST_MESSAGE);
                getPatientDetail();
                onCancel();
                form.resetFields();
              })
              .catch((error: any) => {
                message.error(error.error || 'Có lỗi xảy ra!');
              }),
          );
        } else {
          console.log('vao day');

          run(
            addTestResult({
              patientId: patientDetail.id,
              payload,
              testType,
            })
              .then(() => {
                message.success(`Thêm kết quả xét nghiệm thành công!`);
                getPatientDetail();
                onCancel();
                form.resetFields();
              })
              .catch((error: any) => {
                message.error(error.error || 'Có lỗi xảy ra!');
              }),
          );
        }
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };
  return { isLoading, handleSubmit };
}

export default useCURDTest;
