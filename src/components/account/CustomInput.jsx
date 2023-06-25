import { ErrorMessage, useField } from 'formik';
import {
  ErrorText,
  IconWrapper,
  Input,
  InputContainer,
  Label,
  MessageWrapper,
  SuccessText,
} from './Account.styled';
import { BiErrorCircle } from 'react-icons/bi';
import { MdDoneOutline } from 'react-icons/md';

export const CustomInput = ({ label, name, ...rest }) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error;
  const isValid = meta.touched && !meta.error && meta.value !== '';

  return (
    <InputContainer>
      <Label htmlFor={name} error={error} isValid={isValid}>
        {label}
      </Label>

      <Input {...field} {...rest} placeholder={`Your ${name}`} />

      <MessageWrapper>
        {error && <ErrorMessage>{meta.error}</ErrorMessage>}

        {isValid && <SuccessText>This is a CORRECT {name}</SuccessText>}

        <ErrorMessage name={name} component={ErrorText} />
      </MessageWrapper>

      <IconWrapper>
        {error ? (
          <BiErrorCircle color="red" size={18} />
        ) : (
          isValid && <MdDoneOutline color="green" size={18} />
        )}
      </IconWrapper>
    </InputContainer>
  );
};
