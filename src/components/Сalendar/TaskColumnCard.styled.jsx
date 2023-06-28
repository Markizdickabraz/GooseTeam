import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const TaskCard = styled.li`
  width: 100%;
`;
export const TaskTitle = styled.h3``;

export const Box = styled.div``;
export const Avatar = styled.div``;
export const Level = styled.p``;
