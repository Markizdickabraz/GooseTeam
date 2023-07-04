import styled from 'styled-components';
import { DEVICE_SIZE } from 'styles/deviceWidth';
import { themeColors } from 'styles/variables';

const media = {
  mobile: `@media screen and (min-width: ${DEVICE_SIZE.mobile})`,
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const PaginatorBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 28px 14px 0 28px;
  margin-bottom: 40px;
  ${media.tablet} {
    align-items: center;
    padding: 132px 64px 0 64px;
  }
  ${media.desktop} {
    padding: 134px 154px 0 153px;
  }
`;

export const PaginatorBtnBox = styled.div`
  display: flex;
  outline: 1px solid ${themeColors.paginatorBtnBorder};
  padding: 0;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: transparent;
  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  ${media.tablet} {
    margin-left: 8px;
  }
`;

export const ArrowBtn = styled.button`
  display: flex;
  padding: 7px 10px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  &:not(:last-child) {
    border-right: 1px solid ${themeColors.paginatorBtnBorder};
    box-sizing: border-box;
    border-bottom-right-radius: 0px;
  }
  ${media.tablet} {
    padding: 8px 10px;
  }
`;
export const Arrow = styled.svg`
  fill: none;
  stroke: ${themeColors.closeIconColor};
  width: 16px;
  height: 16px;
  ${media.tablet} {
    width: 18px;
    height: 18px;
  }
`;
export const ChartLegendBox = styled.div`
  margin-top: 20px;
  width: 100%;
  ${media.tablet} {
    margin-left: auto;
    margin-top: 0;
    width: auto;
  }
`;
export const ChartLegendList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const ChartLegendItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const ChartLegendText = styled.p`
  color: ${themeColors.closeIconColor};
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  margin: 0;
  &::before {
    display: block;
    content: ' ';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ffd2dd;
    display: inline-block;
    margin-right: 8px;
  }
  ${media.tablet} {
    font-size: 16px;
  }
`;
