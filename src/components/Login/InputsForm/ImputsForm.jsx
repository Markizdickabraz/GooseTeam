import React from 'react';
import { FieldForm, LabelField } from './InputsForm.styled';
import ErrorField from '../ErrorField';
import { ErrorMessage } from 'formik';

const InputsForm = ({ isSignUp }) => {
  return (
    <div>
      {isSignUp && (
        <>
          <LabelField htmlFor="name">Name</LabelField>
          <FieldForm name="name" type="text" placeholder="Enter your name" />
          <ErrorMessage name="name" render={msg => <ErrorField msg={msg} />} />
        </>
      )}
      <LabelField htmlFor="email">Email</LabelField>
      <FieldForm name="email" type="email" placeholder="nadiia@gmail.com" />
      <ErrorMessage name="email" render={msg => <ErrorField msg={msg} />} />
      <LabelField htmlFor="password">Password</LabelField>
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
