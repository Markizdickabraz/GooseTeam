import { DayCalendarHead } from 'components/Сalendar/DayCalendarHead';
import { TaskColumnsList } from 'components/Сalendar/TaskColumnsList';


const ChoosedDay = () => {
  return (
    <div>
      <DayCalendarHead />
      <TaskColumnsList />
    </div>
  );
};

export default ChoosedDay;
