import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const TaskColumn = styled.div`
  width: 100%;
  padding: 18px 18px 20px 18px;
  padding-top: 18px;
  padding-right: 18px;
  padding-bottom: 20px;
  padding-left: 18px;
  ${media.tablet} {
    width: 344px;
    padding-bottom: 28px;
  }
`;
