import { GridContent, PageContainer } from '@ant-design/pro-layout';
import React from 'react';
import { Button, Card, Table } from 'antd';

import styles from './style.less';
import { hospitalListActionColumn } from '@/constants/manage';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'umi';
import { ModalKey } from '@/components/Modals';

const Doctors: React.FC = () => {
  const dispatch = useDispatch();

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
            <div style={{ display: 'flex' }}>
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                style={{ marginBottom: 16, marginLeft: 'auto' }}
                onClick={() => {
                  dispatch({
                    type: 'modal/showModal',
                    payload: {
                      modalKey: ModalKey.ADD_HOSPITAL,
                      customProps: {
                        body: <>ứdfsf</>,
                      },
                    },
                  });
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
export default Doctors;
