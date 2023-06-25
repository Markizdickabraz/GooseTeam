import { format, isSameDay } from 'date-fns';
import { parse, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns/esm';
import { useParams, redirect, useOutletContext } from 'react-router-dom';

export const DayCalendarHead = () => {
  const { currentDay } = useParams();
  const { setCurrentDate } = useOutletContext();
  const parsedCurrentDay = parse(currentDay, 'd-MMM-yyyy', new Date());
  const days = eachDayOfInterval({
    start: startOfWeek(parsedCurrentDay, { weekStartsOn: 1 }),
    end: endOfWeek(parsedCurrentDay, { weekStartsOn: 1 }),
  });
  const handleClickRedirect = e => {
    redirect(`../day/${e.currentTarget.dataset.date}`, {
      replace: true,
    });
    setCurrentDate(
      parse(e.currentTarget.dataset.date, 'd-MMMM-yyyy', new Date())
    );
  };
  return (
    <ul className="day-calendar-head">
      {days.map((day, index) => {
        return (
          <li
            data-date={format(day, 'd-MMM-yyyy')}
            onClick={handleClickRedirect}
            key={format(day, 'd-MMM-yyyy')}
            className="day-calendar-head-item"
          >
            <p className="head-week">{format(day, 'EEE')}</p>
            <p
              style={{
                color: isSameDay(day, parsedCurrentDay) ? 'white' : 'black',
                backgroundColor: isSameDay(day, parsedCurrentDay)
                  ? '#3E85F3'
                  : 'white',
              }}
              className="head-day"
            >
              {format(day, 'd')}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
