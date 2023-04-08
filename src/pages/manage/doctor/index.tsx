import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Button, Col, Row, Table } from 'antd';
import React, { useState } from 'react';

import { doctorListActionColumn } from '@/constants/manage';
import { PlusCircleOutlined, RollbackOutlined } from '@ant-design/icons';
import { useDispatch } from 'umi';
import AddDoctorForm from './components/AddDoctorForm';
import AvatarView from './components/UploadAvatar';
import styles from './style.less';

enum ViewType {
  LIST = 'list',
  ADD = 'add',
}

const Doctors: React.FC = () => {
  const dispatch = useDispatch();
  const [view, setView] = useState(ViewType.LIST);

  const columns = [
    {
      key: 'doctorId',
      title: 'ID bác sĩ',
      // width: 150,
      dataIndex: 'doctorId',
    },
    {
      key: 'doctorName',
      title: 'Tên bác sĩ',
      // width: 150,
      dataIndex: 'doctorName',
    },
    {
      key: 'phoneNumber',
      title: 'Số điện thoại',
      // width: 150,
      dataIndex: 'phoneNumber',
    },
    {
      key: 'address',
      title: 'Địa chỉ',
      // width: 150,
      dataIndex: 'address',
    },
    {
      key: 'accountStatus',
      title: 'Trạng thái',
      // width: 150,
      dataIndex: 'accountStatus',
    },
    doctorListActionColumn({ onClickDelete: () => {}, options: {} }),
  ];

  const data = [
    {
      doctorId: '1',
      doctorName: 'Nguyễn Văn A',
      accountStatus: 'Hoạt động',
      phoneNumber: '0123456789',
      address: 'Hà Nội',
    },
  ];

  const renderContent = () => {
    if (view === ViewType.ADD) {
      return (
        <div>
          <div style={{ marginLeft: 24, marginRight: 24 }}>
            <Row gutter={[32, 32]}>
              <Col span={16}>
                <AddDoctorForm />
              </Col>
              <Col span={6}>
                <div style={{ display: 'flex', flexDirection: 'column', placeContent: 'center' }}>
                  <AvatarView />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.tabsCard} style={{ paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ display: 'flex' }}>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={{ marginBottom: 16, marginLeft: 'auto' }}
            onClick={() => {
              setView(ViewType.ADD);
            }}
          >
            Thêm bác sĩ
          </Button>
        </div>
        <Table
          pagination={{
            position: ['bottomRight'],
            total: 100,
            pageSize: 10,
            onChange: (targetPageNumber: number) => {
              // setPage(targetPageNumber - 1);
            },
          }}
          loading={false}
          dataSource={data}
          columns={columns}
        />
      </div>
    );
  };

  return (
    <PageContainer
      extra={[
        <>
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => {
              setView(ViewType.LIST);
            }}
          >
            <RollbackOutlined style={{ fontSize: 36 }} /> Quay lại
          </Button>
        </>,
      ]}
    >
      <div className={styles.main}>
        <GridContent>{renderContent()}</GridContent>
      </div>
    </PageContainer>
  );
};
export default Doctors;
