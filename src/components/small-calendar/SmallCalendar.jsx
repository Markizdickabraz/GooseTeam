import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SmallCalendar.css';

const SmallCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<CustomInput />}
      dateFormat="d MMM yyyy"
      calendarStartDay={1}
      formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
      fixedHeight
    />
  );
};

export default SmallCalendar;
