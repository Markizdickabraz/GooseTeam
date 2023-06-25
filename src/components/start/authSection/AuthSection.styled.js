import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Variables from '../../../styles/variables';
import { ReactComponent as LogoLogin } from '../../../images/start_page/IconLogin.svg';

const media = {
  mobile: '@media screen and (max-width: 767px)',
  tablet: '@media screen and (min-width: 768px)',
  desktop: '@media screen and (min-width: 1440px)',
};

export const Section = styled.section`
  margin: 0;
  height: 100vh;
  width: 100vw;
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
  //   margin-bottom: 3.9vh;
  margin-bottom: 3.9vh;
  color: ${Variables.fontColors.white};
  //   font-size: 5.9vh;
  font-size: 44px;
  font-family: ${Variables.fonts.hero};
  font-weight: 400;
  //   line-height: 48px;

  ${media.tablet} {
    // margin-bottom: 40px;
    // font-size: 14.6vh;
    font-size: 120px;
    // line-height: 150px;
  }
`;

export const MainTitleSpan = styled.span`
  font-style: italic;
`;

export const NavBox = styled.div`
  display: flex;
  //   flex-wrap: wrap;
  //   max-width: 262px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   //   align-content: space-between;
  gap: 20.8vh;

  ${media.tablet} {
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }
`;

export const SignUp = styled(Link)`
  display: none;

  ${media.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 121px;
    height: 46px;
    margin: 0;
    color: ${Variables.fontColors.white};
    font-family: ${Variables.fonts.primary};
    font-weight: 600;
    font-size: 14px;
    transition: color ${Variables.animation},
      background-color ${Variables.animation};
    border: 0;
    border-radius: 15px;
    text-decoration: underline;

    // &::after {
    //   content: '';
    //   width: 121px;
    //   height: 1px;
    //   display: block;
    //   position: absolute;
    //   bottom: 1px;
    //   left: 0;
    //   background-color: ${Variables.fontColors.white};
    //   border-radius: 1px;
    // }

    &:focus {
      text-decoration: none;
      color: ${Variables.fontColors.black};
      background-color: ${Variables.fontColors.white};
    }

    &:hover {
      text-decoration: none;
      color: ${Variables.fontColors.black};
      background-color: ${Variables.fontColors.white};
    }
  }
`;

export const SvgLogIn = styled(LogoLogin)`
  fill: none;
  transition: color ${Variables.animation};
`;

export const LogIn = styled(Link)`
  text-decoration: none;
  width: 131px;
  height: 46px;
  padding: 0;
  border: 0;
  border-radius: 15px;
  color: ${Variables.fontColors.black};
  font-family: ${Variables.fonts.primary};
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  background-color: ${Variables.backgroundColors.white};
  align-items: center;
  display: flex;
  justify-content: center;
  transition: color ${Variables.animation},
    background-color ${Variables.animation};

  &:hover ${SvgLogIn} {
    stroke: ${Variables.backgroundColors.black};
  }
  &:focus ${SvgLogIn} {
    stroke: ${Variables.backgroundColors.black};
  }
  &:focus {
    text-decoration: underline;
    color: ${Variables.fontColors.blue};
    // background-color: ${Variables.backgroundColors.blue};
  }
  &:hover {
    text-decoration: underline;
    color: ${Variables.fontColors.blue};
    // background-color: ${Variables.backgroundColors.blue};
  }

  //   ${media.tablet} {
  //     margin: 0;
  //     padding: 14px 22px;
  //     border: 0;
  //     border-radius: 15px;
  //     color: var(--accent-background-color);
  //     font-family: 'Inter', sans-serif;
  //     font-weight: 600;
  //     font-size: 14px;
  //     line-height: 18px;
  //   }
`;

export const SignUpMob = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 121px;
  height: 46px;
  margin: 0;
  color: ${Variables.fontColors.white};
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  transition: color ${Variables.animation},
    background-color ${Variables.animation};
  border: 0;
  border-radius: 15px;
  text-decoration: underline;

  ${media.tablet} {
    display: none;
  }
`;
