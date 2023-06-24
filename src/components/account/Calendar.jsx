import React, { useMemo } from 'react';
import { useField } from 'formik';
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
      <label htmlFor="birthday" style={{ marginBottom: '8px' }}>
        Birthday
      </label>

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
    </DateInput>
  );
};
