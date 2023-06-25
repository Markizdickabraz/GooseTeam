import React from 'react';
import style from './style.module.css';
import { Formik, Form } from 'formik';
import { validateFormSingup } from '../Login/helper';
import { isErrorField } from './helper';
import { register } from '../../redux/authorization/operations';
import TitleForm from '../Login/TitleForm';
import BtnSubmit from '../Login/BtnSubmit';
import InputsForm from '../Login/InputsForm';
import LinkForm from '../Login/LinkForm';
import { useDispatch } from 'react-redux';

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const initialValues = { password: '', email: '', name: '' };

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(register(values));
    setSubmitting(false);
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
