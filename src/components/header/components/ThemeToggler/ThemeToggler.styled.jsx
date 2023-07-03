import styled from 'styled-components';
import { iconColors, animation } from 'styles/variables';

export const ThemeIcon = styled.svg`
  fill: ${iconColors.blue};
  height: 24px;
  width: 24px;
  transition: fill ${animation};

  &:hover,
  &:focus {
    fill: #2b78ef;
  }

  @media (min-width: 765px) {
    height: 32px;
    width: 32px;
  }
`;

export const ToggleButton = styled.button`
  color: transparent;
  background-color: transparent;
  border: none;
  padding: 0px;
`;
