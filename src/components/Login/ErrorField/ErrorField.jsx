import React from 'react';
import { Error } from './ErrorField.styled';

const ErrorField = ({ msg }) => {
  return <Error>{msg}</Error>;
};

export default ErrorField;
