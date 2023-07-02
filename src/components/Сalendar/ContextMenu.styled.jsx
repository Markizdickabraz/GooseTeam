import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const Menu = styled.menu`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 14px;
  border-radius: 8px;
  background: #dd0000;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  ${media.tablet} {
    padding: 20px 24px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding: 0;
`;

export const ListItem = styled.li`
  color: ${Variables.fontColors.black};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  ${media.tablet} {
    font-size: 14px;
    line-height: 1.29;
  }
`;
