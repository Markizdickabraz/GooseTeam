import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const TaskCard = styled.li`
  width: 100%;
  height: 108px;
  padding: 15px;
  background-color: #f7f6f9;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  ${media.tablet} {
    height: 112px;
  }
`;
export const TaskTitle = styled.h3`
  color: ${Variables.fontColors.black};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  margin-bottom: 28px;
  ${media.tablet} {
    margin-bottom: 32px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;
export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: #3e85f3;
  border-radius: 32px;
`;
export const Level = styled.p`
  display: inline-block;
  height: 20px;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: #000000;
  color: ${Variables.fontColors.white};
  font-size: 10px;
  font-weight: 600;
  line-height: 1.2;
  text-align: justify;
`;
