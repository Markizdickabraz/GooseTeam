import React from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { emailUser } from '../../redux/authorization/selectors';
import { resendEmail } from '../../redux/authorization/operations';

const ResendVerify = () => {
  const dispatch = useDispatch();
  const email = useSelector(emailUser);
  return (
    <div className={style.container}>
      <span className={style.textStyle}>Please check your email </span>
      <p className={style.textStyle}>
        If you have not the email
        <button
          className={style.btnResendEmail}
          onClick={() => dispatch(resendEmail({ email }))}
        >
          click here
        </button>
      </p>
    </div>
  );
};

export default ResendVerify;
