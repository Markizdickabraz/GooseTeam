import { CurrentDate, Paginator, ButtonsTab, Arrow, ArrowButton } from "./PeriodPaginator.styled";
import sprite from '../../images/svg/sprite.svg';



export const PeriodPaginator = ({
  currentDateMonth,
  currentDateDay,
  nextMonth,
  prevMonth,
  nextDay,
  prevDay,
  periodType,
}) => {
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

  return (
    <Paginator>
      <CurrentDate>
        {periodType === 'month' ? currentDateMonth : currentDateDay}
      </CurrentDate>
      <ButtonsTab>
        <ArrowButton type="button" onClick={handleClickPrev()}>
        <Arrow width="16" height="16">
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
