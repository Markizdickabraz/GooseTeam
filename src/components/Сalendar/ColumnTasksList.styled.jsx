import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 372px;

  gap: 14px;
  padding: 0;
  
  ${media.desktop} {
    gap: 18px;
  }
`;
