import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/variables';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/authorization/selectors';

export const Theme = ({ children }) => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
