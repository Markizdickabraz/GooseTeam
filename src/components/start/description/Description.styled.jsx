import styled from 'styled-components';
import * as Variables from '../../../styles/variables';

const media = {
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
};

export const MainContainer = styled.section`
  width: 375px;
  padding: 64px 20px;
  margin-left: auto;
  margin-right: auto;
  ${media.tablet} {
    width: 768px;
    padding: 64px 32px;
  }
  ${media.desktop} {
    width: 1440px;
    padding: 64px 128px 100px;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-bottom: 64px;
  ${media.desktop} {
    display: flex;
    width: 1107px;
    // gap: 228px;
    justify-content: space-between;
  }
`;

export const ContainerReverse = styled.div`
  margin-right: auto;
  margin-bottom: 64px;
  ${media.desktop} {
    position: relative;
    width: 1107px;
  }
`;

export const DescriptionLeft = styled.div`
  ${media.tablet} {
    width: 275px;
    padding-bottom: 48px;
  }
`;

export const DescriptionRight = styled.div`
  margin-left: auto;
  ${media.tablet} {
    width: 275px;
    padding-bottom: 48px;
  }
  ${media.desktop} {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  ${media.tablet} {
    // width: 704px;
  }
  ${media.desktop} {
    width: 604px; }
  `;

export const Number = styled.p`
  font-family: ${Variables.fonts.primary};
  font-weight: 700;
  font-size: 80px;
  margin-bottom: 14px;
  color: ${Variables.fontColors.blue};
  ${media.tablet} {
    font-size: 104px;
  }
`;

export const TitleColoured = styled.h2`
  margin-bottom: 8px;
  padding: 8px 18px;
  width: 214px;
  font-family: ${Variables.fonts.primary};
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
  background-color: ${Variables.backgroundColors.lightBlueButton};
  color: ${Variables.fontColors.blue};
  border-radius: 44px;
  ${media.tablet} {
    width: 264px;
    font-size: 40px;
    padding: 6px 18px;
  }
`;

export const TitleUncoloured = styled.p`
  font-family: ${Variables.fonts.primary};
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 14px;
  text-transform: uppercase;
  color: ${Variables.fontColors.black};
  ${media.tablet} {
    font-size: 40px;
    margin-bottom: 24px;
  }
`;

export const AboutText = styled.p`
  font-family: ${Variables.fonts.primary};
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  padding-bottom: 40px;
  color: ${Variables.fontColors.black};
  ${media.tablet} {
    padding-bottom: 0;
  }
`;
