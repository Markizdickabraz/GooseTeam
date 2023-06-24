import React from 'react';
import PeriodPaginator from '../components/PeriodPaginator/PeriodPaginator';
import StatisticsChart from '../components/StatisticsChart/StatisticsChart';
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
