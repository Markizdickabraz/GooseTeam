import { PeriodButton, PeriodTab } from "./PeriodTypeSelect.styled";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PeriodTypeSelect = ({ setPeriodType}) => {
const [activeButtonLocal, setActiveButtonLocal] = useState('month');
  const location = useLocation();

  useEffect(() => {
     const path = location.pathname;
    if (path.includes("month")) {
      setActiveButtonLocal("month");
    } else if (path.includes("day")) {
      setActiveButtonLocal("day");
    }
  }, [location]);

  const handleButtonClick = (periodType) => {
    setActiveButtonLocal(periodType);
    setPeriodType(periodType);
  };
  

  return (
    <PeriodTab>
      <PeriodButton
        type="button"
        value="month"
        onClick={() => handleButtonClick('month')}
        style={{
          backgroundColor: activeButtonLocal === 'month' ? '#CAE8FF' : '',
        }}
      >
        Month
      </PeriodButton>
      <PeriodButton type="button" value="day" onClick={() => handleButtonClick('day')}
        style={{
          backgroundColor: activeButtonLocal === 'day' ? '#CAE8FF' : '',
        }}>
        Day
      </PeriodButton>
    </PeriodTab>
  );
};
