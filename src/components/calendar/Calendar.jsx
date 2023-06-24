import { CalendarToolbar } from "./CalendarToolbar";
import { ChoosedDay } from "./ChoosedDay";
import { ChoosedMonth } from "./ChoosedMonth";
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
} from "date-fns";
import { useState } from "react";
import "./calendar.css";

export const Calendar = () => {
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(format(today, "d MMM yyyy"));
  const [selectedDay, setSelectedDay] = useState(format(today, "d MMMM yyyy"));
  const [period, setPeriod] = useState("months");
  const firstDayCurrentMonth = parse(currentMonth, "d MMM yyyy", new Date());

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  });

  const nextMonth = () => {
    console.log(firstDayCurrentMonth);
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "d MMM yyyy"));
  };
  const prevMonth = () => {
    console.log(firstDayCurrentMonth);
    const firstDayPrevMonth = sub(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayPrevMonth, "d MMM yyyy"));
  };
  const nextDay = () => {
    const nextDayFromSelected = add(
      parse(selectedDay, "d MMMM yyyy", new Date()),
      { days: 1 }
    );
    setSelectedDay(format(nextDayFromSelected, "d MMMM yyyy"));
  };
  const prevDay = () => {
    const prevDayFromSelected = sub(
      parse(selectedDay, "d MMMM yyyy", new Date()),
      { days: 1 }
    );
    setSelectedDay(format(prevDayFromSelected, "d MMMM yyyy"));
  };

  return (
    <div className="calendar">
      <CalendarToolbar
        nextMonth={nextMonth}
        prevMonth={prevMonth}
        nextDay={nextDay}
        prevDay={prevDay}
        period={period}
        setPeriod={setPeriod}
        currentMonth={format(firstDayCurrentMonth, "MMMM yyyy")}
        selectedDay={selectedDay}
      />
      <ChoosedMonth
        days={days}
        selectedDay={parse(selectedDay, "d MMMM yyyy", new Date())}
        firstDayCurrentMonth={firstDayCurrentMonth}
      />
      {/* <ChoosedDay /> */}
    </div>
  );
};
