import { CurrentDate, Paginator, ButtonsTab, Arrow, ArrowButton } from "./PeriodPaginator.styled";
import sprite from '../../images/svg/sprite.svg';
// import { useState } from "react";

export const PeriodPaginator = ({
  currentDateMonth,
  currentDateDay,
  nextMonth,
  prevMonth,
  nextDay,
  prevDay,
  periodType,
}) => {

 const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const firstDayOfPreviousMonth = new Date(currentDate.getFullYear(), currentMonth - 1, 1);

  const handleClickNext = () => {
    
    if (periodType === 'month') {
      return nextMonth;
    }
    return nextDay;
  };
  const handleClickPrev = () => {

    if (periodType === 'month') {
      return prevMonth;
    }
    return prevDay;
  };


const isBackButtonDisabled = () => {
if (periodType === 'month') {
      const selectedMonth = new Date(currentDateMonth).getMonth();
      return selectedMonth < currentMonth;
    }
    if (periodType === 'day') {
    const selectedDate = new Date(currentDateDay);
      return selectedDate <= firstDayOfPreviousMonth;
    }
    return false;
  };
 
  const disabledButton = isBackButtonDisabled();

  return (
    <Paginator>
      <CurrentDate>
        {periodType === 'month' ? currentDateMonth : currentDateDay}
      </CurrentDate>
      <ButtonsTab>
        <ArrowButton type="button" onClick={handleClickPrev()} disabled={isBackButtonDisabled()}>
        <Arrow width="16" height="16" style={{ stroke: disabledButton ? 'rgba(220, 227, 229, 1)' : '' }}>
            <use href={`${sprite}#chevron-left`}></use>
        </Arrow>
        </ArrowButton>
        <ArrowButton type="button" onClick={handleClickNext()}>
          <Arrow width="16" height="16">
            <use href={`${sprite}#chevron-right`}></use>
        </Arrow>
        </ArrowButton>
      </ButtonsTab>
    </Paginator>
  );
};
