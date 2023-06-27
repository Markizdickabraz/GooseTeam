import React, { useEffect, useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'components/SmallCalendar/SmallCalendar';
import { format, getMonth, getYear } from 'date-fns';
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

export const DatePickerField = ({ name, setFieldValue, setIsFormDirty }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [, meta] = useField(name);
  const error = meta.touched && meta.error;
  const isValid = meta.touched && !meta.error;

  useEffect(() => {
    const initialDate = new Date();
    setStartDate(initialDate);
    console.log(initialDate);
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
        // dateFormat="MM/dd/yyyy"
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
            const formattedDate = format(date, 'MM/dd/yyyy'); // Форматирование даты
            setFieldValue('birthday', formattedDate);
            setStartDate(date);
          } else {
            setFieldValue('birthday', '');
            setStartDate(null);
          }

          setIsFormDirty(true);
        }}
        onCalendarOpen={() => setIsCalendarOpen(true)} // Установка состояния открытия календаря
        onCalendarClose={() => setIsCalendarOpen(false)} //
        onChangeRaw={handleInputChange}
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
