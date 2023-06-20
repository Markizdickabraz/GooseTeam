import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/authorization/selectors';
import { register } from '../redux/authorization/operations';

import css from './index.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      {isLoggedIn ? (
        <Navigate to="/contacts" />
      ) : (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.label}>
            Username
            <input className={css.input} type="text" name="name" />
          </label>
          <label className={css.label}>
            Email
            <input className={css.input} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <input className={css.input} type="password" name="password" />
          </label>
          <button className={css.button} type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default Register;
