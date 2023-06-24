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
import { useParams } from 'react-router-dom';

export const CalendarTable = () => {
  const { currentDate } = useParams();
  const parsedCurrentDate = parse(currentDate, 'd-MMM-yyyy', new Date());
  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(parsedCurrentDate), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(parsedCurrentDate), { weekStartsOn: 1 }),
  });
  console.log(days);
  return (
    <ul className="calendar-table">
      {days.map((day, index) => {
        return (
          <li key={index} className="calendar-table-item">
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
