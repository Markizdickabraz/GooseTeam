import React, { useEffect, useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'components/SmallCalendar/SmallCalendar';
import { getMonth, getYear } from 'date-fns';
import { formatDateToCustomFormat, getMonthNames, range } from './helpers/date';
import {
  ControlWrapper,
  DateInput,
  IconWrapper,
  Selects,
} from './styles/Calendar.styled';
import { Label, MessageWrapper, ErrorText } from './styles/CustomInput.styled';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { AiOutlineDown } from 'react-icons/ai';

export const DatePickerField = ({
  value,
  name,
  setFieldValue,
  setIsFormDirty,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [, meta] = useField(name);
  const error = meta.touched && meta.error;
  const isValid = meta.touched && !meta.error;

  useEffect(() => {
    const initialDate = new Date(value);
    setStartDate(initialDate);
    setFieldValue(name, formatDateToCustomFormat(initialDate));
  }, [name, setFieldValue, value]);

  const years = range(1950, getYear(new Date()) + 1, 1);
  const months = getMonthNames();

  const color = error ? 'red' : isValid ? 'green' : 'default-color';

  return (
    <DateInput color={color}>
      <Label htmlFor="birthday">Birthday</Label>

      <DatePicker
        dateFormat="dd/MM/yyyy"
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
            setFieldValue('birthday', formatDateToCustomFormat(date));
            setStartDate(date);
          } else {
            setFieldValue('birthday', '');
            setStartDate(null);
          }

          setIsFormDirty(true);
        }}
        onCalendarOpen={() => setIsCalendarOpen(true)}
        onCalendarClose={() => setIsCalendarOpen(false)}
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
