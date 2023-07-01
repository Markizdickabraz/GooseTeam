import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  transform: translateX(-290px);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 30px;
  border: none;
  outline: none;
  background: none;
  padding: 0;
`;

const Svg = styled.svg`
  stroke: #343434;
`;

export { Wrapper, CloseBtn, Svg };
