import 'modern-normalize';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Month from 'components/calendar/Month';
// import Day from 'components/calendar/Day';

const Start = lazy(() => import('../pages/Start'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const User = lazy(() => import('../pages/User'));
const Statistics = lazy(() => import('../pages/Statistics'));
const ResendVerify = lazy(() => import('../pages/ResendVerify'));
// const Calendar = lazy(() => import('../pages/Calendar'));
const NotFound = lazy(() => import('../pages/NotFound'));
const VerifyPage = lazy(() => import('../pages/VerifyPage'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/verify/:verificationToken" element={<VerifyPage />} />
        <Route path="/register/resend-email" element={<ResendVerify />} />

        <Route
          path="/account"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <User />
            </Suspense>
          }
        />
        <Route path="statistics" element={<Statistics />} />
        {/* <Route path="calendar" element={<Calendar />}>
          <Route path="calendar/month/:currentDate" element={<Month />} />
          <Route path="calendar/day/:currentDay" element={<Day />} />
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export { App };
