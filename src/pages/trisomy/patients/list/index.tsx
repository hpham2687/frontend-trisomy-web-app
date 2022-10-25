import useAsync from '@/hooks/useAsync';
import PatientDetail from '@/pages/trisomy/patients/list/PatientDetail';
import { ExclamationCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { ProFormDateRangePicker, ProFormText } from '@ant-design/pro-form';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Form, message, Modal, Table } from 'antd';
import moment from 'moment';
import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Link } from 'umi';
import { defaultDateRange, deletePatient, queryPatients } from './service';
import styles from './style/index.less';
import './style/index.css';

const FilterWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 24px;
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
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [form] = Form.useForm();

  const handleQueryPatients = useCallback(() => {
    const dateRange = form.getFieldValue('dateRange');
    const fullName = form.getFieldValue('fullName');
    const startDate = dateRange[0];
    const endDate = dateRange[1];
    run(queryPatients({ page, startDate, endDate, fullName })).then((response: any) => {
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
    {
      title: 'STT',
      dataIndex: 'key',
      key: 'key',
      render: (item, record, index) => index + 1,
    },
    {
      key: 'patientId',
      title: 'Mã bệnh nhân',
      dataIndex: 'patientId',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      key: 'dateOfBirth',
      title: 'Ngày sinh',
      dataIndex: 'dateOfBirth',
      render: (dateOfBirth: string) => {
        return moment(dateOfBirth).format('YYYY-MM-DD');
      },
    },
    {
      title: 'Hành động',
      dataIndex: 'action',
      key: 'action',
      render: (patient: any) => {
        return (
          <>
            <div className="action-cell">
              <span
                style={{ cursor: 'pointer', color: 'var(--ant-primary-color)' }}
                onClick={() => {
                  setSelectedPatient(patient.id);
                }}
              >
                Chi tiết
              </span>
              <Link
                to={`/trisomy/patients/${patient.id}/edit`}
                style={{ marginLeft: 8, cursor: 'pointer', color: 'var(--ant-primary-color)' }}
              >
                Sửa
              </Link>
              <span
                onClick={() => handleShowConfirmDelete(patient)}
                style={{ marginLeft: 8, color: 'red', cursor: 'pointer' }}
              >
                Xóa
              </span>{' '}
            </div>
          </>
        );
      },
    },
  ];

  if (selectedPatient) {
    return <PatientDetail patientId={selectedPatient} setSelectedPatient={setSelectedPatient} />;
  }

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
                <ProFormDateRangePicker name="dateRange" label="Lọc theo ngày" />
                <ProFormText name="fullName" label="Lọc theo tên" placeholder="Lọc theo tên" />

                <Button type="primary" icon={<SearchOutlined />} onClick={handleFilter}>
                  Tìm kiếm
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
