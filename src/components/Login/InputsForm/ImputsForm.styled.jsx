import styled from 'styled-components';
import { Field } from 'formik';

export const FieldForm = styled(Field)`
  display: flex;
  width: 400px;
  height: 54px;
  border: solid 1px #dce3e5;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 15px;
  &::placeholder {
    color: #dce3e5;    
  }
  @media only screen and (max-width: 600px) {  
    width: 287px;
  }
`;

export const LableField = styled.label`
  display: flex;
  font-family: Inter;
  color: #111111;
  text-align: start;
  width: 400px;
  font-size: 14px;
  font-weight: 600;
  line-height: 30.94px;
    @media only screen and (max-width: 600px) {  
    width: 287px;
  }
`;
/* style for mobile */

