import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

import SideBar from '../../../Sidebar/Sidebar';
import sprite from 'images/svg/sprite.svg';

import { Wrapper, CloseBtn, Svg } from './MobileSidebar.Styled';

const MobileSidebar = ({ close }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      wrapperRef.current.style.transform = 'translateX(0)';
    }, 1);
  }, []);

  const closeHandler = evt => {
    wrapperRef.current.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      close();
    }, 251);
  };

  return createPortal(
    <Wrapper ref={wrapperRef}>
      <CloseBtn onClick={closeHandler}>
        <Svg width="24px" height="24px">
          <use href={`${sprite}#x-close`} />
        </Svg>
      </CloseBtn>
      <SideBar onToggle={close} />
    </Wrapper>,
    document.body
  );
};

export { MobileSidebar };
