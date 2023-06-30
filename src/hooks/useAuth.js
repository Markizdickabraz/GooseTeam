import { useSelector } from 'react-redux';
import {selectIsLoggedIn, selectUser, selectIsRefreshing, selectAccessToken} from '../redux/authorization/selectors'
 

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, email, phone, birthday, skype, userImgUrl } =
    useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const accessToken = useSelector(selectAccessToken);

  return {
    isRefreshing,
    isLoggedIn,
    name,
    email,
    phone,
    birthday,
    skype,
    userImgUrl,
    accessToken,
  };
};