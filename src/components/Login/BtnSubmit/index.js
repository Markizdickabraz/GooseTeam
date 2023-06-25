import React from 'react';
import style from './style.module.css';
import IconButton from '../../../images/svg/sprite.svg';

const BtnSubmit = ({ isSubmitting, textBtn }) => {
  return (
    <button type="submit" disabled={isSubmitting} className={style.btnSubmit}>
      <span className={style.textBtnSubmit}>{textBtn}</span>
      <img src={IconButton} alt="" className={style.imageFormLogin} />
    </button>
  );
};

export default BtnSubmit;
