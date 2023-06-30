import styled from 'styled-components';

export const ThemeSwitch = styled.input`
  appearance: none;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.toggleBackground};
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.toggleButton};
    transition: transform 0.3s;
  }

  &:checked {
    background-color: ${({ theme }) => theme.toggleBackgroundChecked};

    &::before {
      transform: translateX(24px);
    }
  }
`;
