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

function ChildrenDetail({ thalassemiaData }: any) {
  if (!thalassemiaData) return <>Chưa có dữ liệu</>;

  return (
    <div>
      <StyledTabs>
        <TabsTabPane tab="Kết quả thalassemia" key="item-1">
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
                <Checkbox
                  style={{ lineHeight: '32px' }}
                  checked={!thalassemiaData.hasDisease}
                  disabled
                >
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
        </TabsTabPane>
        <Tabs.TabPane tab="Kết quả trisomy" key="item-2">
          Content 2
        </Tabs.TabPane>
      </StyledTabs>
    </div>
  );
}

export default ChildrenDetail;
