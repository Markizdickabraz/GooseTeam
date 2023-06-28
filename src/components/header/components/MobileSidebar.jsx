import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';

import SideBar from '../../Sidebar/Sidebar';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  transform: translateX(-300px);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const MobileSidebar = ({ close }) => {
    const wrapperRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            wrapperRef.current.style.transform = "translateX(0)";
        }, 5);
    }, []);

  return createPortal(
    <Wrapper ref={wrapperRef}>
      <SideBar onToggle={close} />
    </Wrapper>,
    document.body
  );
};

export { MobileSidebar };
