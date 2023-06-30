import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const Calendar = styled.ul`
position: relative;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  border-right: 1px solid #ddd;
border-bottom: 1px solid #ddd;
border-radius: 8px;
  ${media.desktop} {
    width: 1087px;
}
`

export const CalendarItem = styled.li`
background-color: ${Variables.backgroundColors.white};
  position: relative;
  width: calc(100% / 7);
  cursor: pointer;
  height: 94px;
  &::before {
  content: ' ';
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: #ddd;
};
&::after {
  content: ' ';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #ddd;
};
  ${media.tablet} {
    height: 144px;
}
  ${media.desktop} {
    height: 125px;
}
`


export const Day = styled.div`
 position: absolute;
  top: 8px;
  right: 4px;
  padding: 4px 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
  text-align: center;
  border-radius: 8px;
    ${media.tablet} {
    top: 14px;
  right: 14px;
  font-size: 16px;
  line-height: 18px;
}
`

export const Event = styled.div`
position: absolute;
top: 48px;
left: 2px;
width: 44px;
border-radius: 8px;
font-size: 10px;
font-weight: 700;
line-height: 14px;
font-size: 10px;
font-weight: 700;
line-height: 14px;
height: 22px;
padding: 4px 8px 4px;
${media.tablet} {
 width: 92px;  
 top: 58px;
left: 4px; 
font-size: 14px;
line-height: 18px;
height: 26px;
padding: 4px 12px 4px;
}
${media.desktop} {
 width: 139px;  
left: 8px; 
}
`

