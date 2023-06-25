import styled from '@emotion/styled';
import facepaint from 'facepaint';

import { BREAKPOINTS } from './deviceWidth';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));

export const Svg = styled.svg`
  fill: transparent;
  stroke: #ffffff;

  @keyframes scale-up-hor-left {
    0% {
      -webkit-transform: scaleX(0.4);
      transform: scaleX(0.4);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
    }
  }
  ${media({
    width: ['18px', '18px', '20px', '20px'],
    height: ['18px', '18px', '20px', '20px'],
  })};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8125rem;

  width: 141px;
  margin-top: 0.5rem;

  background-color: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: -0.02em;
  color: #ffffff;

  &:hover ${Svg} {
    animation: scale-up-hor-left 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  padding: 14px 28px;
  @media (min-width: 765px) {
    padding: 16px 23px;
  }
`;
