const { Form, Field } = require('formik');
const { styled } = require('styled-components');

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
`;
