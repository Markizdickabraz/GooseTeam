import { Form } from 'formik';
import styled from 'styled-components';
import { backgroundColors } from 'styles/variables';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin: 40px auto 0 auto;
  background-color: ${backgroundColors.secondBackground};

  border-radius: 16px;
  padding: 18px;
  padding-bottom: 40px;
`;

export const FormWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 18px;

  @media (max-width: 1144px) {
    flex-direction: column;
    max-width: 354px;
    width: 100%;

    > div {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
  }

  @media (min-width: 1144px) {
    flex-direction: row;
    align-items: start;
    gap: 50px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
      justify-content: center;
      width: 354px;
    }
  }
`;

export const UserInfo = styled.div`
  text-align: center;

  p {
    margin-top: 40px;
    @media (min-width: 768px) {
      margin-top: 20px;
    }
  }

  p:last-child {
    margin-top: 4px;
    @media (min-width: 768px) {
      margin-top: 8px;
    }
  }
`;
