import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;

  color: #3e85f3;

  padding-top: 15px;

  box-shadow: 0px 9.399999618530273px 57.6875px 0px #00000009;
  box-shadow: 0px 47px 355px 0px #00000012;
`;

export const StyleLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(220, 235, 247);
  background-image: url('../../images/login/goose_login@1x.png');
  background-repeat: no-repeat;
  background-position: right bottom;
`;

export const TextVerify = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
`;

