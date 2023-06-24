import 'modern-normalize';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import ChoosedMonth from 'pages/CalendarPage/ChoosedMonth';
import ChoosedDay from 'pages/CalendarPage/ChoosedDay';

const Start = lazy(() => import('../pages/Start'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const User = lazy(() => import('../pages/User'));
const Statistics = lazy(() => import('../pages/Statistics'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/account"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <User />
            </Suspense>
          }
        />
        <Route path="statistics" element={<Statistics />} />
        <Route path="calendar" element={<CalendarPage />}>
          <Route path="month/:currentDate" element={<ChoosedMonth />} />
          <Route path="day/:currentDay" element={<ChoosedDay />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export { App };
