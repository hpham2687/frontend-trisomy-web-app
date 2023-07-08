import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Button, Col, Form, Modal, Row, Table, message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

import { doctorListActionColumn } from '@/constants/manage';
import {
  ExclamationCircleOutlined,
  PlusCircleOutlined,
  RollbackOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import { ProFormDateRangePicker, ProFormText } from '@ant-design/pro-form';
import { useDispatch } from 'umi';
import styled from 'styled-components';
import useAsync from '@/hooks/useAsync';
import { BreakPoints, defaultDateRangeFilter } from '@/constants/common';
import type { Hospital } from '@/types/hospital';
import AddDoctorForm from './components/AddDoctorForm';
import AvatarView from './components/UploadAvatar';
import { deleteDoctor, getDoctors } from './service';
import styles from './style.less';
import { getHospitals } from '../hospital/service';

enum ViewType {
  LIST = 'list',
  ADD = 'add',
}

const FilterWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;

  & > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    #search-button,
    label[for='filter-form_fullName'] {
      margin-left: 16px;
    }
    .ant-form-item {
      margin-bottom: 0;
    }
    @media (max-width: ${BreakPoints.PHONE}px) {
      .ant-form-item {
        margin-bottom: 24px !important;
      }
      #search-button,
      label[for='filter-name'] {
        margin-left: 0;
      }
    }
  }
  @media (max-width: ${BreakPoints.PHONE}px) {
    flex-direction: column-reverse;
    gap: 24px;
    align-items: end !important;
    .action-cell {
      display: flex;
    }
  }
`;

const convertToTableData = (doctors: any) =>
  doctors.map((doctor: any) => ({ ...doctor, key: doctor.id, action: doctor }));

const Doctors: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { run, isLoading } = useAsync();
  const [view, setView] = useState(ViewType.LIST);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [totals, setTotals] = useState(0);
  const [page, setPage] = useState(0);
  const { run: runDeletePatient, isLoading: isLoadingDeletePatient } = useAsync();
  const [doctors, setDoctors] = useState([]);

  const fetchHospitals = async () => {
    getHospitals().then((response: any) => setHospitals(response));
  };

  const handleQueryDoctors = useCallback(() => {
    const dateRange = form.getFieldValue('dateRange');
    const fullName = form.getFieldValue('fullName');
    const startDate = dateRange[0];
    const endDate = dateRange[1];
    return run(getDoctors({ page, startDate, endDate, fullName })).then((response: any) => {
      setDoctors(convertToTableData(response.results));
      setTotals(response.total);
    });
  }, [page, form]);

  const backToListView = async () => {
    await handleQueryDoctors();
    setView(ViewType.LIST);
  };

  useEffect(() => {
    handleQueryDoctors();
  }, [page, handleQueryDoctors]);

  const handleShowConfirmDelete = (doctor: any) => {
    Modal.confirm({
      title: 'Xác nhận',
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có chắc là muốn xóa bệnh vienej ${doctor.fullName} chứ?`,
      okText: 'Có',
      cancelText: 'Không',
      onOk: () => {
        runDeletePatient(
          deleteDoctor(doctor.id).then(() => {
            message.success('Xóa bác sĩ thành công!');
            handleQueryDoctors();
          }),
        );
      },
    });
  };

  const columns = [
    {
      title: 'STT',
      key: 'index',
      width: '20px',
      render: (text: string, record: any, index: number) => page * 10 + index + 1,
    },
    {
      key: 'fullName',
      title: 'Tên bác sĩ',
      // width: 150,
      dataIndex: 'fullName',
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
      key: 'hospital',
      title: 'Bệnh viện',
      dataIndex: 'hospital',
      render: (hospital: Hospital) => {
        return hospital?.name;
      },
    },
    {
      key: 'accountStatus',
      title: 'Trạng thái',
      // width: 150,
      dataIndex: 'accountStatus',
      render: (accountStatus: number) => {
        if (accountStatus === 1) {
          return 'Hoạt động';
        } else {
          return 'Không hoạt động';
        }
      },
    },
    doctorListActionColumn({ onClickDelete: handleShowConfirmDelete, options: {} }),
  ];

  const renderContent = () => {
    if (view === ViewType.ADD) {
      return (
        <div>
          <div style={{ marginLeft: 24, marginRight: 24 }}>
            <Row gutter={[32, 32]}>
              <AddDoctorFormWrapper lg={16} sm={24}>
                <AddDoctorForm hospitals={hospitals} backToListView={backToListView} />
              </AddDoctorFormWrapper>
              <AvatarUploadWrapper lg={6} sm={24}>
                <div style={{ display: 'flex', flexDirection: 'column', placeContent: 'center' }}>
                  <AvatarView />
                </div>
              </AvatarUploadWrapper>
            </Row>
          </div>
        </div>
      );
    }

    const handleFilter = () => {
      form
        .validateFields()
        .then((values) => {
          run(
            getDoctors({
              page,
              startDate: values.dateRange[0],
              endDate: values.dateRange[1],
              fullName: values.fullName,
            }),
          ).then((response: any) => {
            setDoctors(convertToTableData(response.results));
            setTotals(response.total);
          });
        })
        .catch((info) => {
          console.log('Validate Failed:', info);
        });
    };

    return (
      <div className={styles.tabsCard} style={{ paddingLeft: 24, paddingRight: 24 }}>
        <Form
          name="filter-form"
          form={form}
          initialValues={{
            dateRange: defaultDateRangeFilter,
            name: '',
          }}
        >
          <FilterWrapper>
            <div id="filter-wrapper">
              <ProFormDateRangePicker
                name="dateRange"
                label="Lọc theo ngày"
                placeholder={['Từ ngày', 'Đến ngày']}
              />
              <ProFormText
                name="fullName"
                id="name-input"
                label="Lọc theo tên"
                placeholder="Lọc theo tên"
              />

              <Button
                type="primary"
                id="search-button"
                icon={<SearchOutlined />}
                onClick={handleFilter}
              >
                Tìm kiếm
              </Button>
            </div>
            <Button
              type="primary"
              icon={<PlusCircleOutlined />}
              style={{ marginLeft: 'auto' }}
              onClick={() => {
                setView(ViewType.ADD);
              }}
            >
              Thêm bác sĩ
            </Button>
          </FilterWrapper>
        </Form>

        <Table
          pagination={{
            position: ['bottomRight'],
            total: totals,
            pageSize: 10,
            onChange: (targetPageNumber: number) => {
              setPage(targetPageNumber - 1);
            },
          }}
          loading={isLoading}
          dataSource={doctors}
          columns={columns}
        />
      </div>
    );
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  return (
    <PageContainer
      extra={
        view === ViewType.ADD
          ? [
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
            ]
          : []
      }
    >
      <div className={styles.main}>
        <GridContent>{renderContent()}</GridContent>
      </div>
    </PageContainer>
  );
};

const AddDoctorFormWrapper = styled(Col)`
  @media (max-width: ${BreakPoints.PHONE}px) {
    order: 2;
  }
`;
const AvatarUploadWrapper = styled(Col)`
  @media (max-width: ${BreakPoints.PHONE}px) {
    order: 1;
  }
`;

export default Doctors;
