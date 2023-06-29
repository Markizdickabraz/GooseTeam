import { useState } from 'react';
import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { UserInfo } from './components/UserInfo/UserInfo';
import { useLocation } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';

import {
  Wrapper,
  Container,
  Info,
  SectionTitle,
  Toggler,
  FeedbackBtn,
  MotivationTask,
  LeftSubsection,
  RightSubsection,
} from './Header.styled';

import AddFeedbackModal from './AddFeedbackModal/AddFeedbackModal';
import { MobileSidebar } from './components/MobileSidebar';

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [sidebarIsOpened, setSidebarlIsOpened] = useState(false);

  const openModal = () => {
    setModalIsOpened(true);
  };

  const closeModal = () => {
    setModalIsOpened(false);
  };

  const showSidebar = () => {
    setSidebarlIsOpened(true);
  };

  const hideSidebar = () => {
    setSidebarlIsOpened(false);
  };

  let title = '';
  if (currentPath.startsWith('/account')) {
    title = 'User Profile';
  } else if (currentPath.startsWith('/calendar/')) {
    title = 'Calendar';
  } else {
    title = '';
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
            
            <SectionTitle>{title}</SectionTitle>
            {motivate && (
              <MotivationTask>
                Let go of the past and focus on the present!
              </MotivationTask>
            )}
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
      {sidebarIsOpened && <MobileSidebar close={hideSidebar} />}
    </>
  );
};

export default Header;
