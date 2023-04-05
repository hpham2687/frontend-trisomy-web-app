import { GridContent, PageContainer } from '@ant-design/pro-layout';
import React, { useState } from 'react';
import { Button, Card, Table } from 'antd';

import styles from './style.less';
import { doctorListActionColumn, hospitalListActionColumn } from '@/constants/manage';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'umi';
import { ModalKey } from '@/components/Modals';

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

  if (view === ViewType.ADD) {
    return <>back button ađd</>;
  }
  return (
    <PageContainer>
      <div className={styles.main}>
        <GridContent>
          <Card className={styles.tabsCard} bordered={false}>
            <div style={{ display: 'flex' }}>
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                style={{ marginBottom: 16, marginLeft: 'auto' }}
                onClick={() => {
                  setView(VIEW.ADD);
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
          </Card>
        </GridContent>
      </div>
    </PageContainer>
  );
};
export default Doctors;
