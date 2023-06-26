import styled from 'styled-components';

export const DateInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 354px;

  input {
    width: 100%;
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid rgba(17, 17, 17, 0.1);
    outline: none;

    font-size: 14px;

    :focus {
      border: 1px solid #111;
    }

    @media (min-width: 768px) {
      padding: 14px 18px;
      font-size: 16px;
    }

    border-color: ${({ color }) => color};
  }

  label {
    color: ${({ color }) => color};
  }
`;

export const Selects = styled.div`
  display: flex;
  gap: 6px;

  select {
    padding: 6px;
    outline: none;
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const ControlWrapper = styled.div`
  button {
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    font-size: 30px;

    color: #fff;

    font-weight: bold;
    :hover {
      color: #dce3e5cc;
    }
  }
`;
