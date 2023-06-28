import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const ColumnsList = styled.div`

  ${media.tablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    ${media.desktop} {
      gap: 27px;
    }
  }
`;
