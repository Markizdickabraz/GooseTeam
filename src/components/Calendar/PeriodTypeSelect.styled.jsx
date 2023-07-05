import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};


export const PeriodTab = styled.div`
border-radius: 8px;
display: flex;
`

export const PeriodButton = styled.button`
background-color: ${Variables.themeColors.periodButton};
border: none;
cursor: pointer;
width: 76px;
height: 34px;
display: flex;
padding: 8px 16px;
justify-content: center;
align-items: center;
&:not(:last-child) {
    border-radius: 8px 0px 0px 8px;
    border-right: 1px solid rgba(62, 133, 243, 0.20);
    box-sizing: border-box;
};
&:last-child {
    border-radius: 0px 8px 8px 0px;
    box-sizing: border-box;
};
text-align: center;
font-size: 14px;
font-weight: 500;
line-height: 18px;
color: ${Variables.fontColors.blue};
&:hover{
background-color: #CAE8FF;
};
&:active{
background-color: #CAE8FF;
};
${media.tablet} {
width: 82px;
font-size: 16px;
}
`