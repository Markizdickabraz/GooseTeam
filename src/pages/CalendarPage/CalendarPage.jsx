import { CalendarToolbar } from 'components/Сalendar/CalendarToolbar';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { startOfToday, format } from 'date-fns';
import { redirect } from 'react-router-dom';
import { useEffect } from 'react';
import './calendar.css';

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(startOfToday());
  const [periodType, setPeriodType] = useState('month');

  useEffect(() => {
    redirect(`/calendar/month/${format(startOfToday(), 'd-MMM-yyyy')}`);
  }, []);

  return (
    <div className="calendar">
      <CalendarToolbar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        periodType={periodType}
        setPeriodType={setPeriodType}
      />
      <Suspense fallback="Loading...">
        <Outlet context={{ setPeriodType, setCurrentDate }} />
      </Suspense>
    </div>
  );
};

export default CalendarPage;
