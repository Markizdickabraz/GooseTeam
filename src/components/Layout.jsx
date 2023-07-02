import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from 'hooks/useAuth';
import Header from './header/header';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn && <Header />}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
