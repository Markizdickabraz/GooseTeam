import { selectTheme } from 'redux/authorization/selectors';
import sprite from '../../../../images/svg/sprite.svg';
import { ThemeIcon, ToggleButton } from './ThemeToggler.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/authorization/authSlice';

export const ThemeToggler = () => {
  const theme = useSelector(selectTheme);

  const dispatch = useDispatch();

  const handleTogglerTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <ToggleButton onClick={handleTogglerTheme}>
        <ThemeIcon>
          {theme === 'light' ? (
            <use href={`${sprite}#moon`} />
          ) : (
            <use href={`${sprite}#sun`} />
          )}
        </ThemeIcon>
      </ToggleButton>
    </div>
  );
};
