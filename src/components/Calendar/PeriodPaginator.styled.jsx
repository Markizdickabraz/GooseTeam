import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const Paginator = styled.div`
display: flex;
gap: 145px; 
${media.tablet} {
gap: 8px;  
}
`

export const CurrentDate = styled.div`
display: flex;
padding: 6px 12px;
justify-content: center;
align-items: center;
width: 118px;
background-color: ${Variables.backgroundColors.blue};
border-radius: 8px;
color: ${Variables.fontColors.white};
font-size: 14px;
font-weight: 700;
line-height: 18px;
text-transform: uppercase;
text-align: center;
${media.tablet} {
    width: 131px;
  padding: 8px 12px;
  font-size: 16px;
}
`
export const ButtonsTab = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
outline: ${Variables.themeColors.calendarPaginatorBorder};
background: ${Variables.themeColors.calendarPaginator};
box-sizing: border-box;
&:hover{
box-shadow: ${Variables.themeColors.buttonShadow}};
height: 30px;
${media.tablet} {
  height: 34px;
}
`

export const ArrowButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
&:not(:last-child) {
    border-bottom-right-radius: 0;
    border-right: ${Variables.themeColors.calendarPaginatorBorder};
    box-sizing: border-box;
}
display: flex;
justify-content: center;
align-items: center;
width: 36px;
height: 30px;
${media.tablet} {
width: 38px;
height: 34px; }
`



export const Arrow = styled.svg`
fill: transparent;
stroke: ${Variables.themeColors.calendarPaginatorIcon};
${media.tablet} {
    width: 18px;
    height: 18px;
}
`