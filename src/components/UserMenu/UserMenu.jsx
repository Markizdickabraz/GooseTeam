import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "redux/authorization/selectors";
import { logOut } from "redux/authorization/operations";

import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const clickHandler = e => {
    dispatch(logOut());
  };

  return (
    <div className={css.box}>
      <p className={css.email}>{user.email}</p>
      <button className={css.button} onClick={clickHandler}>Logout</button>
    </div>
  );
};

export { UserMenu };
