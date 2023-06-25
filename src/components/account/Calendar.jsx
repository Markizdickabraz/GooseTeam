import React, { useMemo } from 'react';
import { ErrorMessage, useField } from 'formik';
import DatePicker from 'react-datepicker';
import { DateInput } from './Account.styled';
import 'components/SmallCalendar/SmallCalendar';

export const DatePickerField = ({ ...props }) => {
  const [field, , { setValue }] = useField(props);
  const newDate = useMemo(() => new Date(), []);

  React.useEffect(() => {
    if (!field.value) {
      setValue(newDate.toISOString().split('T')[0]);
    }
  }, [field.value, setValue, newDate]);

  return (
    <DateInput>
      <label htmlFor="birthday">Birthday</label>

      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || newDate}
        onChange={val => {
          const data = val.toISOString().split('T')[0];
          setValue(data);
        }}
        dateFormat="DD-MM-YYYY"
      />

      <ErrorMessage name="birthday" component="div" />
    </DateInput>
  );
};
