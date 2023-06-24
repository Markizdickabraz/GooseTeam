import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { BREAKPOINTS } from 'styles/deviceWidth';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));

export const SidebarTitle = styled.h2`
  font-family: Coolvetica;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;

  //в залежності від теми зробити через пропси
  color: #3E85F3;

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 289px;
  padding: 24px 32px;
  //в залежності від теми 
  background-color: #fff;
  @media (max-width: 1439px) {
    position: absolute;
    z-index: 5000;
  }
`;

export const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  ${media({
    marginBottom: ['64px', '64px', '50px', '32px'],
  })};
`;

export const GooseImg = styled.img`
  margin-right: 6px;

  ${media({
    width: ['36px', '36px', '60px', '71px'],
    height: ['35px', '35px', '58px', '68px'],
  })};
`;

export const CloseIcon = styled.svg`
//в залежності від теми 
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
//в залежності від теми 
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