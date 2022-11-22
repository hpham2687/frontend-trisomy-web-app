import { Form } from 'antd';
import styled from 'styled-components';

export const StyledFormUltraSound = styled(Form)`
  .ant-col.ant-form-item-label {
    text-align: left;
  }
  .ant-row.ant-form-item-row {
    flex-direction: column;
  }
`;

export const StyledForm = styled(Form)`
  .ant-form-item-label {
    min-width: 100px !important;
  }
`;
