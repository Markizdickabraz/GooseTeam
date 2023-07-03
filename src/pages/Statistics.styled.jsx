import styled from 'styled-components';
import { DEVICE_SIZE } from '../styles/deviceWidth';
import { themeColors } from 'styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const StatisticContainer = styled.section`
  border-radius: 16px;
  margin-top: 30px;
  max-width: 1087px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 135px;
  background-color: ${themeColors.secondBackground};
  ${media.tablet} {
    padding-bottom: 224px;
  }
  ${media.desktop} {
    padding-bottom: 104px;
  }
`;
