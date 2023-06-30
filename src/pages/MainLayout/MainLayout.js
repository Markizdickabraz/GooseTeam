import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/header/Header';
import { SideBar } from 'components/Sidebar';
import { MainWrapper } from 'styles/components';
import { Wrapper, WrapperForSideBar } from './MainLayoutStyled';
import { useWindowSize } from 'hooks/useWindowSize';

export default function MainLayout() {
  const [isVisible, setVisible] = useState(false);
  const toggleSidebar = () => setVisible(isVisible => !isVisible);

  const size = useWindowSize();

  useEffect(() => {
    setVisible(size.width > 1439 && true);
  }, [size.width]);

  return (
    <>
      <Wrapper>
        <WrapperForSideBar>
          {isVisible && <SideBar onToggle={toggleSidebar} />}
        </WrapperForSideBar>
        <MainWrapper>
          <Header onToggle={toggleSidebar} />
          <Outlet />
        </MainWrapper>
      </Wrapper>
    </>
  );
}
