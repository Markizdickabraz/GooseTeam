import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterDate } from 'redux/filterdate/filterdate-selector';
import { setFilterDate } from 'redux/filterdate/filterdate-slice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PeriodPaginator.css';
import {
  PaginatorBtnBox,
  ArrowBtn,
  Arrow,
  ChartLegendBox,
  ChartLegendList,
  ChartLegendItem,
  ChartLegendText,
  PaginatorBox,
} from './PeriodPaginator.styled';
import sprite from '../../images/svg/sprite.svg';

export const PeriodPaginator = () => {
  const filterdate = useSelector(selectFilterDate);
  const dispatch = useDispatch();

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const handleChange = date => {
    dispatch(setFilterDate(date[Symbol.toPrimitive]('number')));
  };

  const addOneDay = (date = new Date()) => {
    date.setDate(date.getDate() + 1);
    return date;
  };
  const previousOneDay = (date = new Date()) => {
    date.setDate(date.getDate() - 1);
    return date;
  };

  const nextDate = () => {
    dispatch(
      setFilterDate(
        addOneDay(new Date(filterdate))[Symbol.toPrimitive]('number')
      )
    );
  };
  const previousDate = () => {
    dispatch(
      setFilterDate(
        previousOneDay(new Date(filterdate))[Symbol.toPrimitive]('number')
      )
    );
  };

  return (
    <PaginatorBox>
      <DatePicker
        selected={filterdate}
        onChange={handleChange}
        customInput={<CustomInput />}
        dateFormat="d MMMM yyyy"
        calendarStartDay={1}
        formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
        fixedHeight
      />
      <PaginatorBtnBox>
        <ArrowBtn type="button" onClick={() => previousDate()}>
          <Arrow width="16" height="16">
            <use href={`${sprite}#chevron-left`}></use>
          </Arrow>
        </ArrowBtn>
        <ArrowBtn type="button" onClick={() => nextDate()}>
          <Arrow width="16" height="16">
            <use href={`${sprite}#chevron-right`}></use>
          </Arrow>
        </ArrowBtn>
      </PaginatorBtnBox>
      <ChartLegendBox>
        <ChartLegendList>
          <ChartLegendItem>
            <ChartLegendText>By Day</ChartLegendText>
          </ChartLegendItem>
          <ChartLegendItem>
            <ChartLegendText className="other__color">By Month</ChartLegendText>
          </ChartLegendItem>
        </ChartLegendList>
      </ChartLegendBox>
    </PaginatorBox>
  );
};

export default PeriodPaginator;
