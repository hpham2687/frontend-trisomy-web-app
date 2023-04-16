import { GridContent, PageContainer } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import useAsync from '@/hooks/useAsync';
import { Button, Modal, Table, message } from 'antd';

import styles from './style.less';
import { hospitalListActionColumn } from '@/constants/manage';
import { ExclamationCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'umi';
import { ModalKey } from '@/components/Modals';
import { deleteHospital, getHospitals } from './service';
import type { Hospital } from '@/types/hospital';

const HospitalList: React.FC = () => {
  const dispatch = useDispatch();
  const { run, isLoading } = useAsync();
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  const fetchHospitals = async () => {
    const response = await getHospitals();
    setHospitals(response);
  };

  const handleOpenEditHospitalModal = (hospital: Hospital) => {
    dispatch({
      type: 'modal/showModal',
      payload: {
        modalKey: ModalKey.ADD_HOSPITAL,
        customProps: {
          editingData: hospital,
          fetchHospitals: fetchHospitals,
        },
      },
    });
  };

  const handleShowConfirmDelete = (hospital: Hospital) => {
    Modal.confirm({
      title: 'Xác nhận',
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có chắc là muốn xóa bệnh vienej ${hospital.name} chứ?`,
      okText: 'Có',
      cancelText: 'Không',
      onOk: () => {
        deleteHospital(hospital.id).then((response: any) => {
          message.success('Xóa bệnh viện thành công!');
          console.log(response);
          fetchHospitals();
        });
      },
    });
  };

  const columns = [
    {
      key: 'id',
      title: 'ID bệnh viện',
      dataIndex: 'id',
    },
    {
      key: 'name',
      title: 'Tên bệnh viện',
      dataIndex: 'name',
    },
    {
      key: 'isCentral',
      title: 'Cấp trung ương',
      dataIndex: 'isCentral',
      render: (isCentral: boolean) => (isCentral ? 'Có' : 'Không'),
    },
    hospitalListActionColumn({
      onClickDelete: handleShowConfirmDelete,
      onClickEdit: handleOpenEditHospitalModal,
      options: {},
    }),
  ];

  useEffect(() => {
    run(
      getHospitals()
        .then((response: Hospital[]) => {
          setHospitals(response);
        })
        .catch((error: any) => {
          console.log(error);
          message.error(error.error || 'Có lỗi xảy ra!');
        }),
    );
  }, []);

  return (
    <PageContainer>
      <div className={styles.main}>
        <GridContent>
          <div className={styles.tabsCard} style={{ paddingLeft: 24, paddingRight: 24 }}>
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
                        fetchHospitals: fetchHospitals,
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
                total: hospitals.length,
                pageSize: 10,
                onChange: (targetPageNumber: number) => {
                  // setPage(targetPageNumber - 1);
                },
              }}
              loading={isLoading}
              dataSource={hospitals}
              columns={columns}
            />
          </div>
        </GridContent>
      </div>
    </PageContainer>
  );
};

export default HospitalList;
