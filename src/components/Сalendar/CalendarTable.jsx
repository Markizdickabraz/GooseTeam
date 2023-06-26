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
  startOfDay,
  endOfDay
} from 'date-fns';
import { redirect, useParams, useOutletContext } from 'react-router-dom';
import { useState, useEffect } from "react";

import { getTasks } from '../../exampleTask';
import { Day, Event } from './CalendarTable.styled';

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

  // with file for example
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const tasks = getTasks();
    const filteredTasks = tasks.filter(task => isSameMonth(new Date(task.date), new Date(currentDate)));
    setEvents(filteredTasks);
}, [currentDate])


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
              <Day
                style={{
                  color: isSameDay(day, parsedCurrentDate) ? 'white' : 'black',
                  backgroundColor: isSameDay(day, parsedCurrentDate)
                    ? '#3E85F3'
                    : 'white',
                }}
                className="date-number"
              >
                {format(day, 'd')}
              </Day>
            )}

            
            <div>
              <Event>{events
                .filter(event => new Date(event.date) >= startOfDay(day) && new Date(event.date) <= endOfDay(day))
                .map(event => (
                  <div key={event.id}>
                    {event.title}
                  </div>

                ))}</Event>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
