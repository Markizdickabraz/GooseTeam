import { ErrorMessage, useField } from 'formik';
import {
  ErrorText,
  IconWrapper,
  Input,
  InputContainer,
  Label,
  MessageWrapper,
  // SuccessText,
} from './Account.styled';
import { BiErrorCircle } from 'react-icons/bi';

export const CustomInput = ({ label, name, ...rest }) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;
  const isValid = meta.touched && !meta.error;
  // const showSuccess = meta.touched && !error && helpers.value !== '';

  return (
    <InputContainer>
      <Label htmlFor={name} error={error} isValid={isValid}>
        {label}
      </Label>

      <Input {...field} {...rest} placeholder={`Your ${name}`} />

      <MessageWrapper>
        {error && <ErrorMessage>{meta.error}</ErrorMessage>}

        {/* {showSuccess && <SuccessText>This is a CORRECT email</SuccessText>} */}

        <ErrorMessage name={name} component={ErrorText} />
      </MessageWrapper>

      {/* {error ? (
        <IconWrapper>
          <BiErrorCircle color="red" size={18} />
        </IconWrapper>
      ) : (
        isValid && (
          <IconWrapper>
            <BiErrorCircle color="green" size={18} />
          </IconWrapper>
        )
      )} */}

      {error && (
        <IconWrapper>
          <BiErrorCircle color="red" size={18} />
        </IconWrapper>
      )}
    </InputContainer>
  );
};
