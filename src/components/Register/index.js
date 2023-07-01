import React from 'react';
import style from './style.module.css';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { validateFormSingup } from '../Login/helper';
import { isErrorField } from './helper';
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

  const onSubmit = async (values, { setSubmitting }) => {
    const data = await dispatch(register(values));
    if (data.meta.requestStatus !== 'fulfilled') return;

    dispatch(setResendEmail(values.email));
    setSubmitting(false);
    navigate('/register/resend-email');
  };
  return (
    <div className={[style.container]}>
      <Formik
        initialValues={initialValues}
        validate={validateFormSingup}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form className={isErrorField(errors, style)}>
            <TitleForm text={'Sing up'} />
            <InputsForm isSingup={true} />
            <BtnSubmit isSubmitting={isSubmitting} textBtn={'Sing up'} />
          </Form>
        )}
      </Formik>
      <LinkForm path={'/login'} text={'Log In'} />
    </div>
  );
};

export default RegisterComponent;
