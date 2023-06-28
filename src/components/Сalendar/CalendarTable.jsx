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
import { CalendarItem, Day, Event, Calendar } from './CalendarTable.styled';


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

  
  // size of viewport
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  // short format of text 
  const AbbreviatedText = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  const abbreviatedText = text.substring(0, maxLength) + '...';

  return <span title={text}>{abbreviatedText}</span>;
}


  return (
    <Calendar>
      {days.map((day, index) => {
        return (
          <CalendarItem
            data-date={format(day, 'd-MMM-yyyy')}
            onClick={handleClickRedirect}
            key={format(day, 'd-MMM-yyyy')}
            className="calendar-table-item"
          >
            {isSameMonth(day, parsedCurrentDate) && (
              <Day
                style={{
                  color: isSameDay(day, parsedCurrentDate) ? '#FFFFFF' : '#343434',
                  backgroundColor: isSameDay(day, parsedCurrentDate)
                    ? '#3E85F3'
                    : '#FFFFFF',
                }}
              >
                {format(day, 'd')}
              </Day>
            )}

            
            <div>
              {windowWidth < 768 &&
                <Event>{events
                  .filter(event => new Date(event.date) >= startOfDay(day) && new Date(event.date) <= endOfDay(day))
                  .map(event => (
                    <div key={event.id}>
                      <AbbreviatedText text={event.title} maxLength={4} />
                    </div>

                  ))}</Event>}
                {windowWidth >= 768 && windowWidth < 1440 && 
                <Event>{events
                  .filter(event => new Date(event.date) >= startOfDay(day) && new Date(event.date) <= endOfDay(day))
                  .map(event => (
                    <div key={event.id}>
                      <AbbreviatedText text={event.title} maxLength={5} />
                    </div>
                  ))}</Event>}
              
              {windowWidth >= 1440 &&
                <Event>{events
                  .filter(event => new Date(event.date) >= startOfDay(day) && new Date(event.date) <= endOfDay(day))
                  .map(event => (
                    <div key={event.id}>
                      <AbbreviatedText text={event.title} maxLength={10} />
                    </div>
                  ))}</Event>}
            </div>
          </CalendarItem>
        );
      })}
    </Calendar>
  );
};
