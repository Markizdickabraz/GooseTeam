import styled from 'styled-components';
import * as Variables from '../../../styles/variables';

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const media = {
  mobile: '@media screen and (max-width: 767px)',
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
};

export const MainContainer = styled.section`
  width: 375px;
  padding: 0px 20px 64px 20px;
  margin-left: auto;
  margin-right: auto;
  ${media.tablet} {
    width: 768px;
    padding: 0px 32px 100px 32px;
  }
  ${media.desktop} {
    width: 1440px;
    padding: 0px 128px 118px 0px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 40px;
  font-family: ${Variables.fonts.primary};
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
  color: ${Variables.fontColors.blue};
  text-align: center;
  ${media.tablet} {
    font-size: 40px;
    margin-bottom: 50px;
  }
`;

export const RewievContainer = styled.div`
  height: 252px;
  ${media.tablet} {
    height: 266px;
  }
  ${media.desktop} {
    height: 280px;
  }
`;

export const RewiewStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 335px;
  min-height: 187px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  font-family: ${Variables.fonts.primary};
  color: ${Variables.fontColors.black};
  border: 1px solid ${Variables.iconColors.greyDisableStar};
  border-radius: 8px;
  ${media.tablet} {
    width: 580px;
    height: auto;
    padding: 32px;
    margin-bottom: 18px;
  }
  ${media.desktop} {
    height: 187px;
    width: 580px;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;

  ${media.tablet} {
  }
  ${media.desktop} {
  }
`;

export const Arrow = styled.button`

width: 61px;
  height: 61px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
  &:focus {
    scale: 1.1;
  }
  ${media.tablet} {
  }
  ${media.desktop} {
  }

`;

export const Name = styled.h3`
   
    font-weight: 700;
    font-size: 18px;
    line-height: 1;
    margin-bottom: 13px;
  
`;

export const Comment = styled.p`
   
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    margin-bottom: 13px;
  
`;

export const ImgContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: ${Variables.backgroundColors.lightBlue};
    margin-right: 18px;
   
`;

export const StarContainer = styled.ul`
  display: flex;
  padding: 0;
  margin-bottom: 29px;
  height: 14px;
  flex-direction: row-reverse;
  justify-content: start;
  column-gap: 10px;
  & li:nth-last-child(-n + ${item => item.value}) {
    & svg {
      fill: ${Variables.iconColors.orange};
    }
  }
  svg {
    fill: ${Variables.iconColors.greyDisableStar};
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
