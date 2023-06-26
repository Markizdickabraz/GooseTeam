import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import DatePicker from 'react-datepicker';
import { DateInput, ErrorText, Label, MessageWrapper } from './Account.styled';
import 'components/SmallCalendar/SmallCalendar';
import { getMonth, getYear } from 'date-fns';
import { ControlWrapper, Selects } from './styles/Calendar.styled';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

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

  return (
    <DateInput>
      <Label htmlFor="birthday" error={error} isValid={isValid}>
        Birthday
      </Label>

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
