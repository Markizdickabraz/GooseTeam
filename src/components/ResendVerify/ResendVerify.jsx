import React from 'react';
import { Container, BtnResendEmail, TextStyleSpan, TextStyleP } from './ResendVerify.styled';
import { useDispatch, useSelector } from 'react-redux';
import { emailUser } from '../../redux/authorization/selectors';
import { resendEmail } from '../../redux/authorization/operations';

const ResendVerify = () => {
  const dispatch = useDispatch();
  const email = useSelector(emailUser);
  return (
    <Container>
      <TextStyleSpan>Please check your email </TextStyleSpan>
      <TextStyleP>
        If you have not the email
        <BtnResendEmail onClick={() => dispatch(resendEmail({ email }))}>
          click here
        </BtnResendEmail>
      </TextStyleP>
    </Container>
  );
};

export default ResendVerify;
