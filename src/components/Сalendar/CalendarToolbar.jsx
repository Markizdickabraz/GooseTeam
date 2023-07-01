import { format, add, sub } from 'date-fns';
import { PeriodPaginator } from './PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Toolbar } from './CalendarToolbar.styled';

export const CalendarToolbar = ({
  periodType,
  setPeriodType,
  currentDate,
  setCurrentDate
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (periodType === 'month') {
      return navigate(`${periodType}/${format(currentDate, 'd-MMM-yyyy')}`);
    }
    navigate(`${periodType}/${format(currentDate, 'd-MMM-yyyy')}`);
  }, [periodType, currentDate, navigate]);

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
    <Toolbar>
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
    </Toolbar>
  );
};
