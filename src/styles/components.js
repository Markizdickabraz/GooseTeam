import styled, { keyframes } from 'styled-components';
import facepaint from 'facepaint';
import { BREAKPOINTS } from './deviceWidth';
import { themeColors } from 'styles/variables';

const media = facepaint(BREAKPOINTS.map(bp => `@media (min-width: ${bp}px)`));

const scaleUpHorLeft = keyframes`
  0% {
    transform: scaleX(0.4);
    transform-origin: 0% 0%;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 0% 0%;
  }
`;

export const Svg = styled.svg`
  fill: transparent;
  stroke: #ffffff;

  animation: ${scaleUpHorLeft} 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  ${media({
    width: ['18px', '18px', '20px', '20px'],
    height: ['18px', '18px', '20px', '20px'],
  })}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8125rem;

  width: 141px;
  margin-top: 0.5rem;

  background-color: #3e85f3;
  box-shadow: 1px 1px 4px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: -0.02em;
  color: #ffffff;

 &:hover {
    background-color: #2e73d9;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #2e73d9;
  }

  padding: 14px 28px;

  @media (min-width: 765px) {
    padding: 16px 23px;
  }
`;

export const MainWrapper = styled.div`
  background-color: ${themeColors.mainBackground};
  ${media({
    padding: [
      '24px 20px 40px',
      '24px 20px 40px',
      '24px 32px 42px',
      '40px 32px 32px',
    ],
  })};
  width: 100%;
`;
