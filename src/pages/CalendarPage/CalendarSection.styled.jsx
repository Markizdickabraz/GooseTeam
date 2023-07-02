import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import { themeColors } from 'styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const Container = styled.section`
  max-width: 375px;
  padding-top: 64px;
  padding-bottom: 52px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${themeColors.mainBackground};
  height: 100vh;
  ${media.tablet} {
    max-width: 768px;
    padding-top: 64px;
    padding-bottom: 42px;
    padding-left: 32px;
    padding-right: 32px;
  }
  ${media.desktop} {
    max-width: 1440px;
    padding-top: 33px;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
