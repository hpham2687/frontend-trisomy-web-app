import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, List, Row } from 'antd';
import './style/index.css';

const doctors = [
  { name: 'PGS.TS. Trần Danh Cường	', department: 'Bệnh viện Phụ sản Trung ương' },
  { name: 'ThS. Ngô Toàn Anh', department: 'Bệnh viện Phụ sản Trung ương' },
  { name: 'ĐDCKI. Đặng Phương Thúy', department: 'Bệnh viện Phụ sản Trung ương' },
  { name: 'Ths. Lê Phạm Sỹ Cường', department: 'Bệnh viện Phụ sản Trung ương' },
  { name: 'NHS. Phạm Thu Hương', department: 'Bệnh viện Phụ sản Trung ương' },
  { name: 'CN. Nguyễn Minh Trang', department: 'Bệnh viện Phụ sản Trung ương' },
  { name: 'CN Vũ Thùy Dương', department: 'Bệnh viện Phụ sản Trung ương' },
  { name: 'CN. Nguyễn Thị Khánh', department: 'Bệnh viện Phụ sản Trung ương' },
  { name: 'PGS.TS. Nguyễn Thị Trang', department: 'Trường Đại học Y Hà Nội' },
  { name: 'ThS. BSNT. Lê Thị Minh Phương', department: 'Trường Đại học Y dược - ĐHQGHN' },
  { name: 'ThS.BS. Nguyễn Thị Hồng Thịnh', department: 'Bệnh viện Sản nhi Bắc Ninh' },
  { name: 'ThS.BS. Đinh Thị Ngọc Mai', department: 'Trường Đại học Y Hà Nội' },
  { name: 'BS. Nguyễn Phương Ngọc', department: 'Trường Đại học Y Hà Nội' },
  { name: 'BS. Tô Thị Thu Hà', department: 'Trường Đại học Y Hà Nội' },
  { name: 'BS. Đoàn Việt Hà', department: 'Trường Đại học Y Hà Nội' },
  { name: 'Nguyễn Thị Huệ', department: 'Trường Đại học Y Hà Nội' },
  { name: 'Đỗ Đức Huy', department: 'Trường Đại học Y Hà Nội' },
  { name: 'BS. Lê Thị Quyên', department: 'Trường Đại học Y Hà Nội' },
  { name: 'BS. Đào Thị Huyền Trang', department: 'Trường Đại học Y Hà Nội' },
  { name: 'BS. Nguyễn Ngọc Sơn', department: 'Trường Đại học Y Hà Nội' },
  { name: 'BS. Vũ Thu Hương', department: 'Trường Đại học Y Hà Nội' },
  { name: 'Nguyễn Quốc Anh', department: 'Trường Đại học Y Hà Nội' },
  { name: 'Nguyễn Thúy Hà', department: 'Trường Đại học Y Hà Nội' },
  { name: 'Nguyễn Minh Anh', department: 'Trường Đại học Y Hà Nội' },
];

const hustMembers = [
  {
    name: 'Phạm Thái Hưng',
    department:
      'Sinh viên chương trình tiên tiến Công nghệ thông tin, Trường Công nghệ thông tin và Truyền thông, Trường Đại học Bách Khoa Hà Nội',
  },
  {
    name: 'Bùi Trung Kiên',
    department:
      'Sinh viên chương trình quốc tế Công nghệ thông tin, Trường Công nghệ thông tin và Truyền thông, Trường Đại học Bách Khoa Hà Nội',
  },
  {
    name: 'Phạm Xuân Trường',
    department:
      'Sinh viên lớp tài năng Công nghệ thông tin, Trường Công nghệ thông tin và Truyền thông, Trường Đại học Bách Khoa Hà Nội ',
  },
  {
    name: 'Nguyễn Duy Long',
    department:
      'Sinh viên lớp tài năng Công nghệ thông tin, Trường Công nghệ thông tin và Truyền thông, Trường Đại học Bách Khoa Hà Nội ',
  },
  {
    name: 'Vũ Đăng Quân',
    department:
      'Kỹ sư Kỹ thuật máy tính, Trường Công nghệ thông tin và Truyền thông, Trường Đại học Bách Khoa Hà Nội ',
  },
  {
    name: 'Nguyễn Văn Hiếu',
    department:
      'Kỹ sư Kỹ thuật máy tính, Trường Công nghệ thông tin và Truyền thông, Trường Đại học Bách Khoa Hà Nội',
  },
  {
    name: 'Đào Quang Trung',
    department:
      'Kỹ sư Kỹ thuật máy tính, Trường Công nghệ thông tin và Truyền thông, Trường Đại học Bách Khoa Hà Nội',
  },
];

const DeveloperList = ({ orientation }: { orientation?: 'horizontal' | 'vertical' }) => {
  const isVerticalDisplay = orientation === 'vertical';
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={isVerticalDisplay ? 24 : 12}>
        {' '}
        <h2>Đại học Y Hà Nội</h2>
        <p>PGS. TS. Nguyễn Thị Trang</p>
        <p> Giảng viên cao cấp Trường Đại học Y Hà Nội </p>
        <p> Số điện thoại: 0338788736</p>
        <p> Email: trangnguyen@hmu.edu.vn </p>
        <p>
          {' '}
          Địa chỉ liên hệ: P210, nhà A3, Trường Đại học Y Hà Nội, số 1, Tôn Thất Tùng, Đống Đa, Hà
          Nội
        </p>
        <h2>Thành viên</h2>
        <List
          itemLayout="horizontal"
          dataSource={doctors}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={item.name}
                description={item.department}
              />
            </List.Item>
          )}
        />
      </Col>
      <Col xs={24} md={isVerticalDisplay ? 24 : 12}>
        <h2>Đại học Bách Khoa Hà Nội </h2>
        <p>TS. Nguyễn Hồng Quang </p>
        <p>Giảng viên Khoa Kỹ thuật máy tính </p>
        <p>Trường Công nghệ thông tin và Truyền thông</p>
        <p>Trường Đại học Bách Khoa Hà Nội </p>
        <p>Email: quangnh@soict.hust.edu.vn, quang.nguyenhong@hust.edu.vn </p>
        <p>
          Địa chỉ liên hệ: Phòng 801, nhà B1, trường Đại học Bách Khoa Hà Nội, số 1, Đại Cổ Việt, Hà
          Nội{' '}
        </p>
        <h2>Thành viên</h2>
        <List
          itemLayout="horizontal"
          dataSource={hustMembers}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={item?.name}
                description={item?.department}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default DeveloperList;
