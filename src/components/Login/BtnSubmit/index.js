import React from 'react';
import style from './style.module.css';

const BtnSubmit = ({ isSubmitting, textBtn }) => {
  return (
    <button type="submit" disabled={isSubmitting} className={style.btnSubmit}>
      <span className={style.textBtnSubmit}>{textBtn}</span>
    </button>
  );
};

export default BtnSubmit;
