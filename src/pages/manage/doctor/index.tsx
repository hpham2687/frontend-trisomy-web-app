import { GridContent, PageContainer } from '@ant-design/pro-layout';
import React from 'react';
import { Button, Card, Table } from 'antd';

import styles from './style.less';
import { hospitalListActionColumn } from '@/constants/hospital';
import { PlusCircleOutlined } from '@ant-design/icons';

const Settings: React.FC = () => {
  const columns = [
    {
      key: 'hospitalId',
      title: 'ID bệnh viện',
      // width: 150,
      dataIndex: 'hospitalId',
    },
    {
      key: 'hospitalName',
      title: 'Tên bệnh viện',
      // width: 150,
      dataIndex: 'hospitalName',
    },
    {
      key: 'isCentral',
      title: 'Cấp trung ương',
      // width: 150,
      dataIndex: 'isCentral',
    },
    hospitalListActionColumn({ onClickDelete: () => {}, options: {} }),
  ];
  return (
    <PageContainer>
      <div className={styles.main}>
        <GridContent>
          <Card className={styles.tabsCard} bordered={false}>
            <div style={{ display: 'flex``' }}>
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                style={{ marginBottom: 16, marginLeft: 'auto' }}
                onClick={() => {
                  // history.push('/patients/add');
                }}
              >
                Thêm bệnh viện
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
              dataSource={[]}
              columns={columns}
            />
          </Card>
        </GridContent>
      </div>
    </PageContainer>
  );
};
export default Settings;
