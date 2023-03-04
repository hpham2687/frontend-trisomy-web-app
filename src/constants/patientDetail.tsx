import moment from 'moment';
import { history, Link } from 'umi';
import { getVietnameseTestName } from './tests';

export const numericalOrderColumn = (options = {}) => ({
  title: 'STT',
  dataIndex: 'index',
  key: 'index',
  render: (text, record, index) => index + 1,
  ...options,
});

export const patientIdColumn = (options = {}) => ({
  key: 'patientId',
  title: 'Mã bệnh nhân',
  width: 150,
  dataIndex: 'patientId',
  render: (patientId: string) => {
    return (
      <Link
        to={`/patients/${patientId}/view`}
        style={{ cursor: 'pointer', color: 'var(--ant-primary-color)' }}
      >
        {patientId}
      </Link>
    );
  },

  ...options,
});

export const fullNameColumn = (options = {}) => ({
  title: 'Họ và tên',
  dataIndex: 'name',
  key: 'name',
  ...options,
});

export const addressColumn = (options = {}) => ({
  title: 'Địa chỉ',
  dataIndex: 'address',
  key: 'address',
  ...options,
});

export const dateOfBirthColumn = (options = {}) => ({
  key: 'dateOfBirth',
  title: 'Ngày sinh',
  dataIndex: 'dateOfBirth',
  render: (dateOfBirth: string) => {
    return moment(dateOfBirth).format('DD-MM-YYYY');
  },
  ...options,
});

export const patientListActionColumn = ({ onClickDelete, options }: any) => ({
  title: 'Hành động',
  dataIndex: 'action',
  key: 'action',
  render: (patient: any) => {
    return (
      <>
        <div className="action-cell">
          <span
            style={{ cursor: 'pointer', color: 'var(--ant-primary-color)' }}
            onClick={() => history.push(`/patients/${patient.id}`)}
          >
            Phân tích
          </span>
          <Link
            to={`/patients/${patient.id}/edit`}
            style={{ marginLeft: 8, cursor: 'pointer', color: 'var(--ant-primary-color)' }}
          >
            Sửa
          </Link>
          <span
            onClick={() => onClickDelete(patient)}
            style={{ marginLeft: 8, color: 'red', cursor: 'pointer' }}
          >
            Xóa
          </span>{' '}
        </div>
      </>
    );
  },
  ...options,
});

export const testNameColumn = ({ handleViewTest }: any) => ({
  title: 'Tên xét nghiệm',
  dataIndex: 'testName',
  key: 'testName',
  render: (testName: string, record: any, index) => {
    return (
      <span
        style={{ cursor: 'pointer', color: '#1890ff' }}
        onClick={() => handleViewTest(record.action)}
      >
        {getVietnameseTestName(testName)}{' '}
      </span>
    );
  },
});

export const testDateColumn = {
  title: 'Ngày xét nghiệm',
  dataIndex: 'testDate',
  key: 'testDate',
  sorter: (a: any, b: any) => Number(a.testDate) - Number(b.testDate),
  render: (testDate: any) => moment(Number(testDate)).format('DD-MM-YYYY'),
};

export const testActionColumn = ({ handleEditTest, handleDeleteTest }: any) => ({
  title: 'Hành động',
  dataIndex: 'action',
  key: 'action',
  render: (test: any, record: any) => {
    return (
      <>
        <span
          style={{ marginLeft: 8, cursor: 'pointer', color: 'var(--ant-primary-color)' }}
          onClick={() => handleEditTest(record.action)}
        >
          Sửa
        </span>
        <span
          onClick={() => handleDeleteTest(test)}
          style={{ marginLeft: 8, color: 'red', cursor: 'pointer' }}
        >
          Xóa
        </span>
      </>
    );
  },
});
