import {
    Wrapper,
    UserName,
    UserPicture,
    UserNameIcon,
    BackgroundName,
  } from './UserInfo.styled';
  import { useAuth } from 'hooks/useAuth';

  
  export const UserInfo = () => {
  
    const { name, userImgUrl } = useAuth();
  
    const displayName = userImgUrl ? (
      <img src={userImgUrl} alt="UserPicture" />
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