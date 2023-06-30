import React from 'react';
import {
  StyleLoginContainer,
  LinkStyled,
  TextVerify,
} from './style.module.css';
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
