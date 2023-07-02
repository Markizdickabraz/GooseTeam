import logoDesk from '../../../images/start_page/Desktop/goose_logoDesktop@1x.png';
import logoDesk2x from '../../../images/start_page/Desktop/goose_logoDesktop@2x.png';
import logoTab from '../../../images/start_page/Tablet/goose_logoTablet@1x.png';
import logoTab2x from '../../../images/start_page/Tablet/goose_logoTablet@2x.png';
import logoMob from '../../../images/start_page/Mobile/goose_logoMobile@1x.png';
import logoMob2x from '../../../images/start_page/Mobile/goose_logoMobile@2x.png';

import logoDesk_wp from '../../../images/start_page/Desktop/goose_logoDesktop@1x.webp';
import logoDesk2x_wp from '../../../images/start_page/Desktop/goose_logoDesktop@2x.webp';
import logoTab_wp from '../../../images/start_page/Tablet/goose_logoTablet@1x.webp';
import logoTab2x_wp from '../../../images/start_page/Tablet/goose_logoTablet@2x.webp';
import logoMob_wp from '../../../images/start_page/Mobile/goose_logoMobile@1x.webp';
import logoMob2x_wp from '../../../images/start_page/Mobile/goose_logoMobile@2x.webp';

import {
  Section,
  Container,
  LogoSection,
  Img,
  MainTitle,
  MainTitleSpan,
  NavBox,
  SignUp,
  LogIn,
  SignUpMob,
  SvgLogIn,
} from './AuthSection.styled';

const AuthSection = () => {
  return (
    <Section>
      <Container>
        <LogoSection to={'/'}>
          <picture>
            <source
              type="image/webp"
              alt="Logo goose"
              srcSet={`${logoDesk_wp} 1440w, ${logoDesk2x_wp} 2880w,  ${logoTab_wp} 768w, ${logoTab2x_wp} 1536w, ${logoMob_wp} 375w, ${logoMob2x_wp} 750w,`}
              src={logoMob_wp}
            />
            <Img
              alt="Logo goose"
              srcSet={`${logoDesk} 1440w, ${logoDesk2x} 2880w,  ${logoTab} 768w, ${logoTab2x} 1536w, ${logoMob} 375w, ${logoMob2x} 750w,`}
              src={logoMob}
            />
          </picture>
          <MainTitle>
            G<MainTitleSpan>oo</MainTitleSpan>seTrack
          </MainTitle>
        </LogoSection>
        <NavBox>
          <SignUp to={'/register'}>Sign Up</SignUp>

          <LogIn to={'/login'}>
            Log in <SvgLogIn />
          </LogIn>

          <SignUpMob to={'/register'}>Sign Up</SignUpMob>
        </NavBox>
      </Container>
    </Section>
  );
};

export default AuthSection;
