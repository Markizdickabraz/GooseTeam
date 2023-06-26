import styled from 'styled-components';

export const Selects = styled.div`
  display: flex;
  gap: 5px;

  select {
    padding: 6px;
    outline: none;
    border: 1px solid #fff;
    border-radius: 4px;
  }
`;

export const ControlWrapper = styled.div`
  button {
    text-align: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    font-size: 25px;

    color: #fff;

    font-weight: bold;
    :hover {
      color: #dce3e5cc;
    }
  }
`;
