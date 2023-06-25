import React, { useMemo, useState } from 'react';
import { ErrorMessage, Field, useField } from 'formik';
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
          console.log(date.toISOString().split('T')[0]);
          setFieldValue('birthday', date.toISOString().split('T')[0]);
          setStartDate(date);
        }}
      />

      <ErrorMessage name="birthday" component={ErrorText} />
    </DateInput>
  );

  // const [field, meta, { setValue }] = useField(props);
  // const error = meta.touched && meta.error;

  // const newDate = useMemo(() => new Date(), []);

  // React.useEffect(() => {
  //   if (!field.value) {
  //     setValue(newDate.toISOString().split('T')[0]);
  //   }
  // }, [field.value, setValue, newDate]);

  // return (
  //   <DateInput>
  //     <Label htmlFor="birthday" error={error}>
  //       Birthday
  //     </Label>

  //     <DatePicker
  //       {...field}
  //       {...props}
  //       selected={(field.value && new Date(field.value)) || newDate}
  //       onChange={val => {
  //         if (val instanceof Date && !isNaN(val)) {
  //           const data = val.toISOString().split('T')[0];
  //           setValue(data);
  //         }
  //       }}
  //       dateFormat="dd-MM-yyyy"
  //     />

  //     <ErrorMessage name="birthday" component={ErrorText} />
  //   </DateInput>
  // );
};
