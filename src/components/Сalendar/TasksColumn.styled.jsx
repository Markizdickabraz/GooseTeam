import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const TaskColumn = styled.li`
  flex: none;
  width: 335px;
  padding: 18px 18px 20px 18px;
  border-radius: 8px;
  border: 1px solid ${Variables.themeColors.borderColor};

  ${media.tablet} {
    width: 344px;
    padding: 20px 20px 28px 20px;
  }
`;
