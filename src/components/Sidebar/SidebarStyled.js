import styled from 'styled-components';
import facepaint from 'facepaint';

import { BREAKPOINTS } from 'styles/deviceWidth';
import { themeColors } from 'styles/variables';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));

export const SidebarTitle = styled.h2`
  font-family: Coolvetica;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  color: ${themeColors.sidebarTitle};

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const SidebarWrapper = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 289px;
  padding: 24px 32px;
  background-color: ${themeColors.sidebarBackground};

  transform: translateX(0);
  opacity: 1;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 1439px) {
    position: fixed;
    top 0;
    left 0;
    z-index: 5000;
    transform: translateX(-300px);
    opacity: 0;
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
  stroke: ${themeColors.closeIconColor};
  margin-left: auto;
  height: 24px;
  width: 24px;
  cursor: pointer;

  @media (min-width: 765px) {
    height: 33px;
    width: 33px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const SidebarSubTitle = styled.h3`
  color: ${themeColors.sidebarSubTitle};
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
