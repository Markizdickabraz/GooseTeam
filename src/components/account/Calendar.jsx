import React, { useState } from 'react';
import { ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import { DateInput, ErrorText, Label } from './Account.styled';
import 'components/SmallCalendar/SmallCalendar';

export const DatePickerField = ({ setFieldValue }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DateInput>
      <Label htmlFor="birthday">Birthday</Label>

      <DatePicker
        selected={startDate}
        onChange={date => {
          setFieldValue('birthday', date.toISOString().split('T')[0]);
          setStartDate(date);
        }}
      />

      <ErrorMessage name="birthday" component={ErrorText} />
    </DateInput>
  );
};
