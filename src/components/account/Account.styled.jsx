import { Field, Form } from 'formik';
import styled from 'styled-components';
import { buttonColors } from '../../styles/variables';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 18px;

  max-width: 354px;
  margin: 40px auto 0 auto;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

// CustomInput
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Input = styled(Field)`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  outline: none;

  :focus {
    border: 1px solid #111;
  }
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

  position: absolute;
  bottom: -4px;
  right: 15px;

  font-size: 8px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const AvatarContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 72px;
  height: 72px;

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const AvatarImg = styled.img`
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
