import { Link } from 'umi';

export const hospitalListActionColumn = ({ onClickDelete, onClickEdit, options }: any) => ({
  title: 'Hành động',
  dataIndex: 'action',
  key: 'action',
  render: (_, hospital: any) => {
    return (
      <>
        <div className="action-cell">
          <span
            onClick={() => onClickEdit(hospital)}
            style={{ marginLeft: 8, cursor: 'pointer', color: 'var(--ant-primary-color)' }}
          >
            Sửa
          </span>
          <span
            onClick={() => onClickDelete(hospital)}
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

export const doctorListActionColumn = ({
  onClickEdit,
  onClickDelete,
  options,
  currentUserId,
}: any) => ({
  title: 'Hành động',
  dataIndex: 'action',
  key: 'action',
  render: (doctor: any) => {
    if (doctor.id === currentUserId) {
      return null;
    }
    return (
      <>
        <div className="action-cell">
          <Link
            to="/"
            style={{ marginLeft: 8, cursor: 'pointer', color: 'var(--ant-primary-color)' }}
          >
            Xem log
          </Link>
          <span
            to="/"
            style={{ marginLeft: 8, cursor: 'pointer', color: 'var(--ant-primary-color)' }}
          >
            Khoá
          </span>
          <span
            onClick={() => onClickEdit(doctor)}
            style={{ marginLeft: 8, cursor: 'pointer', color: 'var(--ant-primary-color)' }}
          >
            Sửa
          </span>
          <span
            onClick={() => onClickDelete(doctor)}
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
