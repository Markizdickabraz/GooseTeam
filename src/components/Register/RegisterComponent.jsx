import React from 'react';
import {
  Container,
  FormContainer
} from './RegisterComponent.styled';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { validateFormSingup } from '../Login/helper';
import { isErrorField } from './helper/IsErrorField';
import { register } from '../../redux/authorization/operations';
import { setResendEmail } from '../../redux/authorization/authSlice';
import TitleForm from '../Login/TitleForm';
import BtnSubmit from '../Login/BtnSubmit';
import InputsForm from '../Login/InputsForm';
import LinkForm from '../Login/LinkForm';
import { useDispatch } from 'react-redux';

const RegisterComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = { password: '', email: '', name: '' };

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(register(values));
    dispatch(setResendEmail(values.email));
    setSubmitting(false);
    navigate('/register/resend-email');
  };
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validate={validateFormSingup}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors }) => (
          <FormContainer className={isErrorField(errors)}>
            <TitleForm text={'Sing up'} />
            <InputsForm isSingup={true} />
            <BtnSubmit isSubmitting={isSubmitting} textBtn={'Sing up'} />
          </FormContainer>
        )}
      </Formik>
      <LinkForm path={'/login'} text={'Log In'} />
    </Container>
  );
};

export default RegisterComponent;
