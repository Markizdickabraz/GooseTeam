import 'modern-normalize';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './header/header';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/authorization/operations';
import { Toaster } from 'react-hot-toast';
import { RestrictedRoute } from './routes/RestrictedRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import { ResendEmainRoute } from './routes/ResendEmailRoute';

const Start = lazy(() => import('../pages/Start'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const User = lazy(() => import('../pages/User'));
const Statistics = lazy(() => import('../pages/Statistics'));
const ResendVerify = lazy(() => import('../pages/ResendVerify'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const ChoosedMonth = lazy(() => import('../pages/CalendarPage/ChoosedMonth'));
const ChoosedDay = lazy(() => import('../pages/CalendarPage/ChoosedDay'));

const NotFound = lazy(() => import('../pages/NotFound'));
const VerifyPage = lazy(() => import('../pages/VerifyPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/account" component={<Start />} />
          }
        />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/account" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/account" component={<Login />} />
          }
        />
        <Route path="/verify/:verificationToken" element={<VerifyPage />} />

        <Route
          path="/register/resend-email"
          element={
            <ResendEmainRoute
              redirectTo="/register"
              component={<ResendVerify />}
            />
          }
        />

        <Route
          path="/account"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Header />
              <PrivateRoute redirectTo="/login" component={<User />} />
            </Suspense>
          }
        />

        <Route
          path="/statistics"
          element={
            <>
              <Header />
              <PrivateRoute redirectTo="/login" component={<Statistics />} />
            </>
          }
        />
        <Route
          path="calendar"
          element={
            <>
              <Header />
              <PrivateRoute redirectTo="/login" component={<CalendarPage />} />
            </>
          }
        >
          <Route path="month/:currentDate" element={<ChoosedMonth />} />
          <Route path="day/:currentDay" element={<ChoosedDay />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster position="bottom-right" reverseOrder={false} />
    </Suspense>
  );
};

export { App };
