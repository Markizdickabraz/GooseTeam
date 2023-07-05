import styled from 'styled-components';
import { themeColors, animation } from '../../../../styles/variables';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
};

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const RatingText = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 8px;
  color: ${themeColors.feedbackText};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin-top: 18px;
  line-height: 14px;
`;

export const CommentText = styled.textarea`
  width: 100%;
  height: 127px;
  background-color: ${themeColors.feedbackTextareaBg};
  border: 1px solid #343434;
  border-radius: 8px;
  margin-top: 8px;
  resize: none;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  padding-right: 18px;
  color: ${themeColors.feedbackTextareaColor};
  ::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: ${themeColors.feedbackTextareaColor};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const BtnSave = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 96%;
  width: 96%;
  margin-top: 18px;
  cursor: pointer;
  background: #3e85f3;
  border: none;
  border-radius: 8px;
  transition: background ${animation}; 

  &:hover,
  :focus {
    cursor: pointer;
    background-color: #3E85F3;
    border: 1px solid #fff;
      -webkit-box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
      box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
  }

  ${media.tablet} {
    height: 48px;
    width: 198px;
  }
  ${media.desktop} {
    height: 48px;
    width: 198px;
  }
`;

export const BtnSaveText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;

export const BtnCancel = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 96%;
  width: 96%;
  margin-top: 18px;
  cursor: pointer;
  background: ${themeColors.feedbackTextareaBg};
  border: none;
  border-radius: 8px;
  transition: background ${animation};

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${themeColors.feedbackTextareaBg};
    border: 1px solid #fff;
      -webkit-box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
      box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
  }

  ${media.tablet} {
    height: 48px;
    width: 198px;
  }
  ${media.desktop} {
    height: 48px;
    width: 198px;
  }
`;

export const BtnCancelText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: ${themeColors.feedbackBtnCancelColor};
`;