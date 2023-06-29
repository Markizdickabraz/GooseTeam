import {
  Wrapper,
  UserName,
  UserPicture,
  UserNameIcon,
  BackgroundName,
} from './UserInfo.styled';
// import { useAuth } from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import {selectUser} from '../../../../redux/authorization/selectors';


export const UserInfo = () => {
  // const { name, avatarURL } = useAuth();

const user = useSelector(selectUser);
const name = user.name;
const avatarURL = user.avatarURL;

// const name = "Агент №86 Максвелл Кмітливий";
// const avatarURL = 'fastly.picsum.photos/id/596/200/200.jpg?hmac=TiMsstBNF6YKq9Gn7QGsihITEUcv_O8QuTXEVR3T6GA';

  const displayName = avatarURL ? (
    <img src={`https://${avatarURL}`} alt="UserPicture" />
  ) : (
    <BackgroundName className="initials">
      <UserNameIcon>{name}</UserNameIcon>
    </BackgroundName>
  );
  return (
    <Wrapper>
      <UserName>{name || 'Name'}</UserName>
      <UserPicture>{displayName}</UserPicture>
    </Wrapper>
  );
};
