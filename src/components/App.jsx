import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsRefreshing } from '../redux/authorization/selectors';
import { refreshUser } from '../redux/authorization/operations';

// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';

import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';

const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));
const HomePage = lazy(() => import('../pages/HomePage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </div>

    isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      
    )
  );
};

export { App };
