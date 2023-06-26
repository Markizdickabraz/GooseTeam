import { Field, Form } from 'formik';
import styled from 'styled-components';
import { buttonColors } from '../../styles/variables';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin: 40px auto 0 auto;
  background-color: #fff;

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

// CustomInput
export const InputContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 354px;
  flex: 1;
`;
export const Input = styled(Field)`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  outline: none;
  background-color: #fff;

  font-size: 14px;

  :focus {
    border: 1px solid #111;
  }

  @media (min-width: 768px) {
    padding: 14px 18px;
    font-size: 16px;
  }
`;
export const Label = styled.label`
  color: ${({ error, isValid }) =>
    error ? 'red' : isValid ? 'green' : 'inherit'};

  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const IconWrapper = styled.div`
  position: absolute;
  right: 18px;
  top: 43%;
`;
export const MessageWrapper = styled.div`
  p {
    margin-left: 14px;
    font-size: 12px;

    @media (min-width: 768px) {
      margin-left: 18px;
    }
  }
`;
export const ErrorText = styled.p`
  color: red;
`;
export const SuccessText = styled.p`
  color: green;
`;

// Calendar
export const CalendarButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
`;

export const DateInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 354px;

  input {
    width: 100%;
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid rgba(17, 17, 17, 0.1);
    outline: none;

    :focus {
      border: 1px solid #111;
    }
  }
`;

// Avatar
export const UpdateAvatarButton = styled.button`
  background-color: ${buttonColors.blue};
  outline: none;
  border: none;
  padding: 3px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 8px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  position: absolute;
  bottom: -4px;
  right: 22px;

  @media (max-width: 768px) {
    position: absolute;
    bottom: -25px;
    right: -22px;
  }
`;

export const AvatarContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 0px;
  height: 0px;

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const AvatarImg = styled.img`
  max-width: none;

  @media (max-width: 768px) {
    position: absolute;
    top: -50px;
    left: -35px;
  }

  object-fit: cover;
  border-radius: 72px;
  border: 2px solid #3e85f3;
  width: 72px;
  height: 72px;

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
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
