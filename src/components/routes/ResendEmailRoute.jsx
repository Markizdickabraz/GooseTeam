import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const ResendEmainRoute = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn, resendEmail } = useAuth();
  const shouldRedirect = isLoggedIn || !resendEmail;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
