import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from 'hooks/useAuth';
// import Header from './header/header';
import { MainLayout } from './MainLayout/MainLayout';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {/* {isLoggedIn && <Header />}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense> */}

      {isLoggedIn ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      )}

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
