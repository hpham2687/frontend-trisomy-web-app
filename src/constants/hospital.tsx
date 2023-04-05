import { Link } from 'umi';

export const hospitalListActionColumn = ({ onClickDelete, options }: any) => ({
  title: 'Hành động',
  dataIndex: 'action',
  key: 'action',
  render: (hospital: any) => {
    return (
      <>
        <div className="action-cell">
          <Link
            to={`/hospitals/${hospital.id}/edit`}
            style={{ marginLeft: 8, cursor: 'pointer', color: 'var(--ant-primary-color)' }}
          >
            Sửa
          </Link>
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
