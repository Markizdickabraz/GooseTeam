import styled from 'styled-components';
import * as Variables from '../../styles/variables';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
`;

export const Button = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: ${Variables.themeColors.main};
  transition: stroke 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`;
