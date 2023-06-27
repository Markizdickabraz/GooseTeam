import React, { useEffect, useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'components/SmallCalendar/SmallCalendar';
import { getMonth, getYear } from 'date-fns';
import {
  ControlWrapper,
  DateInput,
  IconWrapper,
  Selects,
} from './styles/Calendar.styled';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { Label, MessageWrapper, ErrorText } from './styles/CustomInput.styled';
import { AiOutlineDown } from 'react-icons/ai';

function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

export const DatePickerField = ({ name, setFieldValue }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [, meta] = useField(name);
  const error = meta.touched && meta.error;
  const isValid = meta.touched && !meta.error;

  useEffect(() => {
    const initialDate = new Date();
    setStartDate(initialDate);
    setFieldValue(name, initialDate.toISOString().split('T')[0]);
  }, [name, setFieldValue]);

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
        onCalendarOpen={() => setIsCalendarOpen(true)} // Установка состояния открытия календаря
        onCalendarClose={() => setIsCalendarOpen(false)} //
      />

      <MessageWrapper>
        <ErrorMessage name={name} component={ErrorText} />
      </MessageWrapper>

      <IconWrapper isCalendarOpen={isCalendarOpen}>
        <AiOutlineDown color={color} />
      </IconWrapper>
    </DateInput>
  );
};
