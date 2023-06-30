import React from 'react';
import {
  BtnSubmitStyled,
  TextBtnSubmit,
  ImageFormLogin,
} from './BtnSubmit.styled.jsx';
import IconButton from '../../../images/svg/sprite.svg';

const BtnSubmit = ({ isSubmitting, textBtn }) => {
  return (
    <BtnSubmitStyled type="submit" disabled={isSubmitting}>
      <TextBtnSubmit>{textBtn}</TextBtnSubmit>
      <ImageFormLogin src={IconButton} alt="" />
    </BtnSubmitStyled>
  );
};

export default BtnSubmit;
