import { ErrorMessage } from 'formik';
import { Input, InputContainer } from './Account.styled';

export const CustomInput = ({ label, name, ...rest }) => (
  <InputContainer>
    <label htmlFor={name}>{label}</label>

    <Input type="text" name={name} id={name} {...rest} />

    <ErrorMessage name={name} component="div" />
  </InputContainer>
);

export const CustomInputData = ({ ...rest }) => (
  <InputContainer>
    <label htmlFor="birthday">Birthday</label>

    <Input type="date" name={'birthday'} id={'birthday'} {...rest} />

    <ErrorMessage name={'birthday'} component="div" />
  </InputContainer>
);
