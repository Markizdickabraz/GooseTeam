import React, { useState } from 'react';
import style from './style.module.css';
import ErrorField from '../ErrorField';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Field, ErrorMessage } from 'formik';

const InputsForm = ({ isSingup }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      {isSingup && (
        <>
          <label htmlFor="name" className={style.lableField}>
            Name
          </label>
          <Field
            name="name"
            type="text"
            placeholder="Enter your name"
            className={style.fieldForm}
          />
          <ErrorMessage name="name" render={msg => <ErrorField msg={msg} />} />
        </>
      )}
      <label htmlFor="email" className={style.lableField}>
        Email
      </label>
      <Field
        name="email"
        type="email"
        placeholder="nadiia@gmail.com"
        className={style.fieldForm}
      />
      <ErrorMessage name="email" render={msg => <ErrorField msg={msg} />} />
      <label htmlFor="password" className={style.lableField}>
        Password
      </label>
      <div className={style.passwordField}>
        <div>
          <Field
            name="password"
            type={isShow ? 'text' : 'password'}
            placeholder="&#9679; &nbsp;&#9679; &nbsp;&#9679; &nbsp;&#9679; &nbsp;&#9679; &nbsp;&#9679; &nbsp;&#9679;"
            className={style.fieldForm}
          />
          <ErrorMessage
            name="password"
            render={msg => <ErrorField msg={msg} />}
          />
        </div>
        <span
          onClick={() => {
            setIsShow(!isShow);
          }}
          className={style.showPasswordBtn}
        >
          {isShow ? <Icon icon={eyeOff} /> : <Icon icon={eye} />}
        </span>
      </div>
    </div>
  );
};

export default InputsForm;
