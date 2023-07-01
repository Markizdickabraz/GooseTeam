import { CalendarToolbar } from '../../components/Сalendar/CalendarToolbar';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { startOfToday, format } from 'date-fns';
import { redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from './CalendarSection.styled';
import { useDispatch} from "react-redux";
import { getTasks } from 'redux/tasks/operations';


const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(startOfToday());
  const [periodType, setPeriodType] = useState('month');

  const dispatch = useDispatch();
  

  useEffect(() => {
    redirect(`/calendar/month/${format(startOfToday(), 'd-MMM-yyyy')}`);
    dispatch(getTasks());
  }, [dispatch]);


  return (
    
    <Container>
      <CalendarToolbar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        periodType={periodType}
        setPeriodType={setPeriodType}
      />
      <Suspense fallback="Loading...">
          <Outlet context={{ setPeriodType, setCurrentDate }} />  
      </Suspense>
      </Container>
      
  );
};

export default CalendarPage;
