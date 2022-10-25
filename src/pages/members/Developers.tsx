import DeveloperList from '@/components/Common/DeveloperList';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';

const Developers: React.FC = () => (
  <PageContainer>
    <div>
      <GridContent>
        <Card bordered={false}>
          <DeveloperList />
        </Card>
      </GridContent>
    </div>
  </PageContainer>
);

export default Developers;
