import { ErrorMessage, useField } from 'formik';
import {
  ErrorText,
  IconWrapper,
  Input,
  InputContainer,
  Label,
  MessageWrapper,
} from './Account.styled';
import { BsExclamationCircle } from 'react-icons/bs';
import { BsCheckCircle } from 'react-icons/bs';

export const CustomInput = ({ label, name, ...rest }) => {
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
      />

      <MessageWrapper>
        {error && <ErrorMessage>{meta.error}</ErrorMessage>}

        {/* {isValid && <SuccessText>This is a CORRECT {name}</SuccessText>} */}

        <ErrorMessage name={name} component={ErrorText} />
      </MessageWrapper>

      <IconWrapper>
        {error ? (
          <BsExclamationCircle color="red" />
        ) : (
          isValid && <BsCheckCircle color="green" />
        )}
      </IconWrapper>
    </InputContainer>
  );
};
