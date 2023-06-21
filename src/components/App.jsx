import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsRefreshing } from '../redux/authorization/selectors';
import { refreshUser } from '../redux/authorization/operations';

import { Routes, Route } from 'react-router-dom';

const Start = lazy(() => import('../pages/Start'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Layout = lazy(() => import('./Layout/Layout'));
const User = lazy(() => import('../pages/User'));
const Statistics = lazy(() => import('../pages/Statistics'));
const Calendar = lazy(() => import('../pages/Calendar'));
const Day = lazy(() => import('../pages/Day'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Loading...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route path="account" element={<User />} />
        <Route path="statistics" element={<Statistics />} />
        {/* <Route path="calendar" element={<Calendar />} /> */}
        <Route path="calendar/month/:currentDate" element={<Calendar />} />
        <Route path="calendar/day/:currentDay" element={<Day />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { App };
