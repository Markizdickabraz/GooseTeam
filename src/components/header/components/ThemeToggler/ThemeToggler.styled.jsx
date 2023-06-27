import styled from 'styled-components';
import { iconColors } from 'styles/variables';

export const ThemeIcon = styled.svg`
  fill: ${iconColors.blue};
  height: 24px;
  width: 24px;

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
  margin-right: 16px;
`;