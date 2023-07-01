import React from 'react';
import {
  StyleLoginContainer,
  LinkStyled,
  TextVerify,
} from './VerifyPage.styled.jsx';
import { verifyUser } from './helpers';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const VerifyPage = () => {
  const { verificationToken } = useParams();

  useEffect(() => {
    verifyUser(verificationToken);
  }, [verificationToken]);

  return (
    <StyleLoginContainer>
      <TextVerify>Verify is successful</TextVerify>
      <p>
        <LinkStyled to="/login">Log in</LinkStyled>
      </p>
    </StyleLoginContainer>
  );
};

export default VerifyPage;
