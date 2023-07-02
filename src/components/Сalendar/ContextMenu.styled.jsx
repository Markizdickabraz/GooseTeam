import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const Menu = styled.menu`
  position: absolute;
  top: -50px;
  left: -152px;
  margin: 0;
  max-width: 147px;
  padding: 14px;
  border-radius: 8px;
  background: #aa0000;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Variables.fontColors.black};
  width: 100px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  cursor: pointer;
  ${media.tablet} {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const Svg = styled.svg`
  stroke: #212121;
  fill: transparent;
  width: 16px;
  height: 16px;
`;
