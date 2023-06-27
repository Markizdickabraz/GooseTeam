import 'modern-normalize';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './header/Header';
import Month from 'components/calendar/Month';
import Day from 'components/calendar/Day';
// import CalendarPage from 'pages/CalendarPage/CalendarPage';

const Start = lazy(() => import('../pages/Start'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const User = lazy(() => import('../pages/User'));
const Statistics = lazy(() => import('../pages/Statistics'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const VerifyPage = lazy(() => import('../pages/VerifyPage'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify/:verificationToken" element={<VerifyPage />} />

        <Route
          path="/account"
          element={
            <Suspense fallback={<div>Loading...</div>}>
             <Header/> <User />
            </Suspense>
          }
        />
        <Route path="statistics" element={<><Header/><Statistics /></>} />
        <Route path="calendar" element={<><Header/><CalendarPage /></>}>
          <Route path="calendar/month/:currentDate" element={<Month />} />
          <Route path="calendar/day/:currentDay" element={<Day />} />
</Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export { App };
