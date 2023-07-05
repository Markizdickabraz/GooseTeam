import 'modern-normalize';
import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/authorization/operations';
import { RestrictedRoute } from './routes/RestrictedRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import { ResendEmailRoute } from './routes/ResendEmailRoute';
import { Layout } from './Layout';
import NotFound from 'pages/NotFound';
import { ScrollToTop } from './scrollToTop/ScrollToTop';

const Start = lazy(() => import('../pages/Start'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const User = lazy(() => import('../pages/User'));
const Statistics = lazy(() => import('../pages/Statistics'));
const ResendVerify = lazy(() => import('../pages/ResendVerify'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const ChoosedMonth = lazy(() => import('../pages/CalendarPage/ChoosedMonth'));
const ChoosedDay = lazy(() => import('../pages/CalendarPage/ChoosedDay'));
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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute
              redirectTo="/account"
              component={
                <>
                  <ScrollToTop />
                  <Start />
                </>
              }
            />
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
            <ResendEmailRoute
              redirectTo="/register"
              component={<ResendVerify />}
            />
          }
        />

        <Route
          path="/account"
          element={<PrivateRoute redirectTo="/login" component={<User />} />}
        />
        <Route
          path="/statistics"
          element={
            <PrivateRoute redirectTo="/login" component={<Statistics />} />
          }
        />
        <Route
          path="calendar"
          element={
            <PrivateRoute redirectTo="/login" component={<CalendarPage />} />
          }
        >
          <Route path="month/:currentDate" element={<ChoosedMonth />} />
          <Route path="day/:currentDay" element={<ChoosedDay />} />
        </Route>
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export { App };
