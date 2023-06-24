import { ErrorMessage } from 'formik';
import { Input, InputContainer } from './Account.styled';

export const CustomInput = ({ label, name, ...rest }) => (
  <InputContainer>
    <label htmlFor={name}>{label}</label>

    <Input type="text" name={name} id={name} {...rest} />

    <ErrorMessage name={name} component="div" />
  </InputContainer>
);
