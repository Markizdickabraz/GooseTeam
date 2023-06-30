import React from 'react';
//import { useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import {
  Wrapper,
  UserName,
  UserPicture,
  UserNameIcon,
  BackgroundName,
} from './UserInfo.styled';

export const UserInfo = () => {
  const { name, avatarURL } = useAuth();

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