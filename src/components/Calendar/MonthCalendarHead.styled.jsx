import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const DayNames = styled.ul`
display: flex;
width: 335px;
height: 50px;
flex-shrink: 0;
border-radius: 8px;
border:  ${Variables.themeColors.dayNamesBorder};
background: ${Variables.themeColors.dayNames};
position: relative;
gap: 36px;
padding: 16px;
margin-bottom: 14px;
${media.tablet} {
width: 704px;
height: 46px; 
margin-bottom: 18px;
gap: 65px;
padding: 14px 40px;
}
${media.desktop} {
width: 1087px; 
margin-bottom: 15px;
padding: 14px 60px;
gap: 122px;
}`

export const DayName = styled.li`
font-size: 16px;
font-weight: 600;
line-height: 18px;
text-transform: uppercase;
color: ${Variables.themeColors.dayName}
`