
export const PeriodTypeSelect = ({ setPeriodType }) => {
  return (
    <div className="calendar-type-change">
      <button
        type="button"
        value="month"
        onClick={() => setPeriodType('month')}
      >
        Month
      </button>
      <button type="button" value="day" onClick={() => setPeriodType('day')}>
        Day
      </button>
    </div>
  );
};
