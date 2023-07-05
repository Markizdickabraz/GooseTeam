import React from 'react';
import style from './style.module.css';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { validateFormLogin } from './helper';
import { logIn } from '../../redux/authorization/operations';
import { tokenUser } from '../../redux/authorization/selectors';
import TitleForm from './TitleForm';
import BtnSubmit from './BtnSubmit';
import InputsForm from './InputsForm';
import LinkForm from './LinkForm';
import { useDispatch, useSelector } from 'react-redux';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(tokenUser);
  const initialValues = { password: '', email: '' };

  const onSubmit = async (values, { setSubmitting }) => {
    dispatch(logIn(values));
    setSubmitting(false);
    if (token !== null) {
      return navigate('/account');
    }
  };
  return (
    <div className={style.container}>
      <Formik
        initialValues={initialValues}
        validate={validateFormLogin}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={style.form}>
            <TitleForm text={'Log in'} />
            <InputsForm />
            <BtnSubmit isSubmitting={isSubmitting} textBtn={'Log in'} />
          </Form>
        )}
      </Formik>
      <LinkForm path={'/register'} text={'Sign up'} />
    </div>
  );
};

export default LoginComponent;
