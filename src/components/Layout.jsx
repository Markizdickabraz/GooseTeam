import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from 'hooks/useAuth';
import { MainLayout } from './MainLayout/MainLayout';
import { Loader } from './loader/Loader';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? (
        <Suspense fallback={<Loader />}>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </Suspense>
      ) : (
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      )}

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
