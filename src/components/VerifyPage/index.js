/*import React from 'react';
import styleLogin from '../Login/style.module.css';
import style from './style.module.css';
import { verifyUser } from './helpers';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

const VerifyPage = () => {
  const { verificationToken } = useParams();

  useEffect(() => {
    verifyUser(verificationToken);
  }, [verificationToken]);

  return (
    <div className={styleLogin.container}>
      <span className={style.textVerify}>Verify is successful</span>
      <p>
        <Link to="/login" className={style.link}>
          Log in
        </Link>
      </p>
    </div>
  );
};

export default VerifyPage;*/


