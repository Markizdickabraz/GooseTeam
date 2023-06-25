import { CalendarTable } from 'components/Сalendar/CalendarTable';
import { MonthCalendarHead } from 'components/Сalendar/MonthCalendarHead';
import './calendar.css';

const ChoosedMonth = () => {
  return (
    <div>
      <MonthCalendarHead />
      <CalendarTable />
    </div>
  );
};

export default ChoosedMonth;