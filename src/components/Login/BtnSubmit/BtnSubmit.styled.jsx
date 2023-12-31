import styled from 'styled-components';

export const ImageFormLogin = styled.img`
  padding-left: 5px;
  width: 20px;
  height: 20px;
`;
export const TextBtnSubmit = styled.span`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
`;
export const BtnSubmitStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 56px;
  border-radius: 16px;
  gap: 10px;
  color: #ffffff;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0 #88a5bf7a;
  border: none;

  /* for mobile */
  @media only screen and (max-width: 600px) {
    width: 287px;
  }
`;
