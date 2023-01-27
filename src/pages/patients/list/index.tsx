import useAsync from '@/hooks/useAsync';
import { ExclamationCircleOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { ProFormDateRangePicker, ProFormText } from '@ant-design/pro-form';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Form, message, Modal, Table } from 'antd';
import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { history } from 'umi';
import { defaultDateRange, deletePatient, queryPatients } from './service';
import styles from './style/index.less';
import './style/index.css';
import { BreakPoints } from '@/constants/common';
import {
  addressColumn,
  dateOfBirthColumn,
  fullNameColumn,
  numericalOrderColumn,
  patientIdColumn,
  patientListActionColumn,
} from '@/constants/patientDetail';

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
      label[for='filter-form_fullName'] {
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

const convertResponseToTableData = (patients: any) => {
  return patients.map((patient: any) => ({
    key: patient.id,
    patientId: patient.id,
    name: patient.fullName,
    dateOfBirth: patient.dateOfBirth,
    address: patient.address,
    action: patient,
  }));
};

const PatientList: FC = () => {
  const { run, isLoading } = useAsync();
  const { run: runDeletePatient, isLoading: isLoadingDeletePatient } = useAsync();
  const [patients, setPatients] = useState([]);
  const [totals, setTotals] = useState(0);
  const [page, setPage] = useState(0);
  const [form] = Form.useForm();

  const handleQueryPatients = useCallback(() => {
    const dateRange = form.getFieldValue('dateRange');
    const fullName = form.getFieldValue('fullName');
    const startDate = dateRange[0];
    const endDate = dateRange[1];
    run(queryPatients({ page, startDate, endDate, fullName })).then((response: any) => {
      console.log(response);

      setPatients(convertResponseToTableData(response.results));
      setTotals(response.total);
    });
  }, [page, form]);

  useEffect(() => {
    handleQueryPatients();
  }, [page, handleQueryPatients]);

  const handleShowConfirmDelete = (patient: any) => {
    Modal.confirm({
      title: 'Xác nhận',
      icon: <ExclamationCircleOutlined />,
      content: `Bạn có chắc là muốn xóa bệnh nhân ${patient.fullName} chứ?`,
      okText: 'Có',
      cancelText: 'Không',
      onOk: () => {
        runDeletePatient(deletePatient(patient.id)).then((response: any) => {
          message.success('Xóa bệnh nhân thành công!');
          console.log(response);
          handleQueryPatients();
        });
      },
    });
  };

  const columns = [
    numericalOrderColumn({
      width: 60,
    }),
    patientIdColumn({ width: 150 }),
    fullNameColumn(),
    addressColumn(),
    dateOfBirthColumn(),
    patientListActionColumn({
      onClickDelete: handleShowConfirmDelete,
    }),
  ];

  const handleFilter = () => {
    form
      .validateFields()
      .then((values) => {
        run(
          queryPatients({
            page,
            startDate: values.dateRange[0],
            endDate: values.dateRange[1],
            fullName: values.fullName,
          }),
        ).then((response: any) => {
          setPatients(convertResponseToTableData(response.results));
          setTotals(response.total);
        });
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <PageContainer>
      <div className={styles.main}>
        <GridContent>
          <Card className={styles.tabsCard} bordered={false}>
            <Form
              name="filter-form"
              form={form}
              initialValues={{
                dateRange: defaultDateRange,
                fullName: '',
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
                  onClick={() => {
                    history.push('/patients/add');
                  }}
                >
                  Thêm thai phụ
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
              dataSource={patients}
              columns={columns}
            />
          </Card>
        </GridContent>
      </div>
    </PageContainer>
  );
};

export default PatientList;
