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
  // Overlay,
} from './SidebarStyled';

const SideBar = ({ onToggle, opened }) => {
  const sidebarRef = useRef();
  // if (window.innerWidth < 1440) {
  //   sidebarRef.current.style.transform = opened
  //     ? 'translateX(0)'
  //     : 'translateX(-290px)';
  // }

  // sidebarRef.current.style.transform = opened
  // ? 'translateX(0)'
  // : 'translateX(-290px)';

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

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onToggle]);

  useEffect(() => {
    if (window.innerWidth < 1440) {
      sidebarRef.current.style.transform = opened
        ? 'translateX(0)'
        : 'translateX(-290px)';
    }
  });

  const handleLinkClick = () => {
    if (window.innerWidth < 1440) {
      onToggle();
    }
  };

  return (
    <>
      {/* <Overlay onClick={onToggle} /> */}
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
