import  LogoutBtn  from './subComponents/LogOutBtn';
import  UserNav  from './subComponents/UserNav';
import sprite from 'images/svg/sprite.svg';

import gooseLogo1x from 'images/sidebar/goose_logo@1x.png';
import gooseLogo2x from 'images/sidebar/goose_logo@2x.png';

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
        <GooseImg
          srcSet={`${gooseLogo1x} 1x, ${gooseLogo2x} 2x`}
          alt="goose"
        />
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