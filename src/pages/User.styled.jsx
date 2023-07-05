import styled from 'styled-components';
import { DEVICE_SIZE } from '../styles/deviceWidth';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const UserSection = styled.div`
padding-top: 64px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
 ${media.tablet} {
    padding-top: 64px;
    padding-bottom: 38px;
    padding-left: 32px;
    padding-right: 32px;
  }
  ${media.desktop} {
    padding-top: 33px;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
  }
`