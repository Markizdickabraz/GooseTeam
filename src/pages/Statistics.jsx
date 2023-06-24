import React from 'react';
import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import StatisticsChart from '../StatisticsChart/StatisticsChart';
import './StatisticsPage.css';

const StatisticsPage = () => {
  return (
    <div className="statistic__container">
      <PeriodPaginator />
      <StatisticsChart />
    </div>
  );
};

export default StatisticsPage;
