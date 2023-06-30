import { PeriodButton, PeriodTab } from "./PeriodTypeSelect.styled";
import { useState } from "react";

export const PeriodTypeSelect = ({ setPeriodType }) => {
const [activeButton, setActiveButton] = useState('month');

  const handleButtonClick = (periodType) => {
    setActiveButton(periodType);
    setPeriodType(periodType);
  };
  

  return (
    <PeriodTab>
      <PeriodButton
        type="button"
        value="month"
        onClick={() => handleButtonClick('month')}
        style={{
          backgroundColor: activeButton === 'month' ? '#CAE8FF' : '',
        }}
      >
        Month
      </PeriodButton>
      <PeriodButton type="button" value="day" onClick={() => handleButtonClick('day')}
        style={{
          backgroundColor: activeButton === 'day' ? '#CAE8FF' : '',
        }}>
        Day
      </PeriodButton>
    </PeriodTab>
  );
};
