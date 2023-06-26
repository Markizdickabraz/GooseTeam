import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import DatePicker from 'react-datepicker';
import { DateInput, ErrorText, Label, MessageWrapper } from './Account.styled';
import 'components/SmallCalendar/SmallCalendar';

export const DatePickerField = ({ name, setFieldValue }) => {
  const [startDate, setStartDate] = useState(new Date());

  const [, meta] = useField(name);
  const error = meta.touched && meta.error;
  const isValid = meta.touched && !meta.error;


  return (
    <DateInput>
      <Label htmlFor="birthday" error={error} isValid={isValid}>
        Birthday
      </Label>

      <DatePicker
        selected={startDate}
        onChange={date => {
          setFieldValue('birthday', date.toISOString().split('T')[0]);
          setStartDate(date);
        }}
      />

      <MessageWrapper>
        <ErrorMessage name={name} component={ErrorText} />
      </MessageWrapper>
    </DateInput>
  );
};
