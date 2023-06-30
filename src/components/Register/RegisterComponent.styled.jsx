import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(220, 235, 247);
  background-image: url('../../images/register/goose_register@1x.png');
  background-repeat: no-repeat;
  background-position: left bottom;

  @media only screen and (max-width: 600px) {
    background-image: none;
  }
`;

export const FormContainer = styled(Form)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 424px;
  width: 480px;
  background-color: #ffffff;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    width: 335px;
  }
`;

export const ErrorFormContainer = styled(Form)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 510px;
  width: 480px;
  background-color: #ffffff;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    height: 520px;
    width: 335px;
  }
`;