import { Field } from 'formik';
import styled from 'styled-components';
import { themeColors } from 'styles/variables';

export const InputContainer = styled.div`
  position: relative;
  flex-direction: column;
  gap: 8px;
  max-width: 354px;
  flex: 1;
  display: flex;
`;

export const Input = styled(Field)`
  padding: 12px 14px;
  border-radius: 8px;
  outline: none;
  font-size: 14px;

  @media (min-width: 768px) {
    padding: 14px 18px;
    font-size: 16px;
  }
`;
export const Label = styled.label`
  font-size: 12px;
  color: ${themeColors.label};

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const IconWrapper = styled.div`
  position: absolute;
  right: 18px;

  top: ${({ error }) => (error ? '42%' : '50%')};
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
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
  font-size: 12px;
`;
export const SuccessText = styled.p`
  color: green;
`;
