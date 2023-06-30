import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/theme/actions';
import { selectTheme } from 'redux/theme/selectors';
import { ThemeSwitch } from './ThemeToggler.styled';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeSwitch
      type="checkbox"
      id="themeSwitch"
      checked={theme === 'dark'}
      onChange={handleThemeToggle}
    />
  );
};
