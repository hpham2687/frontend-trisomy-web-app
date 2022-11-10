import moment from 'moment';
import { getVietnameseTestName } from './tests';

export const numericalOrderColumn = {
  title: 'STT',
  dataIndex: 'index',
  key: 'index',
  render: (text, record, index) => index + 1,
};
export const testNameColumn = ({ handleViewTest }: any) => ({
  title: 'Tên xét nghiệm',
  dataIndex: 'testName',
  key: 'testName',
  render: (testName: string, record: any, index) => {
    return (
      <span style={{ cursor: 'pointer' }} onClick={() => handleViewTest(record.action)}>
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
