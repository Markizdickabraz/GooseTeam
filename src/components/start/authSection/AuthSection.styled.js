import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Variables from '../../../styles/variables';
import { FiLogIn } from 'react-icons/fi';

const media = {
  mobile: '@media screen and (max-width: 767px)',
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
};

export const Section = styled.section`
  margin: 0;
  height: ${window.innerHeight};
  width: 100%;
  background-color: ${Variables.backgroundColors.blue};
`;
export const Container = styled.div`
  height: 100vh;
  padding-top: 28.6vh;
  padding-left: 20.8vw;
  padding-right: 20.8vw;
  padding-bottom: 10.8vh;
  text-align: center;

  ${media.tablet} {
    padding-top: 31.3vh;
    padding-left: 11.2vw;
    padding-right: 11.2vw;
  }
  ${media.desktop} {
    padding-top: 24.3vh;
  }
`;
export const LogoSection = styled(Link)`
  text-decoration: none;
`;

export const Img = styled.img`
  display: block;
  width: 142px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  ${media.tablet} {
    width: 150px;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 3.9vh;
  color: ${Variables.fontColors.white};
  font-size: 44px;
  font-family: ${Variables.fonts.hero};
  font-weight: 400;

  ${media.tablet} {
    font-size: 120px;
  }
`;

export const MainTitleSpan = styled.span`
  font-style: italic;
`;

export const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20.6vh;

  ${media.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }
`;
export const SignUp = styled(Link)`
  display: none;
  ${media.tablet} {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Variables.fontColors.white};
    font-family: ${Variables.fonts.primary};
    font-weight: 600;
    font-size: 14px;
    transition: color ${Variables.animation}, border ${Variables.animation};
    border-radius: 15px;
    text-decoration: none;
    width: 131px;
    height: 46px;

    &::after {
      content: ' ';
      width: 50px;
      height: 1px;
      display: block;
      position: absolute;
      bottom: 13px;
      left: 40px;
      background-color: ${Variables.fontColors.white};
      border-radius: 1px;
    }

    &:focus,
    &:hover {
      border: 1px solid ${Variables.fontColors.white};
      -webkit-box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
      box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
    }

    &:focus::after,
    &:hover::after {
      display: none;
    }
  }
`;

export const SvgLogIn = styled(FiLogIn)`
  fill: none;
  transition: color ${Variables.animation};
  width: 13px;
  height: 13px;
  margin-left: 8px;
  fill: none;
  stroke: ${Variables.fontColors.blue};
`;

export const LogIn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 131px;
  height: 46px;
  border: 0;
  border-radius: 15px;
  color: ${Variables.fontColors.blue};
  font-family: ${Variables.fonts.primary};
  font-weight: 600;
  font-size: 14px;
  background-color: ${Variables.backgroundColors.white};

  transition: color ${Variables.animation}, stroke ${Variables.animation},
    background-color ${Variables.animation}, border ${Variables.animation};

  &:hover ${SvgLogIn} {
    stroke: ${Variables.backgroundColors.white};
  }
  &:focus ${SvgLogIn} {
    stroke: ${Variables.backgroundColors.white};
  }
  &:focus,
  &:hover {
    border: 1px solid ${Variables.fontColors.white};
    -webkit-box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
    box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
    background-color: ${Variables.backgroundColors.blue};
    color: ${Variables.fontColors.white};
  }
`;

export const SignUpMob = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Variables.fontColors.white};
  font-family: ${Variables.fonts.primary};
  font-weight: 600;
  font-size: 14px;
  transition: color ${Variables.animation};
  border: 0;
  border-radius: 15px;
  text-decoration: none;
  width: 131px;
  height: 46px;

  &::after {
    content: ' ';
    width: 50px;
    height: 1px;
    display: block;
    position: absolute;
    bottom: 13px;
    left: 40px;
    background-color: ${Variables.fontColors.white};
    border-radius: 1px;
  }

  &:focus,
  &:hover {
    border: 1px solid ${Variables.fontColors.white};
    -webkit-box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
    box-shadow: 0px 0px 36px 7px rgba(255, 255, 255, 0.91);
  }

  &:focus::after,
  &:hover::after {
    display: none;
  }
  ${media.tablet} {
    display: none;
  }
`;
