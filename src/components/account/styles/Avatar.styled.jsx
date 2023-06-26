import styled from 'styled-components';
import { buttonColors } from '../../../styles/variables';

export const UpdateAvatarButton = styled.button`
  background-color: ${buttonColors.blue};
  outline: none;
  border: none;
  padding: 3px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 8px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  position: absolute;
  bottom: -4px;
  right: 22px;

  @media (max-width: 768px) {
    position: absolute;
    bottom: -25px;
    right: -22px;
  }
`;

export const AvatarContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 0px;
  height: 0px;

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const AvatarImg = styled.img`
  max-width: none;

  @media (max-width: 768px) {
    position: absolute;
    top: -50px;
    left: -35px;
  }

  object-fit: cover;
  border-radius: 72px;
  border: 2px solid #3e85f3;
  width: 72px;
  height: 72px;

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;
