import { CalendarToolbar } from 'components/calendar/CalendarToolbar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  startOfMonth,
  endOfMonth,
  endOfWeek,
  eachDayOfInterval,
  startOfWeek,
  startOfToday,
  format,
  parse,
  add,
  sub,
} from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './calendar.css';

const CalendarPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/calendar/month/${format(startOfToday(), 'd-MMM-yyyy')}`);
  }, []);

  return (
    <div className="calendar">
      <CalendarToolbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CalendarPage;
