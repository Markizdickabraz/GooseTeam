import styled from 'styled-components';

export const Wrapper = styled.div`
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
`;

export const Svg = styled.svg`
  stroke: #212121;
  fill: transparent;
  width: 16px;
  height: 16px;
  cursor: pointer;
  transition: stroke 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`;
