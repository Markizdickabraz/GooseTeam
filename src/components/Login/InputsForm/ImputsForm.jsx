import React from 'react';
import { FieldForm, LableField } from './ImputsForm.styled';
import ErrorField from '../ErrorField';
import { ErrorMessage } from 'formik';

const InputsForm = ({ isSingup }) => {
  return (
    <div>
      {isSingup && (
        <>
          <LableField htmlFor="name">Name</LableField>
          <FieldForm name="name" type="text" placeholder="Enter your name" />
          <ErrorMessage name="name" render={msg => <ErrorField msg={msg} />} />
        </>
      )}
      <LableField htmlFor="email">Email</LableField>
      <FieldForm name="email" type="email" placeholder="nadiia@gmail.com" />
      <ErrorMessage name="email" render={msg => <ErrorField msg={msg} />} />
      <LableField htmlFor="password">Password</LableField>
      <FieldForm
        name="password"
        type="password"
        placeholder="&#9679; &nbsp;&#9679; &nbsp;&#9679; &nbsp;&#9679; &nbsp;&#9679; &nbsp;&#9679; &nbsp;&#9679;"
      />
      <ErrorMessage name="password" render={msg => <ErrorField msg={msg} />} />
    </div>
  );
};

export default InputsForm;
