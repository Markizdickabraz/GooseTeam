import styled from 'styled-components';
import * as Variables from '../../styles/variables';

export const TopButton = styled.img`
  position: fixed;
  bottom: 50px;
  right: 15px;
  transition: 250ms;
  z-index: 999;
  cursor: pointer;
  width: 30px;
  //   height: 56px;

  &:hover,
  &:focus {
    border-radius: 15px;
    background-color: ${Variables.backgroundColors.lightBlue};
  }

  @media screen and (min-width: 768px) {
    width: 50px;
    right: 30px;
    bottom: 80px;
  }

  @media screen and (min-width: 1200px) {
    width: 60px;
    bottom: 120px;
    right: 30px;
  }
`;
