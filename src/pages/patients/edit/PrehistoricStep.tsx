/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  familyDiseaseColumns,
  familyDiseaseData,
  personalDiseaseColumns,
  personalDiseaseData,
} from '@/constants/disease';
import { ProFormRadio, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { Col, Divider, Row, Table } from 'antd';
import styled from 'styled-components';

function PrehistoricStep() {
  return (
    <>
      <h3 style={{ marginBottom: '24px' }}>Tiền sử</h3>
      <h4 style={{ marginBottom: '24px' }}>1. Bản thân</h4>

      <Row gutter={32}>
        <Col lg={{ span: 12 }} md={{ span: 12 }} sm={24}>
          <SubSection>
            <h4 style={{ marginRight: 16 }}>Nội ngoại khoa</h4>
            <ProFormRadio.Group name="noi-ngoai-khoa" options={['Khoẻ mạnh', 'Có bệnh lý']} />
          </SubSection>
          <Row gutter={16} style={{ maxHeight: 400, overflow: 'scroll' }}>
            <Col lg={24} md={12} sm={24}>
              <Table
                pagination={false}
                columns={personalDiseaseColumns}
                dataSource={personalDiseaseData}
              />
            </Col>
          </Row>
        </Col>
        <Col lg={{ span: 12 }} md={{ span: 12 }} sm={24}>
          <SubSection>
            <h4 style={{ marginRight: 16 }}>Phụ khoa</h4>
            <ProFormRadio.Group name="checkbox-group" options={['Khoẻ mạnh', 'Có bệnh lý']} />
          </SubSection>
          <Row gutter={16}>
            <Col lg={12} md={12} sm={24}>
              <ProFormText
                label="Tuổi bắt đầu có kinh"
                name="tuoi_bat_dau_co_kinh"
                // rules={[
                //   { required: true, message: 'Vui lòng nhập địa chỉ' },
                //   // { type: 'email', message: '账户名应为邮箱格式' },
                // ]}
                placeholder="Nhập tuổi bắt đầu có kinh"
              />
            </Col>

            <Col lg={12} md={12} sm={24}>
              <ProFormText
                label="Chu kỳ kinh nguyệt"
                name="chu_ky_kinh_nguyet"
                // rules={[
                //   { required: true, message: 'Vui lòng nhập địa chỉ' },
                //   // { type: 'email', message: '账户名应为邮箱格式' },
                // ]}
                placeholder="Nhập chu kỳ kinh nguyệt"
              />
            </Col>

            <Col lg={12} md={12} sm={24}>
              <ProFormText
                label="Số ngày thấy kinh"
                name="tuoi_thay_kinh"
                // rules={[
                //   { required: true, message: 'Vui lòng nhập địa chỉ' },
                //   // { type: 'email', message: '账户名应为邮箱格式' },
                // ]}
                placeholder="Nhập số ngày thấy kinh"
              />
            </Col>
            <Col lg={12} md={12} sm={24}>
              <ProFormText
                label="Tuổi lấy chồng"
                name="tuoi_lay_chong"
                // rules={[
                //   { required: true, message: 'Vui lòng nhập địa chỉ' },
                //   // { type: 'email', message: '账户名应为邮箱格式' },
                // ]}
                placeholder="Nhập tuổi lấy chồng"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={24} md={12} sm={24}>
              <ProFormTextArea
                label="Bệnh phụ khoa đã mắc và điều trị"
                name="invoiceType"
                placeholder="Nhập bệnh phụ khoa đã mắc và điều trị"
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Divider style={{ margin: '16px 0px 24px 0px' }} />
      <h3 style={{ marginBottom: '24px' }}>2. Gia đình</h3>

      <Row gutter={16}>
        <Col lg={24} md={12} sm={24}>
          <Table
            pagination={false}
            columns={familyDiseaseColumns}
            dataSource={familyDiseaseData}
            style={{ marginBottom: '24px' }}
          />
        </Col>
      </Row>
    </>
  );
}

export default PrehistoricStep;

const SubSection = styled(Row)`
  margin-bottom: 32px;
  align-items: center;
  h4 {
    margin: 0;
  }
  .ant-form-item {
    margin-bottom: 0;
  }
`;
