import styled from 'styled-components';
import { DEVICE_SIZE } from 'styles/deviceWidth';
import { themeColors } from 'styles/variables';

const media = {
  mobile: `@media screen and (min-width: ${DEVICE_SIZE.mobile})`,
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const StatisticsContainer = styled.section`
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
