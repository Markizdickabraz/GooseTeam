import { PeriodButton, PeriodTab } from "./PeriodTypeSelect.styled";

export const PeriodTypeSelect = ({ setPeriodType }) => {
  return (
    <PeriodTab>
      <PeriodButton
        type="button"
        value="month"
        onClick={() => setPeriodType('month')}
      >
        Month
      </PeriodButton>
      <PeriodButton type="button" value="day" onClick={() => setPeriodType('day')}>
        Day
      </PeriodButton>
    </PeriodTab>
  );
};
