import styled from 'styled-components';
import facepaint from 'facepaint';

import { BREAKPOINTS } from 'styles/deviceWidth';
import { themeColors } from 'styles/variables';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  z-index: 990;
`;

export const SidebarTitle = styled.h2`
  font-family: Coolvetica;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  //тема біла
  color: #3e85f3;

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 300px;
  max-width: 289px;
  padding: 24px 32px;
  //тема біла
  background-color: #fff;

  @media (max-width: 1439px) {
    background-color: ${themeColors.sidebarBackground};
    position: absolute;
    z-index: 5000;
  }
`;

export const SidebarLogo = styled.div`
  display: flex;
  align-items: center;

  ${media({
    marginBottom: ['64px', '64px', '50px', '32px'],
  })}
`;

export const GooseImg = styled.img`
  margin-right: 6px;

  ${media({
    width: ['36px', '36px', '60px', '71px'],
    height: ['35px', '35px', '58px', '68px'],
  })}
`;

export const CloseIcon = styled.svg`
  //тема біла
  fill: #343434;
  margin-left: auto;
  height: 24px;
  width: 24px;

  @media (min-width: 765px) {
    height: 33px;
    width: 33px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const SidebarSubTitle = styled.h3`
  //тема біла
  color: rgba(52, 52, 52, 0.5);
  font-family: Inter;
  font-weight: 600;
  line-height: 1.2;
  font-size: 12px;
  margin-bottom: 24px;

  @media (min-width: 765px) {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;
