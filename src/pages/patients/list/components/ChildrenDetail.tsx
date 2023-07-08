import { ProFormTextArea } from '@ant-design/pro-form';
import { Checkbox, Col, Row, Tabs } from 'antd';
import moment from 'moment';
import styled from 'styled-components';

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

const TabsTabPane = styled(Tabs.TabPane)`
  margin-top: 24px;
`;

function ChildrenDetail({ thalassemiaData, trisomyData }: any) {
  const renderThalassemiaResult = () => (
    <>
      <p>Ngày sàng lọc: {moment(thalassemiaData.date).format('DD/MM/YYYY - hh:mm')}</p>
      <div style={{ marginBottom: 24 }}>
        <Row>
          <Col span={6}>Tỉ lệ bị bệnh: {thalassemiaData.hasDiseaseRatio}</Col>
          <Col span={6}>Tỉ lệ không bị bệnh: {1 - thalassemiaData.hasDiseaseRatio}</Col>
        </Row>
        <Row style={{ marginTop: 16 }}>
          <Col span={6}>Thalassemia alpha: {thalassemiaData.hasAlphaRatio}</Col>
          <Col span={6}>Thalassemia beta: {thalassemiaData.hasBetaRatio}</Col>
        </Row>
      </div>

      <div style={{ marginBottom: 16 }}>
        <p>Kết luận của bác sĩ</p>

        <Row>
          <Col span={2}>
            <Checkbox
              style={{ lineHeight: '32px' }}
              defaultChecked
              checked={thalassemiaData.hasAlpha}
              disabled
            >
              Alpha
            </Checkbox>
          </Col>
          <Col span={2}>
            <Checkbox style={{ lineHeight: '32px' }} checked={thalassemiaData.hasBeta} disabled>
              Beta
            </Checkbox>
          </Col>
          <Col span={4}>
            <Checkbox style={{ lineHeight: '32px' }} checked={!thalassemiaData.hasDisease} disabled>
              Không mang bệnh
            </Checkbox>
          </Col>
        </Row>
      </div>
      <Row>
        <Col span={12}>
          <ProFormTextArea
            label="Chẩn đoán của bác sỹ"
            name="doctorComment"
            style={{ width: 500 }}
            value={thalassemiaData.conclusions}
            readonly
          />
        </Col>
      </Row>
    </>
  );

  const renderTrisomyResult = () => (
    <>
      <p>Ngày sàng lọc: {moment(trisomyData.date).format('DD/MM/YYYY - hh:mm')}</p>
      <div style={{ marginBottom: 24 }}>
        <Row>
          <Col span={3}>Trisomy 21: {trisomyData.hasTrisomy21Ratio}</Col>
          <Col span={3}>Trisomy 18: {trisomyData.hasTrisomy18Ratio}</Col>
          <Col span={3}>Trisomy 13: {trisomyData.hasTrisomy13Ratio}</Col>
        </Row>
      </div>

      <div style={{ marginBottom: 16 }}>
        <p>Kết luận của bác sĩ</p>

        <Row>
          <Col span={2}>
            <Checkbox
              style={{ lineHeight: '32px' }}
              defaultChecked
              checked={trisomyData.hasTrisomy21}
              disabled
            >
              Trisomy 21
            </Checkbox>
          </Col>
          <Col span={2}>
            <Checkbox style={{ lineHeight: '32px' }} checked={trisomyData.hasTrisomy18} disabled>
              Trisomy 18
            </Checkbox>
          </Col>
          <Col span={4}>
            <Checkbox style={{ lineHeight: '32px' }} checked={trisomyData.hasTrisomy13} disabled>
              Trisomy 13
            </Checkbox>
          </Col>
        </Row>
      </div>
      <Row>
        <Col span={12}>
          <ProFormTextArea
            label="Chẩn đoán của bác sỹ"
            name="doctorComment"
            style={{ width: 500 }}
            value={trisomyData.conclusions}
            readonly
          />
        </Col>
      </Row>
    </>
  );

  return (
    <div>
      <StyledTabs>
        {/* <TabsTabPane tab="Kết quả thalassemia" key="item-1">
          {thalassemiaData ? renderThalassemiaResult() : 'Chưa có dữ liệu'}
        </TabsTabPane> */}
        <Tabs.TabPane tab="Kết quả trisomy" key="item-2">
          {trisomyData ? renderTrisomyResult() : 'Chưa có dữ liệu'}
        </Tabs.TabPane>
      </StyledTabs>
    </div>
  );
}

export default ChildrenDetail;
