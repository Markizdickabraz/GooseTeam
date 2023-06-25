import { format, isSameDay } from 'date-fns';
import { parse, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns/esm';
import { useParams } from 'react-router-dom';

export const DayCalendarHead = () => {
  const { currentDay } = useParams();
  const parsedCurrentDay = parse(currentDay, 'd-MMM-yyyy', new Date());
  const days = eachDayOfInterval({
    start: startOfWeek(parsedCurrentDay, { weekStartsOn: 1 }),
    end: endOfWeek(parsedCurrentDay, { weekStartsOn: 1 }),
  });

  return (
    <ul className="day-calendar-head">
      {days.map((day, index) => {
        return (
          <li
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
