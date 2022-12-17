import React, { useState } from 'react';
import { Breadcrumb, DatePicker, Input, Layout, Form, Card, Row, Col, Button, Divider } from 'antd';
import { ProFormRadio } from '@ant-design/pro-form';
const { Header, Content, Footer } = Layout;

const TrisomyForm: React.FC = () => {
  const [isHasNoseBone, setIsHasNoseBone] = useState(false);
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(1).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        /> */}
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>AI Trisomy</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Card>
            <Form
              name="basic"
              // labelCol={{ span: 3 }}
              wrapperCol={{ span: 4 }}
              initialValues={{ remember: true }}
              labelAlign={'left'}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <h3>Thông tin thai phụ</h3>

              <div>
                <Form.Item
                  labelCol={{ span: 3 }}
                  label="Ngày sinh"
                  name="dateOfBirth"
                  rules={[{ required: true, message: 'Please input your date of birth!' }]}
                >
                  <DatePicker style={{ width: '50%' }} placeholder="Nhập ngày sinh" />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 3 }}
                  wrapperCol={{ span: 2 }}
                  label="Cân nặng"
                  name="weight"
                  // rules={[{ required: true, message: 'Please input your date of birth!' }]}
                >
                  <Input suffix="kg" />
                </Form.Item>
              </div>

              <Divider />
              <div>
                <Row>
                  <Col style={{ display: 'flex' }} span={24}>
                    <Row style={{ width: '100%' }}>
                      <Col span={12}>
                        <h4>Double test</h4>
                        <Form.Item
                          labelCol={{
                            span: 12,
                            md: { span: 6 },
                          }}
                          name={'bhcg'}
                          label="β-hCG tự do"
                          rules={[{ required: true }]}
                        >
                          <Input type="text" suffix="ng/mL" />
                        </Form.Item>
                        <Form.Item
                          labelCol={{
                            span: 12,
                            md: { span: 6 },
                          }}
                          name={'pappa'}
                          label="PAPP-A"
                          rules={[{ required: true }]}
                        >
                          <Input type="text" suffix="mU/L" />
                        </Form.Item>
                        <Form.Item
                          labelCol={{ span: 6 }}
                          name={'nt'}
                          label="NT"
                          rules={[{ required: true }]}
                        >
                          <Input type="text" suffix="mm" />
                        </Form.Item>
                        <Form.Item labelCol={{ span: 6 }} name={'week_old'} label="Số tuần thai">
                          <Input type="text" suffix="tuần" />
                        </Form.Item>
                        <Form.Item labelCol={{ span: 6 }} name={'day_old'} label="Số ngày thai">
                          <Input type="text" suffix="ngày" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <h4>Triple test</h4>
                        <Form.Item
                          name={'ue3'}
                          label="uE3"
                          rules={[{ required: true }]}
                          labelCol={{ span: 6 }}
                        >
                          <Input type="text" suffix="nmol/L" />
                        </Form.Item>
                        <Form.Item
                          name={'afp'}
                          label="AFP"
                          rules={[{ required: true }]}
                          labelCol={{ span: 6 }}
                        >
                          <Input suffix="U/mL" />
                        </Form.Item>
                        <Form.Item
                          name={'hcg'}
                          label="hCG"
                          rules={[{ required: true }]}
                          labelCol={{ span: 6 }}
                        >
                          <Input type="text" suffix="U/L" />
                        </Form.Item>
                        <Form.Item labelCol={{ span: 6 }} name={'week_old'} label="Số tuần thai">
                          <Input type="text" suffix="tuần" />
                        </Form.Item>
                        <Form.Item labelCol={{ span: 6 }} name={'day_old'} label="Số ngày thai">
                          <Input type="text" suffix="ngày" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col style={{ display: 'flex' }} span={24}>
                    <Row style={{ width: '100%' }}>
                      <Col span={12}>
                        <h4>Siêu âm kỳ 1</h4>
                        <Form.Item
                          name={'test_date_ultrasound_1'}
                          label="Ngày XN"
                          rules={[{ required: true, message: 'Vui lòng nhập ngày xét nghiệm' }]}
                          labelCol={{ span: 6 }}
                        >
                          <DatePicker placeholder="Nhập ngày xét nghiệm" format="DD-MM-YYYY" />
                        </Form.Item>
                        <Form.Item
                          labelCol={{ span: 6 }}
                          name={'nuchal_translucency'}
                          label="Độ mờ da gáy NT"
                          rules={[
                            { required: true, message: 'Vui lòng nhập thông tin độ mờ da gáy' },
                          ]}
                        >
                          <Input type="number" suffix="mm" />
                        </Form.Item>
                        <Form.Item
                          labelCol={{ span: 6 }}
                          name={'crown_rump_length'}
                          // Crown Rump Length
                          label="Chiều dài đầu mông"
                          rules={[
                            {
                              required: false,
                              message: 'Vui lòng nhập thông tin chiều dài đầu mông',
                            },
                          ]}
                        >
                          <Input type="number" suffix="mm" />
                        </Form.Item>
                        <Form.Item labelCol={{ span: 6 }} name={'heartbeat'} label="Nhịp tim thai">
                          <Input type="number" suffix="lần/phút" />
                        </Form.Item>

                        <ProFormRadio.Group
                          radioType="button"
                          labelCol={{ span: 6 }}
                          label="Xương mũi"
                          name="nose_bone"
                          options={[
                            { label: 'Có', value: true },
                            { label: 'Không', value: false },
                          ]}
                          rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
                        />
                        <ProFormRadio.Group
                          radioType="button"
                          label="Dị tật tim"
                          labelCol={{ span: 6 }}
                          name="heart_defect"
                          options={[
                            { label: 'Có', value: true },
                            { label: 'Không', value: false },
                          ]}
                          rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
                        />

                        <ProFormRadio.Group
                          radioType="button"
                          label="Nang bạch huyết vùng cổ"
                          name="cervical_lymph_node"
                          labelCol={{ span: 6 }}
                          options={[
                            { label: 'Có', value: true },
                            { label: 'Không', value: false },
                          ]}
                          rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
                        />
                      </Col>
                      <Col span={12}>
                        <h4>Siêu âm kỳ 2</h4>
                        <Form.Item
                          name={'test_date_ultrasound_1'}
                          label="Ngày XN"
                          rules={[{ required: true, message: 'Vui lòng nhập ngày xét nghiệm' }]}
                          labelCol={{ span: 6 }}
                        >
                          <DatePicker placeholder="Nhập ngày xét nghiệm" format="DD-MM-YYYY" />
                        </Form.Item>
                        <ProFormRadio.Group
                          labelCol={{ span: 6 }}
                          radioType="button"
                          label="Xương mũi"
                          name="nose_bone"
                          options={[
                            { label: 'Có', value: true, onChange: () => setIsHasNoseBone(true) },
                            {
                              label: 'Không',
                              value: false,
                              onChange: () => setIsHasNoseBone(false),
                            },
                          ]}
                          rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
                        />
                        {isHasNoseBone && (
                          <Form.Item
                            name={'nose_bone_length'}
                            label="Chiều dài xương mũi"
                            labelCol={{ span: 6 }}
                            rules={[
                              {
                                required: true,
                                message: 'Vui lòng nhập thông tin chiều dài xương mũi',
                              },
                            ]}
                          >
                            <Input type="number" />
                          </Form.Item>
                        )}

                        <ProFormRadio.Group
                          radioType="button"
                          label="Dị tật tim"
                          name="heart_defect"
                          labelCol={{ span: 6 }}
                          options={[
                            { label: 'Có', value: true },
                            { label: 'Không', value: false },
                          ]}
                          rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
                        />

                        <ProFormRadio.Group
                          labelCol={{ span: 6 }}
                          radioType="button"
                          label="Nang bạch huyết ở vùng cổ"
                          name="cervical_lymph_node"
                          options={[
                            { label: 'Có', value: true },
                            { label: 'Không', value: false },
                          ]}
                          rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin' }]}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Button type="primary">Chẩn đoán</Button>
            </Form>
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © 2022 Produced by Đại học Bách Khoa Hà Nội và Đại học Y Hà Nội
      </Footer>
    </Layout>
  );
};

export default TrisomyForm;
