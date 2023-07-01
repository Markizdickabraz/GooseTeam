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

// import { getTasks } from '../../exampleTask';
import { CalendarItem, Day, Event, Calendar } from './CalendarTable.styled';
import { selectTasks } from 'redux/tasks/selectors';
import { useSelector } from 'react-redux';

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
  const tasks = useSelector(selectTasks)

  useEffect(() => {
    
      const filteredTasks = tasks.filter(task => isSameMonth(new Date(task.date), new Date(currentDate)));
      setEvents(filteredTasks);
    
}, [currentDate, tasks])

  
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


  // color of events 

  const getEventColor = (priority) => {
    switch (priority) {
      case 'low':
        return { backgroundColor: "#CEEEFD", color: "#3E85F3" }; 
      case 'medium':
        return { backgroundColor: "#FCF0D4", color: "#F3B249" }; 
      case 'high':
        return { backgroundColor: "#FFD2DD", color: "#EA3D65" }; 
      default:
        return '#000000'; 
    }
  };

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
                <div>{events
                  .filter(event => new Date(event.date) >= startOfDay(day) && new Date(event.date) <= endOfDay(day))
                  .map(event => (
                    <Event key={event.id} style={getEventColor(event.priority)}>
                      <AbbreviatedText text={event.title} maxLength={4} />
                    </Event>

                  ))}</div>}
                {windowWidth >= 768 && windowWidth < 1440 && 
                <div>{events
                  .filter(event => new Date(event.date) >= startOfDay(day) && new Date(event.date) <= endOfDay(day))
                  .map(event => (
                    <Event key={event.id} style={getEventColor(event.priority)}>
                      <AbbreviatedText text={event.title} maxLength={5} />
                    </Event>
                  ))}</div>}
              
              {windowWidth >= 1440 &&
                <div>{events
                  .filter(event => new Date(event.date) >= startOfDay(day) && new Date(event.date) <= endOfDay(day))
                  .map(event => (
                    <Event key={event.id} style={getEventColor(event.priority)}>
                      <AbbreviatedText text={event.title} maxLength={10} />
                    </Event>
                  ))}</div>}
            </div>
          </CalendarItem>
        );
      })}
    </Calendar>
  );
};
