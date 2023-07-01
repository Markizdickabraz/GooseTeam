import React, { useState, useEffect, useRef } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import {
  AvatarContainer,
  AvatarImg,
  UpdateAvatarButton,
} from './styles/Avatar.styled';
import { ErrorMessage } from 'formik';
import { ErrorText } from './styles/CustomInput.styled';

export const Thumb = ({ avatar, file, setFieldValue, setIsFormDirty }) => {
  const [thumb, setThumb] = useState(undefined);
  const inputFileRef = useRef(null);

  useEffect(() => {
    if (!file) return;

    let reader = new FileReader();
    reader.onloadend = () => {
      setThumb(reader.result);
    };

    reader.readAsDataURL(file);
  }, [file]);

  let avatarUrl;
  if (avatar.match(/^https:\/\/.*/)) {
    avatarUrl = `${avatar}`;
  } else {
    avatarUrl = `https://${avatar}`;
  }

  return (
    <>
      <AvatarContainer>
        <AvatarImg src={file ? thumb : avatarUrl} alt="avatar" />

        <input
          ref={inputFileRef}
          id="avatar"
          name="avatar"
          type="file"
          onChange={event => {
            setFieldValue('avatarURL', event.currentTarget.files[0]);
            setIsFormDirty(true);
          }}
          style={{ display: 'none' }}
        />

        <div>
          <UpdateAvatarButton
            type="button"
            onClick={() => inputFileRef.current.click()}
          >
            <AiOutlinePlus color="white" />
          </UpdateAvatarButton>
        </div>
      </AvatarContainer>

      <ErrorMessage name="avatarURL" component={ErrorText} />
    </>
  );
};

export default Thumb;
