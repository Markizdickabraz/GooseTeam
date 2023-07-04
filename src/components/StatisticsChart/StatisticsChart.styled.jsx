import styled from 'styled-components';
import { DEVICE_SIZE } from 'styles/deviceWidth';
import { themeColors } from 'styles/variables';

const media = {
  mobile: `@media screen and (min-width: ${DEVICE_SIZE.mobile})`,
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const StatisticsContainer = styled.div`
  border: solid ${themeColors.statisticsBorder};
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
  padding: 40px 14px;
  ${media.mobile} {
    width: 307px;
    height: 413px;
  }
  ${media.tablet} {
    width: 640px;
    height: 424px;
    border-radius: 29px;
    padding: 32px 32px;
  }
  ${media.desktop} {
    width: 860px;
    height: 440px;
    padding: 40px 40px;
  }
`;
export const StatisticsTitle = styled.div`
  color: ${themeColors.closeIconColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  margin: 0;
`;
export const BarChartContainer = styled.div`
  ${media.mobile} {
    width: 279px;
    height: 333px;
  }
  ${media.tablet} {
    width: 576px;
    height: 360px;
  }
  ${media.desktop} {
    width: 780px;
    height: 360px;
  }
`;
