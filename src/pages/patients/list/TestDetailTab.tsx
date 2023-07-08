/* eslint-disable @typescript-eslint/no-use-before-define */

import type { ProFormInstance } from '@ant-design/pro-form';
import styles from './style/index.less';

import { ModalKey } from '@/components/Modals';
import { BreakPoints } from '@/constants/common';
import {
  numericalOrderColumn,
  testActionColumn,
  testDateColumn,
  testNameColumn,
} from '@/constants/patientDetail';
import { TEST_NAME } from '@/constants/tests';
import useAsync from '@/hooks/useAsync';
import { FundOutlined, PlusOutlined } from '@ant-design/icons';
import ProForm, { ProFormTextArea } from '@ant-design/pro-form';
import { Button, Checkbox, Col, Descriptions, Divider, Form, message, Row, Table } from 'antd';
import moment from 'moment';
import { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'umi';
import {
  predictThalassemia,
  predictTrisomy,
  updateThalassemiaResult,
  updateTrisomyResult,
} from './service';

const ActionButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${BreakPoints.PHONE}px) {
    .ai-diagnosis-button {
      margin-left: 0 !important;
    }
  }
`;

function TestDetailTab({
  patientDetail,
  setPatientDetail,
  isLoading: isLoadingPatientDetail,
  isLoadingDelete,
  handleEditTest,
  handleViewTest,
  // shouldEnablePredictThalassemia,
  shouldEnablePredictTrisomy,
  getPatientDetail,
  handleDeleteTest,
}: any) {
  const dispatch = useDispatch();

  const columns: any = [
    numericalOrderColumn(),
    testNameColumn({ handleViewTest }),
    testDateColumn,
    testActionColumn({ handleEditTest, handleDeleteTest }),
  ];

  const { run: runPredictTrisomy, isLoading: isLoadingPredictTrisomy } = useAsync();
  const { run: runPredictThalassemia, isLoading: isLoadingPredictThalassemia } = useAsync();
  const formRef = useRef<ProFormInstance>();
  const childrenId = patientDetail?.children[0]?.id || 0;

  // const handleSaveThalassemiaResult = (values: any) => {
  //   const { diseases, doctorComment } = values;

  //   const hasAlpha = !!diseases.find((i: any) => i === 'alpha');
  //   const hasBeta = !!diseases.find((i: any) => i === 'beta');

  //   const payload = {
  //     conclusions: doctorComment,
  //     hasDiseaseRatio: 1 - values.noGen.toFixed(2),
  //     hasAlphaRatio: values.alphaGen.toFixed(2),
  //     hasBetaRatio: values.betaGen.toFixed(2),
  //     hasAlpha,
  //     hasBeta,
  //     hasDisease: hasBeta || hasAlpha,
  //   };

  //   updateThalassemiaResult({ childrenId, payload })
  //     .then((children: any) => {
  //       message.success('Lưu kết quả thành công!');
  //       dispatch({
  //         type: 'modal/showModal',
  //         payload: null,
  //       });
  //       setPatientDetail((prev: any) => ({ ...prev, children: [children] }));
  //     })
  //     .catch(() => {
  //       message.error('Có lỗi xảy ra!');
  //     });
  // };

  // const handleShowThalassemiaResult = (result: any) => {
  //   dispatch({
  //     type: 'modal/showModal',
  //     payload: {
  //       modalKey: ModalKey.GENERAL_INFO,
  //       customProps: {
  //         footer: null,
  //         body: (
  //           <>
  //             <ProForm
  //               initialValues={{
  //                 doctor_selection: 'trisomy21',
  //               }}
  //               formRef={formRef}
  //               submitter={{ render: () => null }}
  //               onFinish={async (values) => {
  //                 handleSaveThalassemiaResult({ ...values, ...result });
  //               }}
  //             >
  //               {/* step 2 */}
  //               <Descriptions layout="horizontal" style={{ marginBottom: 16 }}>
  //                 <DescriptionsItem label="Tỉ lệ bị bệnh" style={{ width: '50%' }}>
  //                   {1 - result.noGen.toFixed(2)}
  //                 </DescriptionsItem>
  //                 <DescriptionsItem span={2} label="Tỉ lệ không bị bệnh">
  //                   {result.noGen.toFixed(2)}
  //                 </DescriptionsItem>
  //                 <DescriptionsItem label="Thalassemia alpha">
  //                   {result.alphaGen.toFixed(2)}
  //                 </DescriptionsItem>
  //                 <DescriptionsItem label="Thalassemia beta">
  //                   {result.betaGen.toFixed(2)}
  //                 </DescriptionsItem>
  //               </Descriptions>

  //               <div style={{ marginBottom: 16 }}>
  //                 <p>Kết luận của bác sĩ</p>
  //                 <Form.Item
  //                   name="diseases"
  //                   rules={[
  //                     {
  //                       validator: (rule: any, value: any, callback: any) => {
  //                         if (!value || value.length === 0) {
  //                           callback('Vui lòng chọn ít nhất một lựa chọn!');
  //                         } else {
  //                           callback();
  //                         }
  //                       },
  //                     },
  //                   ]}
  //                 >
  //                   <Checkbox.Group style={{ width: '100%' }}>
  //                     <Row>
  //                       <Col span={8}>
  //                         <Checkbox value="alpha" style={{ lineHeight: '32px' }}>
  //                           Alpha
  //                         </Checkbox>
  //                       </Col>
  //                       <Col span={8}>
  //                         <Checkbox value="beta" style={{ lineHeight: '32px' }}>
  //                           Beta
  //                         </Checkbox>
  //                       </Col>
  //                       <Col span={8}>
  //                         <Checkbox value="none" style={{ lineHeight: '32px' }}>
  //                           Không mang bệnh
  //                         </Checkbox>
  //                       </Col>
  //                     </Row>
  //                   </Checkbox.Group>
  //                 </Form.Item>
  //               </div>
  //               <ProFormTextArea
  //                 label="Chẩn đoán của bác sỹ"
  //                 name="doctorComment"
  //                 placeholder="Nhập chẩn đoán của bác sỹ"
  //               />
  //               {/* <Editor
  //                 placeholder="Nhập chẩn đoán của bác sỹ"
  //                 style={{
  //                   border: '1px solid #d9d9d9',
  //                 }}
  //                 name="doctorComment"
  //                 editorState={editorState}
  //                 toolbarClassName="toolbarClassName"
  //                 wrapperClassName="wrapperClassName"
  //                 editorClassName="editorClassName"
  //                 onEditorStateChange={setEditorState}
  //                 toolbar={{
  //                   options: ['inline', 'list', 'link'],
  //                   inline: {
  //                     options: ['bold', 'italic', 'underline'],
  //                   },
  //                   list: {
  //                     options: ['unordered', 'ordered'],
  //                   },
  //                 }}
  //               /> */}
  //               <Button type="primary" htmlType="submit">
  //                 Lưu kết quả
  //               </Button>
  //             </ProForm>
  //           </>
  //         ),
  //       },
  //     },
  //   });
  // };

  // const handlePredictThalassemia = () => {
  //   if (!shouldEnablePredictThalassemia) {
  //     return alert('Not enough data');
  //   }
  //   const { tests } = patientDetail;

  //   const bloodTest = tests.find((test: any) => test.testName === TEST_NAME.BLOOD_TEST)?.action;
  //   const serumIronTest = tests.find(
  //     (test: any) => test.testName === TEST_NAME.SERUM_IRON_TEST,
  //   )?.action;
  //   const hemoglobinTest = tests.find(
  //     (test: any) => test.testName === TEST_NAME.HEMOGLOBIN_TEST,
  //   )?.action;

  //   let data2Send: any = {
  //     ctm_rbc: bloodTest.ctmRbc,
  //     ctm_hgb: bloodTest.ctmHgb,
  //     ctm_hct: bloodTest.ctmHct,
  //     ctm_mcv: bloodTest.ctmMcv,
  //     ctm_mch: bloodTest.ctmMch,
  //     ctm_mchc: bloodTest.ctmMchc,
  //     ctm_rdw: bloodTest.ctmRdw,
  //   };
  //   if (serumIronTest) {
  //     data2Send = {
  //       ...data2Send,
  //       ctm_sathuyetthanh: serumIronTest.ctmSathuyetthanh,
  //       ctm_ferritinehuyetthanh: serumIronTest.ctmFerritinehuyetthanh,
  //     };
  //   }
  //   if (hemoglobinTest) {
  //     data2Send = {
  //       ...data2Send,
  //       dd_hba1: hemoglobinTest.ddHba1,
  //       dd_hba2: hemoglobinTest.ddHba2,
  //       dd_hbe: hemoglobinTest.ddHbe,
  //       dd_hbh: hemoglobinTest.ddHbh,
  //       dd_hbbar: hemoglobinTest.ddHbbar,
  //       dd_hbkhac: hemoglobinTest.ddHbkhac,
  //       dd_hbf: hemoglobinTest.ddHbf,
  //     };
  //   }

  //   runPredictThalassemia(
  //     predictThalassemia(data2Send)
  //       .then((response: any) => {
  //         handleShowThalassemiaResult(response);
  //       })
  //       .catch((error) => console.log(error)),
  //   );
  // };

  const handleSaveTrisomyResult = (values: any) => {
    const { diseases, doctorComment } = values;

    const hasTrisomy13 = !!diseases.find((i: any) => i === 'trisomy13');
    const hasTrisomy18 = !!diseases.find((i: any) => i === 'trisomy18');
    const hasTrisomy21 = !!diseases.find((i: any) => i === 'trisomy21');

    const payload = {
      conclusions: doctorComment,
      hasTrisomy13Ratio: values.Trisomy13.toFixed(2),
      hasTrisomy18Ratio: values.Trisomy18.toFixed(2),
      hasTrisomy21Ratio: values.Trisomy21.toFixed(2),
      hasTrisomy13,
      hasTrisomy18,
      hasTrisomy21,
      hasDisease: hasTrisomy13 || hasTrisomy18 || hasTrisomy21,
    };

    updateTrisomyResult({ childrenId, payload })
      .then((children: any) => {
        message.success('Lưu kết quả thành công!');
        dispatch({
          type: 'modal/showModal',
          payload: null,
        });
        setPatientDetail((prev: any) => ({ ...prev, children: [children] }));
      })
      .catch(() => {
        message.error('Có lỗi xảy ra!');
      });
  };

  const handleShowTrisomyResult = (result: any) => {
    dispatch({
      type: 'modal/showModal',
      payload: {
        modalKey: ModalKey.GENERAL_INFO,
        customProps: {
          footer: null,
          body: (
            <>
              <ProForm
                readonly={false}
                initialValues={{
                  doctor_selection: 'trisomy21',
                }}
                submitter={{ render: () => null }}
                formRef={formRef}
                onFinish={async (values) => {
                  handleSaveTrisomyResult({ ...values, ...result });
                }}
              >
                {/* step 2 */}
                <Descriptions layout="horizontal" style={{ marginBottom: 16 }}>
                  <Descriptions.Item label="Trisomy 21">
                    {result.Trisomy21.toFixed(2)}
                  </Descriptions.Item>
                  <Descriptions.Item label="Trisomy 18">
                    {result.Trisomy18.toFixed(2)}
                  </Descriptions.Item>
                  <Descriptions.Item label="Trisomy 13">
                    {result.Trisomy13.toFixed(2)}
                  </Descriptions.Item>
                </Descriptions>
                <div style={{ marginBottom: 16 }}>
                  <p>Kết luận của bác sĩ</p>
                  <Form.Item
                    name="diseases"
                    // rules={[
                    //   {
                    //     validator: (rule: any, value: any, callback: any) => {
                    //       if (!value || value.length === 0) {
                    //         callback('Please select at least one option');
                    //       } else {
                    //         callback();
                    //       }
                    //     },
                    //   },
                    // ]}
                  >
                    <Checkbox.Group
                      options={[
                        {
                          value: 'trisomy21',
                          label: 'Trisomy 21',
                        },
                        {
                          value: 'trisomy18',
                          label: 'Trisomy 18',
                        },
                        {
                          value: 'trisomy13',
                          label: 'Trisomy 13',
                        },
                      ]}
                    />
                  </Form.Item>
                </div>
                <ProFormTextArea
                  label="Chẩn đoán của bác sỹ"
                  name="doctorComment"
                  placeholder="Nhập chẩn đoán của bác sỹ"
                />
                <Button type="primary" htmlType="submit">
                  Lưu kết quả
                </Button>
              </ProForm>
            </>
          ),
        },
      },
    });
  };

  const handlePredictTrisomy = () => {
    if (!shouldEnablePredictTrisomy) {
      return alert('Not enough data');
    }
    const { dateOfBirth, tests } = patientDetail;
    const firstUltrasoundTest = tests.find(
      (test: any) => test.testName === TEST_NAME.FIRST_ULTRASOUND_TEST,
    )?.action;
    const secondUltrasoundTest = tests.find(
      (test: any) => test.testName === TEST_NAME.SECOND_ULTRASOUND_TEST,
    )?.action;
    const yearBorn = Number(moment(dateOfBirth).format('YYYY'));
    const doubleTest = tests.find((test: any) => test.testName === TEST_NAME.DOUBLE_TEST)?.action;
    const tripleTest = tests.find((test: any) => test.testName === TEST_NAME.TRIPLE_TEST)?.action;

    const hasFirstPeriodData = firstUltrasoundTest && doubleTest;
    const hasSecondPeriodData = secondUltrasoundTest && tripleTest;
    let data2Send: any = {};
    if (hasFirstPeriodData) {
      const yearTest = Number(moment(Number(firstUltrasoundTest.testDate)).format('YYYY'));
      data2Send = {
        ...data2Send,
        co_khoangsangsaugay: firstUltrasoundTest.nuchalTranslucency ? 1 : 0,
        co_nangbachhuyetvungco_1: firstUltrasoundTest.cervicalLymphNode ? 1 : 0,
        mat_xuongmui_1: firstUltrasoundTest.noseBone ? 1 : 0,
        nguc_ditattim_1: firstUltrasoundTest.heartDefect ? 1 : 0,

        d_mom_hcgb: doubleTest.bhcg,
        d_mom_papa: doubleTest.pappa,
        d_mom_nt: doubleTest.nt,
        tuoi: yearTest - yearBorn,
      };
    }
    if (hasSecondPeriodData) {
      const yearTest = Number(moment(Number(secondUltrasoundTest.testDate)).format('YYYY'));
      data2Send = {
        ...data2Send,
        co_nangbachhuyetvungco_2: secondUltrasoundTest.cervicalLymphNode ? 1 : 0,
        mat_xuongmui_2: secondUltrasoundTest.noseBone ? 1 : 0,
        nguc_ditattim_2: secondUltrasoundTest.heartDefect ? 1 : 0,
        mat_xuongsongmui: secondUltrasoundTest.noseBone ? secondUltrasoundTest.noseBoneLength : 0,
        t_mom_ue3: tripleTest.ue3,
        t_mom_afp: tripleTest.afp,
        t_mom_hcg: tripleTest.hcg,
        tuoi: yearTest - yearBorn,
      };
    }

    // fetch
    runPredictTrisomy(
      predictTrisomy(data2Send)
        .then((response: any) => {
          handleShowTrisomyResult(response);
        })
        .catch((error) => message.error(error.message)),
    );
  };

  return (
    <>
      <ActionButtonWrapper>
        <Button
          className="ai-diagnosis-button"
          type="primary"
          style={{ marginBottom: 24 }}
          onClick={() => {
            dispatch({
              type: 'modal/showModal',
              payload: {
                modalKey: ModalKey.ADD_TEST_RESULT,
                customProps: {
                  patientDetail,
                  getPatientDetail: getPatientDetail,
                },
              },
            });
          }}
        >
          <PlusOutlined />
          Thêm xét nghiệm
        </Button>
        {/* <Button
          loading={isLoadingPredictThalassemia}
          className="ai-diagnosis-button"
          type="primary"
          style={{ marginBottom: 24, marginLeft: 8 }}
          onClick={handlePredictThalassemia}
          disabled={!shouldEnablePredictThalassemia}
        >
          <FundOutlined />
          AI sàng lọc Thalassemia
        </Button> */}
        <Button
          className="ai-diagnosis-button"
          type="primary"
          style={{ marginBottom: 24, marginLeft: 8 }}
          onClick={handlePredictTrisomy}
          loading={isLoadingPredictTrisomy}
          disabled={!shouldEnablePredictTrisomy}
        >
          <FundOutlined />
          AI sàng lọc Trisomy
        </Button>
      </ActionButtonWrapper>
      <Table
        loading={isLoadingPatientDetail || isLoadingDelete}
        dataSource={patientDetail?.tests || []}
        columns={columns}
        rowKey={(obj) => obj.id}
        pagination={{ position: ['bottomRight'] }}
      />
      <Divider style={{ margin: '40px 0 24px' }} />
      <div className={styles.desc}>
        <h3>Hướng dẫn</h3>
        <Row>
          {/* <Col xs={24} md={12}>
            <h4>AI sàng lọc Thalassemia</h4>
            <div>
              Hỗ trợ sàng lọc khi nhập đủ một trong các trường hợp sau:
              <ul>
                <li>Xét nghiệm máu</li>
                <li>Xét nghiệm máu, Xét nghiệm sắt</li>
                <li>Xét nghiệm máu, Xét nghiệm sắt, Xét nghiệm điện di</li>
              </ul>
            </div>
          </Col> */}
          <Col xs={24} md={12}>
            <h4>AI sàng lọc Trisomy</h4>
            <div>
              Hỗ trợ sàng lọc khi nhập đủ một trong các trường hợp sau:
              <ul>
                <li>Siêu âm kì 1, xét nghiệm Double Test</li>
                <li>Siêu âm kì 2, xét nghiệm Triple Test</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TestDetailTab;

const DescriptionsItem = styled(Descriptions.Item)`
  width: 50%;
`;
