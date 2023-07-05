import LogOutBtn from './subComponents/LogOutBtn';
import UserNav from './subComponents/UserNav';
import sprite from 'images/svg/sprite.svg';
import { useEffect, useRef } from 'react';

import gooseLogo1x from '../../images/sidebar/goose_logo@1x.png';
import gooseLogo2x from '../../images/sidebar/goose_logo@2x.png';

import {
  SidebarTitle,
  SidebarWrapper,
  SidebarLogo,
  GooseImg,
  CloseIcon,
  SidebarSubTitle,
} from './SidebarStyled';

const SideBar = ({ onToggle, opened }) => {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleOutsideClick = event => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onToggle();
      }
    };

    const handleEscapeKey = event => {
      if (event.key === 'Escape') {
        onToggle();
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 1440) {
        sidebarRef.current.style.transform = opened
          ? 'translateX(0)'
          : 'translateX(-600px)';
          sidebarRef.current.style.opacity = opened
          ? '1'
          : '0';
      } else {
        sidebarRef.current.style.transform = 'translateX(0)';
        sidebarRef.current.style.opacity = '1';
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
      window.removeEventListener('resize', handleResize);
    };
  }, [onToggle, opened]);

  const handleLinkClick = () => {
    if (window.innerWidth < 1440) {
      onToggle();
    }
  };

  return (
    <>
      <SidebarWrapper ref={sidebarRef}>
        <SidebarLogo>
          <GooseImg
            srcSet={`${gooseLogo1x} 1x, ${gooseLogo2x} 2x`}
            alt="goose"
          />
          <SidebarTitle>Goose Track</SidebarTitle>
          <CloseIcon onClick={onToggle}>
            <use href={`${sprite}#x-close`} />
          </CloseIcon>
        </SidebarLogo>
        <SidebarSubTitle>User Panel</SidebarSubTitle>
        <UserNav onLinkClick={handleLinkClick} />
        <LogOutBtn />
      </SidebarWrapper>
    </>
  );
};

export default SideBar;
