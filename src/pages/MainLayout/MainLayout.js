// import { useState } from 'react';
// import { Outlet } from 'react-router-dom';

// import { Header } from 'components/header/Header';
// import { SideBar } from 'components/Sidebar';
// import { MainWrapper } from 'styles/components';
// import { Wrapper, WrapperForSideBar } from './MainLayoutStyled';

// export default function MainLayout() {
//   const [isVisible, setVisible] = useState(false);
//   const toggleSidebar = () => setVisible(isVisible => !isVisible);

//   return (
//     <>
//       <Wrapper>
//         <WrapperForSideBar>
//           {isVisible && <SideBar onToggle={toggleSidebar} />}
//         </WrapperForSideBar>
//         <MainWrapper>
//           <Header onToggle={toggleSidebar} />
//           <Outlet />
//         </MainWrapper>
//       </Wrapper>
//     </>
//   );
// }
