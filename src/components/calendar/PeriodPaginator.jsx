import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';

export const PeriodPaginator = ({
  currentDateMonth,
  currentDateDay,
  currentDate,
  nextMonth,
  prevMonth,
  nextDay,
  prevDay,
  periodType,
}) => {
  const handleClickNext = () => {
    if (periodType === 'month') {
      return nextMonth;
    }
    return nextDay;
  };
  const handleClickPrev = () => {
    if (periodType === 'month') {
      return prevMonth;
    }
    return prevDay;
  };

  return (
    <>
      <p style={{ width: 120, marginRight: 20 }}>
        {periodType === 'month' ? currentDateMonth : currentDateDay}
      </p>
      <div className="calendar-paginator">
        <Link
          to={`/calendar/${periodType}/${format(currentDate, 'd-MMM-yyyy')}`}
          onClick={handleClickPrev()}
        >{`<`}</Link>
        <Link
          to={`/calendar/${periodType}/${format(currentDate, 'd-MMM-yyyy')}`}
          onClick={handleClickNext()}
        >{`>`}</Link>
      </div>
    </>
  );
};
