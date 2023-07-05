import { format, isSameDay } from 'date-fns';
import { parse, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns/esm';
import { useEffect, useState } from 'react';
import { useParams, redirect, useOutletContext } from 'react-router-dom';
import {
  ListOfDays,
  ListOfDaysItem,
  Week,
  Day,
} from './DayCalendarHead.styled';

export const DayCalendarHead = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <ListOfDays>
      {days.map((day, index) => {
        return (
          <ListOfDaysItem
            data-date={format(day, 'd-MMM-yyyy')}
            onClick={handleClickRedirect}
            key={format(day, 'd-MMM-yyyy')}
          >
            <Week>
              {windowWidth < 768 ? format(day, 'EEEEE') : format(day, 'EEE')}
            </Week>
            <Day isSameDay={isSameDay(day, parsedCurrentDay)}>
              {format(day, 'd')}
            </Day>
          </ListOfDaysItem>
        );
      })}
    </ListOfDays>
  );
};
