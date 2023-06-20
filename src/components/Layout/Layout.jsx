import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsFillBookFill } from 'react-icons/bs';

import { selectIsLoggedIn } from '../../redux/authorization/selectors';
import { UserMenu } from '../UserMenu/UserMenu';

import css from './Layout.module.css';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1 className={css.title}>
          <BsFillBookFill className={css.icon} /> Phonebook
        </h1>
        <nav className={css.navigation}>
          <ul className={css.subnavigation}>
            <li>
              <NavLink className={css.link} to="/">
                Home
              </NavLink>
            </li>
            {isLoggedIn && (
              <li>
                <NavLink className={css.link} to="/contacts">
                  Contacts
                </NavLink>
              </li>
            )}
          </ul>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <ul className={css.subnavigation}>
              <li>
                <NavLink className={css.link} to="/register">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink className={css.link} to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export { Layout };
