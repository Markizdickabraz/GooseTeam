import { DayCalendarHead } from 'components/calendar/DayCalendarHead';
import { TaskColumnsList } from 'components/calendar/TaskColumnsList';
import './calendar.css';

const ChoosedDay = () => {
  return (
    <div>
      <DayCalendarHead />
      <TaskColumnsList />
    </div>
  );
};

export default ChoosedDay;
