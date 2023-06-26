import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'components/SmallCalendar/SmallCalendar';
import { getMonth, getYear } from 'date-fns';
import { ControlWrapper, DateInput, Selects } from './styles/Calendar.styled';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { Label, MessageWrapper, ErrorText } from './styles/CustomInput.styled';

function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

export const DatePickerField = ({ name, setFieldValue }) => {
  const [startDate, setStartDate] = useState(new Date());

  const [, meta] = useField(name);
  const error = meta.touched && meta.error;
  const isValid = meta.touched && !meta.error;

  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const color = error ? 'red' : isValid ? 'green' : 'default-color';

  const handleInputChange = event => {
    const inputDate = event.target.value;
    if (inputDate) {
      const formatted = inputDate
        .replace(/\D/g, '')
        .slice(0, 8)
        .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');

      if (formatted.length === 10) {
        const month = parseInt(formatted.slice(0, 2), 10) - 1;
        const day = parseInt(formatted.slice(3, 5), 10);
        const year = parseInt(formatted.slice(6, 10), 10);
        const newDate = new Date(year, month, day);
        setStartDate(newDate);
        setFieldValue(name, newDate.toISOString().split('T')[0]);
      } else {
        setFieldValue(name, '');
      }
    }
  };

  return (
    <DateInput color={color}>
      <Label htmlFor="birthday">Birthday</Label>

      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <ControlWrapper
            style={{
              margin: '10px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <button
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <MdNavigateBefore />
            </button>

            <Selects>
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Selects>

            <button
              type="button"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
            >
              <MdNavigateNext />
            </button>
          </ControlWrapper>
        )}
        selected={startDate}
        onChange={date => {
          if (date) {
            setFieldValue('birthday', date.toISOString().split('T')[0]);
            setStartDate(date);
          } else {
            setFieldValue('birthday', '');
            setStartDate(null);
          }
        }}
        onChangeRaw={handleInputChange}
      />

      <MessageWrapper>
        <ErrorMessage name={name} component={ErrorText} />
      </MessageWrapper>
    </DateInput>
  );
};
