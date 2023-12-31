import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const ColumnsList = styled.ul`
  display: flex;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  ${media.tablet} {
    gap: 16px;
    ${media.desktop} {
      gap: 27px;
    }
  }
`;
