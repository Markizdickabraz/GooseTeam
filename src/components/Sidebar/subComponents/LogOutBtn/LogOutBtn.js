import { useDispatch } from 'react-redux';
import { Svg, Button } from 'styles/components';
import { Wrap } from './LogOutBtnStyled';
import sprite from 'images/svg/sprite.svg';
import { logOut } from 'redux/authorization/operations';

import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    //очистити перед виходом
    //  dispatch(auth...);
    //функція виходу
    //logOut();
    dispatch(logOut());

    navigate('/');
  };

  return (
    <Wrap>
      <Button type="button" onClick={handleLogout}>
        {' '}
        Log out
        <Svg>
          <use href={`${sprite}#log-out`} />
        </Svg>
      </Button>
    </Wrap>
  );
};

export default LogoutBtn;
