import { Outlet } from 'react-router-dom';

import Header from '../header/header';
import SideBar from '../Sidebar';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;

  padding-left: 0;
  padding-right: 0;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1151px;
  }
`;

export const MainLayout = () => {
  return (
    <Wrapper>
      <SideBar
        onToggle={() => {
          console.log('Hello');
        }}
      />
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Wrapper>
  );
};
