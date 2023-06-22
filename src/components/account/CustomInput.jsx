import { ErrorMessage, Field } from 'formik';
import { styled } from 'styled-components';

const Input = styled(Field)`
  padding: 12px 14px;

  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
`;

export const CustomInput = ({ label, name, ...rest }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <label htmlFor={name}>{label}</label>
    <Input type="text" name={name} id={name} {...rest} />
    <ErrorMessage name={name} component="div" />
  </div>
);
