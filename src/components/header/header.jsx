import { useState } from 'react';
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

import AddFeedbackModal from './AddFeedbackModal/AddFeedbackModal';

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [modalIsOpened, setModalIsOpened] = useState(false);

  const openModal = () => {
    setModalIsOpened(true);
  }

  const closeModal = () => {
    console.log('Hello!');
    setModalIsOpened(false);
  }

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
        <FeedbackBtn onClick={openModal}>Feedback</FeedbackBtn>
        <Info>
          <ThemeToggler />
          <UserInfo />
        </Info>
      </Wrapper>
      {modalIsOpened && <AddFeedbackModal close={closeModal} />}
    </>
  );
};

export default Header;
