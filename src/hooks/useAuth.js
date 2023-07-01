import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectAccessToken,
  emailUser,
} from '../redux/authorization/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, email, phone, birthday, skype, avatarURL } =
    useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const accessToken = useSelector(selectAccessToken);

  const resendEmail = useSelector(emailUser);

  return {
    isRefreshing,
    isLoggedIn,
    name,
    email,
    phone,
    birthday,
    skype,
    avatarURL,
    accessToken,
    resendEmail,
  };
};
