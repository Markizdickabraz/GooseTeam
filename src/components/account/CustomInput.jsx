import { ErrorMessage, useField } from 'formik';

import { BsExclamationCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';
import {
  InputContainer,
  Label,
  Input,
  MessageWrapper,
  ErrorText,
  IconWrapper,
} from './styles/CustomInput.styled';

export const CustomInput = ({ label, name, setIsFormDirty, ...rest }) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;
  const isValid = meta.touched && !meta.error && meta.value !== '';

  const color = error ? 'red' : isValid ? 'green' : 'default-color';

  return (
    <InputContainer>
      <Label htmlFor={name} style={{ color }}>
        {label}
      </Label>

      <Input
        {...field}
        {...rest}
        placeholder={`Your ${name}`}
        style={{ borderColor: color }}
        onChange={event => {
          field.onChange(event);
          setIsFormDirty(true);
        }}
      />

      <MessageWrapper>
        {error && <ErrorMessage>{meta.error}</ErrorMessage>}

        <ErrorMessage name={name} component={ErrorText} />
      </MessageWrapper>

      <IconWrapper error={error}>
        {error ? (
          <BsExclamationCircle color="red" />
        ) : (
          isValid && <BsCheckCircle color="green" />
        )}
      </IconWrapper>
    </InputContainer>
  );
};
