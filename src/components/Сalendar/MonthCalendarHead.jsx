import { DayName, DayNames } from "./MonthCalendarHead.styled";
import  { useEffect, useState } from 'react';

export const MonthCalendarHead = () => {

const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);


  return <> {windowWidth < 768 ? <DayNames>
    <DayName>M</DayName>
    <DayName>T</DayName>
    <DayName>W</DayName>
    <DayName>T</DayName>
    <DayName>F</DayName>
    <DayName style={{ color: "#3E85F3" }}>S</DayName>
    <DayName style={{ color: "#3E85F3" }}>S</DayName>
  </DayNames>
    : <DayNames>
      <DayName>MON</DayName>
      <DayName>TUE</DayName>
      <DayName>WED</DayName>
      <DayName>THU</DayName>
      <DayName>FRI</DayName>
      <DayName style={{ color: "#3E85F3" }}>SAT</DayName>
      <DayName style={{ color: "#3E85F3" }}>SUN</DayName>
    </DayNames>}</>
  ;
};
