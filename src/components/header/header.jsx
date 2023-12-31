import { useState } from 'react';
import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { UserInfo } from './components/UserInfo/UserInfo';
import { useLocation } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';
import gooseLogo1x from '../../images/calendar/goose_logo@1x.png';
import gooseLogo2x from '../../images/calendar/goose_logo@2x.png';

import {
  Wrapper,
  Container,
  Info,
  SectionTitle,
  Toggler,
  FeedbackBtn,
  MotivationTask,
  MotivationSpan,
  LeftSubsection,
  RightSubsection,
  GooseImg,
} from './Header.styled';

import AddFeedbackModal from './AddFeedbackModal/AddFeedbackModal';

export const Header = ({showSidebar}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [modalIsOpened, setModalIsOpened] = useState(false);

  const openModal = () => {
    setModalIsOpened(true);
  };

  const closeModal = () => {
    setModalIsOpened(false);
  };

  let title = '';
  if (currentPath.startsWith('/account')) {
    title = 'User Profile';
  } else if (currentPath.startsWith('/calendar/')) {
    title = 'Calendar';
  }  else if (currentPath.startsWith('/statistics')) {
    title = 'Statistics';
  }

  let motivate = false;
  if (currentPath.startsWith('/calendar/day')) {
    motivate = true;
  }

  return (
    <>
      <Wrapper>
        <Container>
          <LeftSubsection>
            {motivate && (
              <GooseImg
                srcSet={`${gooseLogo1x} 1x, ${gooseLogo2x} 2x`}
                alt="goose"
              />
            )}
            <div>
              <SectionTitle>{title}</SectionTitle>
              {motivate && (
                <MotivationTask>
                  <MotivationSpan>Let go</MotivationSpan> of the past and focus on the present!
                </MotivationTask>
              )}
            </div>
          </LeftSubsection>
          <Toggler onClick={showSidebar}>
            <use href={`${sprite}#menu`} />
          </Toggler>

          <RightSubsection>
            <FeedbackBtn onClick={openModal}>Feedback</FeedbackBtn>

            <Info>
              <ThemeToggler />
              <UserInfo />
            </Info>
          </RightSubsection>
        </Container>
      </Wrapper>
      {modalIsOpened && <AddFeedbackModal close={closeModal} />}
    </>
  );
};

export default Header;
