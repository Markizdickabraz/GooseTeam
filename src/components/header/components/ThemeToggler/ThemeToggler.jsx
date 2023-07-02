import { useDispatch } from 'react-redux';
import { toggleTheme } from 'redux/authorization/authSlice';

export const ThemeToggler = () => {
  const dispatch = useDispatch();

  const handletoggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      {/* <ToggleButton>
        <ThemeIcon>
          <use href={`${sprite}#moon`} />
        </ThemeIcon>
      </ToggleButton> */}

      <button onClick={handletoggleTheme}>strhsths</button>
    </div>
  );
};
