import React from 'react';
import style from './style.module.css';
import ErrorField from '../ErrorField';
import { Field, ErrorMessage } from 'formik';

const InputsForm = ({ isSingup }) => {
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
      <Field
        name="password"
        type="password"
        placeholder="&#9679; &nbsp;&#9679; &nbsp;&#9679; &nbsp;&#9679; &nbsp;&#9679; &nbsp;&#9679; &nbsp;&#9679;"
        className={style.fieldForm}
      />
      <ErrorMessage name="password" render={msg => <ErrorField msg={msg} />} />
    </div>
  );
};

export default InputsForm;
