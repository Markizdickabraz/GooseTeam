import styled from 'styled-components';
import {
  fontColors,
  themeColors,
  buttonColors,
  animation,
} from 'styles/variables';

export const Wrapper = styled.header`
  background-color: ${themeColors.mainBackground};
  padding-top: 24px;
  color: ${themeColors.main};

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;

    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 1151px;
  }
`;

export const LeftSubsection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 1439px) {
    display: none;
  }
`;

export const GooseImg = styled.img`
  width: 64px;
  height: 60px;
`;

export const RightSubsection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const SectionTitle = styled.h1`
  display: block;
  font-weight: 700;
  font-size: 32px;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const Toggler = styled.svg`
  fill: transparent;
  stroke: ${themeColors.closeIconColor};
  margin-right: 8px;
  cursor: pointer;
  height: 24px;
  width: 24px;

  @media (min-width: 765px) {
    height: 34px;
    width: 34px;
    margin-right: 16px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const MotivationTask = styled.strong`
  color: ${themeColors.closeIconColor};

  display: block;
  font-family: 'Inter';

  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;

  margin-top: 8px;
`;

export const MotivationSpan = styled.span`
  color: ${fontColors.blue};
`;

export const FeedbackBtn = styled.button`
  background-color: ${buttonColors.blue};
  border-radius: 10px;
  padding: 8px 20px;
  border: none;
  color: ${fontColors.white};
  text-align: center;
  font-size: 12px;
  font-family: Inter;
  font-weight: 600;
  line-height: 16px;
  transition: background-color ${animation};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }

  @media screen and (min-width: 768px) {
    border-radius: 14px;
    padding: 12px 32px;
    font-size: 14px;
    line-height: 18px;
  }
`;
