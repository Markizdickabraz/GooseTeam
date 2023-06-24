import { CalendarTable } from 'components/calendar/CalendarTable';
import { MonthCalendarHead } from 'components/calendar/MonthCalendarHead';
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
