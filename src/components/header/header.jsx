import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { UserInfo } from './components/UserInfo/UserInfo';
import { useLocation } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';

import {
  Wrapper,
  Info,
  SectionTitle,
  Toggler,
  FeedbackBtn,
  MotivationTask,

} from './Header.styled';

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  let title = '';
  if (currentPath.startsWith('/account')) {
    title = 'User Profile';
  } else if (currentPath.startsWith('/calendar/')) {
    title = 'Calendar';
  } else {
    title = '';
  }
  return (
    <>
      <Wrapper>
        <div>
          <SectionTitle>{title}</SectionTitle>

          <MotivationTask>
            Let go of the past and focus on the present!
          </MotivationTask>
        </div>
        <Toggler>
          <use href={`${sprite}#menu`} />
        </Toggler>
        <FeedbackBtn>Feedback</FeedbackBtn>
        <Info>
          <ThemeToggler />
          <UserInfo />
        </Info>
      </Wrapper>
      
    </>
  );
};

export default Header;
