import styled from 'styled-components';

export const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  border: 1px solid red;
  padding: 10px;
  border-radius: 5px;
  width: 395px;
  svg {
    margin-right: 5px;
  }
  @media only screen and (max-width: 600px) {
    width: 287px;
  }
`;
