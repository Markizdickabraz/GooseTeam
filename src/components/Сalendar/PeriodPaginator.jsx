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
    <>
      <p style={{ width: 120, marginRight: 20 }}>
        {periodType === 'month' ? currentDateMonth : currentDateDay}
      </p>
      <div className="period-paginator">
        <button type="button" onClick={handleClickPrev()}>{`<`}</button>
        <button type="button" onClick={handleClickNext()}>{`>`}</button>
      </div>
    </>
  );
};
