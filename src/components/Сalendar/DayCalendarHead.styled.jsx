import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const ListOfDays = styled.ul`
  display: flex;
  gap: 19px;
  width: 100%;
  margin-bottom: 14px;
  padding: 14px 18px;

  ${media.tablet} {
    gap: 69px;
    margin-bottom: 16px;
    padding: 10px 32px;
  }
  ${media.desktop} {
    max-width: 1087px;
    gap: 128px;
    padding: 10px 46px;
  }
`;

export const ListOfDaysItem = styled.li`
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  ${media.tablet} {
    gap: 4px;
  }
`;

export const Week = styled.p`
  color: ${Variables.fontColors.black};
  font-size: 16px;
  font-family: ${Variables.fonts.primary};
  font-weight: 600;
  line-height: 1.13;
  text-transform: uppercase;
  ${media.tablet} {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const Day = styled.p`
  padding: 4px 6px;
  color: ${Variables.fontColors.black};
  font-size: 12px;
  font-family: ${Variables.fonts.primary};
  font-weight: 700;
  line-height: 1.17;
  text-transform: uppercase;
  border-radius: 6px;
  ${media.tablet} {
    padding: 4px 8px;
    font-size: 16px;
    line-height: 1.13;
    border-radius: 8px;
  }
`;
