import { ErrorFormContainer, FormContainer } from '../RegisterComponent.styled';

export const isErrorField = err => {
  if (!Object.keys(err).length) {
    return FormContainer;
  } else {
    return ErrorFormContainer;
  }
};
