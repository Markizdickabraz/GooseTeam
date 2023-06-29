import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const TaskColumn = styled.div`
  flex: none;
  width: 335px;
  padding: 18px 18px 20px 18px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);

  ${media.tablet} {
    width: 344px;
    padding: 20px 20px 28px 20px;
  }
`;
