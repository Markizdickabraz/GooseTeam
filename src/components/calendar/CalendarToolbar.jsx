import { useState } from 'react';
import { startOfToday, format, add, sub } from 'date-fns';
import { PeriodPaginator } from './PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const CalendarToolbar = () => {
  const navigate = useNavigate();
  const [periodType, setPeriodType] = useState('month');
  const [currentDate, setCurrentDate] = useState(startOfToday());

  useEffect(() => {
    if (periodType === 'month') {
      return navigate(`${periodType}/${format(currentDate, 'd-MMM-yyyy')}`);
    }
    navigate(`${periodType}/${format(currentDate, 'd-MMM-yyyy')}`);
  }, [periodType, currentDate]);

  const nextMonth = () => {
    const currentDateNextMonth = add(currentDate, { months: 1 });
    setCurrentDate(currentDateNextMonth);
  };
  const prevMonth = () => {
    const currentDatePrevMonth = sub(currentDate, { months: 1 });
    setCurrentDate(currentDatePrevMonth);
  };
  const nextDay = () => {
    const currentDateNextDay = add(currentDate, { days: 1 });
    setCurrentDate(currentDateNextDay);
  };
  const prevDay = () => {
    const currentDatePrevDay = sub(currentDate, { days: 1 });
    setCurrentDate(currentDatePrevDay);
  };
  return (
    <div className="calendar-toolbar">
      <PeriodPaginator
        currentDateMonth={format(currentDate, 'MMMM yyyy')}
        currentDateDay={format(currentDate, 'd MMM yyyy')}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
        nextDay={nextDay}
        prevDay={prevDay}
        periodType={periodType}
      />
      <PeriodTypeSelect setPeriodType={setPeriodType} />
    </div>
  );
};
