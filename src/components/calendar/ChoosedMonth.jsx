import { MonthCalendarHead } from "./MonthCalendarHead";
import { CalendarTable } from "./CalendarTable";

export const ChoosedMonth = ({ days, firstDayCurrentMonth, selectedDay }) => {
  return (
    <div className="calendar-body">
      <MonthCalendarHead />
      <CalendarTable
        days={days}
        selectedDay={selectedDay}
        firstDayCurrentMonth={firstDayCurrentMonth}
      />
    </div>
  );
};
