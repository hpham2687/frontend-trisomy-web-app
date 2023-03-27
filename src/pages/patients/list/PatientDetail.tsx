/* eslint-disable @typescript-eslint/no-use-before-define */
import useAsync from '@/hooks/useAsync';
import { EyeOutlined } from '@ant-design/icons';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Button, Card } from 'antd';

import { useEffect, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { history, useDispatch, useParams } from 'umi';

import usePatientDetail from '@/hooks/usePatientDetail';
import ChildrenDetail from './components/ChildrenDetail';
import './style/index.css';
import styles from './style/index.less';
import TestDetailTab from './TestDetailTab';

const operationTabList = [
  {
    key: 'tab1',
    tab: 'Xét nghiệm',
  },
  {
    key: 'tab2',
    tab: 'Thai nhi',
  },
];

function PatientDetail() {
  const [tabStatus, seTabStatus] = useState({
    operationKey: 'tab1',
    tabActiveKey: 'detail',
  });

  const { run, isLoading } = useAsync();
  const dispatch = useDispatch();
  const { patientId } = useParams<any>();
  const { patientDetail, ...patientDetailProps } = usePatientDetail({ patientId });

  const onOperationTabChange = (key: string) => {
    seTabStatus({ ...tabStatus, operationKey: key });
  };

  const contentList = {
    tab1: <TestDetailTab patientDetail={patientDetail} {...patientDetailProps} />,
    tab2: (
      <ChildrenDetail
        thalassemiaData={patientDetail?.children[0]?.thalassemiaDisease}
        trisomyData={patientDetail?.children[0]?.trisomyDisease}
      />
    ),
  };

  useEffect(() => {
    run(
      dispatch({
        type: 'tests/fetch',
        payload: {},
      }),
    );
  }, []);

  if (isLoading || !patientDetail) {
    return <>Loading...</>;
  }

  return (
    <PageContainer
      title={`Bệnh nhân ：${patientDetail?.fullName}`}
      className={styles.pageHeader}
      extra={[
        <>
          <Button
            style={{ display: 'flex', alignItems: 'center', padding: 0 }}
            type="link"
            onClick={() => {
              history.push(`/patients/${patientId}/view`);
            }}
            icon={<EyeOutlined style={{ fontSize: 24 }} />}
          >
            Chi tiết
          </Button>
        </>,
      ]}
    >
      <div className={styles.main}>
        <GridContent>
          <Card
            className={styles.tabsCard}
            bordered={false}
            tabList={operationTabList}
            onTabChange={onOperationTabChange}
          >
            {contentList[tabStatus.operationKey]}
          </Card>
        </GridContent>
      </div>
    </PageContainer>
  );
}

export default PatientDetail;
