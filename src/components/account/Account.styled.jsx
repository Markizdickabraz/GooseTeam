import { Field, Form } from 'formik';
import styled from 'styled-components';
import { buttonColors } from '../../styles/variables';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;

  max-width: 354px;
  margin: 40px auto 0 auto;
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

// Avatar button
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
`;
