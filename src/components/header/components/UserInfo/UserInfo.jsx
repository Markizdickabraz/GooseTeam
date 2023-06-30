import {
  Wrapper,
  UserName,
  UserPicture,
  UserNameIcon,
  BackgroundName,
} from './UserInfo.styled';
import { useAuth } from 'hooks/useAuth';

export const UserInfo = () => {
  const { name, avatarURL } = useAuth();

  let avatarUrl;
  if (avatarURL.match(/^https:\/\/.*/)) {
    avatarUrl = `${avatarURL}`;
  } else {
    avatarUrl = `https://${avatarURL}`;
  }

  const displayName = avatarURL ? (
    <img src={avatarUrl} alt="UserPicture" />
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
