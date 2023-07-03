import styled from 'styled-components';
import { DEVICE_SIZE } from '../../styles/deviceWidth';
import * as Variables from '../../styles/variables';

const media = {
  tablet: `@media screen and (min-width: ${DEVICE_SIZE.tablet})`,
  desktop: `@media screen and (min-width: ${DEVICE_SIZE.desktop})`,
};

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 0px;
  border-radius: 8px;
  border: 1px dashed ${Variables.buttonColors.blue};
  background: ${Variables.buttonColors.lightBlue};
  cursor: pointer;
  margin-top: 14px;
  ${media.tablet} {
    margin-top: 32px;
  }
`;

export const ButtonText = styled.p`
  text-align: left;
  color: ${Variables.fontColors.black};
  font-size: 14px;
  font-family: ${Variables.fonts.primary};
  font-weight: 600;
  line-height: 1.29;
`;
