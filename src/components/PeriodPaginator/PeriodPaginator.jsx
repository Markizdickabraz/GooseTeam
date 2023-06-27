import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterDate } from 'redux/filterdate/filterdate-selector';
import { setFilterDate } from 'redux/filterdate/filterdate-slice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PeriodPaginator.css';
import Icons from '../../images/svg/sprite.svg';

const PeriodPaginator = () => {
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
    console.log('+1');
    dispatch(
      setFilterDate(
        addOneDay(new Date(filterdate))[Symbol.toPrimitive]('number')
      )
    );
  };
  const previousDate = () => {
    console.log('-1');
    dispatch(
      setFilterDate(
        previousOneDay(new Date(filterdate))[Symbol.toPrimitive]('number')
      )
    );
  };

  return (
    <div className="paginator__box">
      <DatePicker
        selected={filterdate}
        onChange={handleChange}
        customInput={<CustomInput />}
        dateFormat="d MMM yyyy"
        calendarStartDay={1}
        formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
        fixedHeight
      />
      <div className="paginator__btn--box">
        <button className="arrow__btn">
          <svg
            viewBox="0 0 18 18"
            className="arrow"
            onClick={() => previousDate()}
          >
            <use xlinkHref={`${Icons}#chevron-left`} />
          </svg>
        </button>
        <button className="arrow__btn" onClick={() => nextDate()}>
          <svg viewBox="0 0 18 18" className="arrow">
            <use xlinkHref={`${Icons}#chevron-right`} />
          </svg>
        </button>
      </div>
      <div className="chart__legend--box">
        <ul className="chart__legend--list">
          <li className="chart__legend--item">
            <p className="chart__legend--text">By Day</p>
          </li>
          <li className="chart__legend--item">
            <p className="chart__legend--text other__color">By Month</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PeriodPaginator;
