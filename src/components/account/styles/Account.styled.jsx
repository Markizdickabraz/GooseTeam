import { Form } from 'formik';
import styled from 'styled-components';
import { themeColors } from 'styles/variables';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin: 40px auto 0 auto;
  background-color: ${themeColors.secondBackground};
  color: ${themeColors.main};

  border-radius: 16px;
  padding: 18px;
  padding-bottom: 40px;

  input {
    color: ${themeColors.main};
    background-color: transparent;
    border: 1px solid ${themeColors.borderColor};

    :focus {
      border: 1px solid ${themeColors.main};
    }
  }
`;
export const FormWrapper = styled.div`
 display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  > div {
    position: relative;
  @media (max-width: 767px) {
    margin-bottom: 28px;
  }
  @media (min-width: 768px) {
    margin-bottom: 26px;
  }
  } 

  @media screen and (min-width: 768px) {
    width: 354px;
    min-height: 458px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    width: 758px;
    min-height: 264px;
  }
`;
/*export const FormWrapper = styled.div`
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
`;*/

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
