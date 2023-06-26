import styled from 'styled-components';
import { fontColors, iconColors, backgroundColors } from 'styles/variables';



export const Wrapper = styled.header`
background-color:${backgroundColors.grey};
  display: flex;
  justify-content: space-between;
  padding:24px 20px;

  @media (min-width: 768px) {
    padding:24px 32px;
  }

  @media (min-width: 1440px) {
    padding:24px 34px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const SectionTitle = styled.h1`
  display: none;
  color: ${fontColors.black};
  @media (min-width: 1440px) {
    display: block;

    font-weight: 700;
    font-size: 32px;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  }
`;

export const Toggler = styled.svg`
  fill: transparent;
  stroke: ${iconColors.black};
  margin-right:8px;

  height: 24px;
  width: 24px;

  @media (min-width: 765px) {
    height: 34px;
    width: 34px;
    margin-right:16px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;


export const MotivationTask = styled.p`
  display: none;
  color: ${fontColors.black};

  @media (min-width: 1440px) {
    display: block;
    font-family: 'Inter';

    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const FeedbackBtn=styled.button`
background:${backgroundColors.blue};
border-radius: 10px;
padding: 8px 20px;
border:none;
color:${fontColors.white};
text-align: center;
font-size: 12px;
font-family: Inter;
font-weight: 600;
line-height: 16px;
margin-left:55%;`
