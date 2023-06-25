import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  parse,
  format,
  isSameMonth,
  isSameDay,
} from 'date-fns';
import { redirect, useParams, useOutletContext } from 'react-router-dom';

export const CalendarTable = () => {
  const { setPeriodType, setCurrentDate } = useOutletContext();
  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'd-MMM-yyyy', new Date());
  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(parsedCurrentDate), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(parsedCurrentDate), { weekStartsOn: 1 }),
  });
  const handleClickRedirect = e => {
    if (
      !isSameMonth(
        parse(e.currentTarget.dataset.date, 'd-MMM-yyyy', new Date()),
        parsedCurrentDate
      )
    ) {
      return;
    }
    redirect(`../day/${e.currentTarget.dataset.date}`, {
      replace: true,
    });
    setPeriodType('day');
    setCurrentDate(
      parse(e.currentTarget.dataset.date, 'd-MMMM-yyyy', new Date())
    );
  };
  return (
    <ul className="calendar-table">
      {days.map((day, index) => {
        return (
          <li
            data-date={format(day, 'd-MMM-yyyy')}
            onClick={handleClickRedirect}
            key={format(day, 'd-MMM-yyyy')}
            className="calendar-table-item"
          >
            {isSameMonth(day, parsedCurrentDate) && (
              <p
                style={{
                  color: isSameDay(day, parsedCurrentDate) ? 'white' : 'black',
                  backgroundColor: isSameDay(day, parsedCurrentDate)
                    ? '#3E85F3'
                    : 'white',
                }}
                className="date-number"
              >
                {format(day, 'd')}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
};
