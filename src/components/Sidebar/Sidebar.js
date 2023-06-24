import { LogoutBtn } from './subComponents/LogOutBtn';
import { UserNav } from './subComponents/UserNav';
//додати лого гуся відповідного
import goose from 'goose.svg';
//потрібно додати шлях до спрайт
import sprite from 'sprite.svg';

import {
  SidebarTitle,
  SidebarWrapper,
  SidebarLogo,
  GooseImg,
  CloseIcon,
  SidebarSubTitle,
} from './SidebarStyled';

const SideBar = ({ onToggle }) => {
  return (
    <SidebarWrapper>
      <SidebarLogo>
        <GooseImg src={goose} alt="goose" />
        <SidebarTitle>Goose Track</SidebarTitle>
        <CloseIcon
          onClick={() => {
            onToggle();
          }}
              >
          <use href={`${sprite}#x-close`} />
        </CloseIcon>
      </SidebarLogo>
      <SidebarSubTitle>User Panel</SidebarSubTitle>
      <UserNav />
      <LogoutBtn />
    </SidebarWrapper>
  );
};

export default SideBar;