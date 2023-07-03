import React from 'react';
import PeriodPaginator from '../components/PeriodPaginator/PeriodPaginator';
import StatisticsChart from '../components/StatisticsChart/StatisticsChart';
import { StatisticContainer } from './Statistics.styled';

const StatisticsPage = () => {
  return (
    <StatisticContainer>
      <PeriodPaginator />
      <StatisticsChart />
    </StatisticContainer>
  );
};

export default StatisticsPage;
