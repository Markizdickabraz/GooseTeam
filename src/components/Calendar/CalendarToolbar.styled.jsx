import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const Toolbar = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
column-gap: 145px;
row-gap: 18px;
margin-bottom: 24px;
${media.tablet} {
column-gap: 325px;
row-gap: 0;
flex-direction: row;
}

${media.desktop} {
column-gap: 708px;
margin-bottom: 32px;
}
`