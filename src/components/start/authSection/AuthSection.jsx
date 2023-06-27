import logoDesk from '../../../images/start_page/Desktop/goose_logoDesktop@1x.png';
import logoDesk2x from '../../../images/start_page/Desktop/goose_logoDesktop@2x.png';
import logoTab from '../../../images/start_page/Tablet/goose_logoTablet@1x.png';
import logoTab2x from '../../../images/start_page/Tablet/goose_logoTablet@2x.png';
import logoMob from '../../../images/start_page/Mobile/goose_logoMobile@1x.png';
import logoMob2x from '../../../images/start_page/Mobile/goose_logoMobile@2x.png';

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
          <Img
            alt="Callendar view"
            srcSet={`${logoDesk} 1440w, ${logoDesk2x} 2880w,  ${logoTab} 768w, ${logoTab2x} 1536w, ${logoMob} 375w, ${logoMob2x} 750w,`}
          />
          <MainTitle>
            G<MainTitleSpan>oo</MainTitleSpan>seTrack
          </MainTitle>
        </LogoSection>
        <NavBox>
          <SignUp to={'/register'}>Sign Up</SignUp>
          <LogIn to={'/login'}>
            Log in{' '}
            <SvgLogIn
              style={{
                width: '13px',
                height: '13px',
                marginLeft: '8px',
              }}
            />
          </LogIn>
          <SignUpMob to={'/register'}>Sign Up</SignUpMob>
        </NavBox>
      </Container>
    </Section>
  );
};

export default AuthSection;
