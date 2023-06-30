/*import { useLazyLogoutUserQuery } from 'redux/authorization/authApi';
//import { reauthApi } from 'redux/authorization/reauthApi';
import { useDispatch } from 'react-redux';
import { Svg, Button } from 'styles/components';
import { Wrap } from './LogOutBtnStyled';
import sprite from 'images/svg/sprite.svg';

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const [logout] = useLazyLogoutUserQuery();

  const handleLogout = () => {
    //dispatch(authApi.util.resetApiState());
    //dispatch(reauthApi.util.resetApiState());
    dispatch(logout());
    logout();
  };

  return (
    <Wrap>
      <Button type="button" onClick={handleLogout}>
        Log out
        <Svg>
          <use href={`${sprite}#log-out`} />
        </Svg>
      </Button>
    </Wrap>
  );
};

export default LogOutBtn;*/

import { logoutUser } from 'redux/authorization/authSlice';
import { useDispatch } from 'react-redux';
import { Svg, Button } from 'styles/components';
import { Wrap } from './LogOutBtnStyled';
import sprite from 'images/svg/sprite.svg';

const LogOutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser()); 
    // const logoutAsync = async () => {
    //   await dispatch(logoutUser());
    //   // Additional actions 
    // };
    // logoutAsync();
  };

  return (
    <Wrap>
      <Button type="button" onClick={handleLogout}>
        Log out
        <Svg>
          <use href={`${sprite}#log-out`} />
        </Svg>
      </Button>
    </Wrap>
  );
};

export default LogOutBtn;

