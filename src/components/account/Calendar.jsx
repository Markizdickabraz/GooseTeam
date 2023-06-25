import React, { useMemo } from 'react';
import { ErrorMessage, useField } from 'formik';
import DatePicker from 'react-datepicker';
import { DateInput, ErrorText, Label } from './Account.styled';
import 'components/SmallCalendar/SmallCalendar';

export const DatePickerField = ({ ...props }) => {
  const [field, meta, { setValue }] = useField(props);
  const error = meta.touched && meta.error;

  const newDate = useMemo(() => new Date(), []);

  React.useEffect(() => {
    if (!field.value) {
      setValue(newDate.toISOString().split('T')[0]);
    }
  }, [field.value, setValue, newDate]);

  return (
    <DateInput>
      <Label htmlFor="birthday" error={error}>
        Birthday
      </Label>

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

      <ErrorMessage name="birthday" component={ErrorText} />
    </DateInput>
  );
};
