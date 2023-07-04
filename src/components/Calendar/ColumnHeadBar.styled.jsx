import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const ColumnHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  ${media.tablet} {
    margin-bottom: 28px;
  }
  ${media.desktop} {
    margin-bottom: 35px;
  }
`;

export const Title = styled.h2`
  padding: 7px 0;
  color: ${Variables.themeColors.main};
  text-align: center;
  font-size: 18px;
  font-family: ${Variables.fonts.primary};
  font-weight: 700;
  line-height: 1.11;

  ${media.tablet} {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 7px 0;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${Variables.themeColors.main};
  transition: color 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover,
  &:focus {
    color: ${Variables.iconColors.blue};
  }
`;
