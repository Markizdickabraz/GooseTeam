import React, { useState, useEffect, useRef } from 'react';
import {
  AvatarContainer,
  AvatarImg,
  UpdateAvatarButton,
} from './Account.styled';
import { AiOutlinePlus } from 'react-icons/ai';

// import Sprite from '../../../images/svg/sprite.svg';

export const Thumb = ({ file, setFieldValue }) => {
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

  return (
    <AvatarContainer>
      <AvatarImg
        src={
          file
            ? thumb
            : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAaVBMVEX///8rLzKjpKUYHSEoLC8kKSwgJSgAAADq6uojJysdIiY7PkH6+vr39/cJEhcRGBw1ODvc3Nx4entlZ2kAAAtRU1WwsbJsbm/Nzc6rq6xgYmSdn58ADBK4ubrFxcaXmJmChISPkJJFSEoK/7hlAAADuUlEQVR4nO2bbZeyLBCAMxCBEl8qTVMz//+PvHXbTp3SkpGhfc7D9XU/7HVgnIEZWq0cDofD4XA4HH8IfqyL9bqoj/zLIklRSqUi0hMpJcsi+ZZJmJVCMe8BpkSZhV9Q4SdR+d4LfiVOtvdrW3uEvqoMUOLVW5suPK8mVH50qtzi4jRKTqsMSNXYcinkm2X5XRxZ2HFZB59UBoK1FZdojovnRRZsmqmv6GWnCHrcJMFMl94mQM7HYck+W9xgJW42Pqv5Lp6nzpguXMult8FMfu2HZPeMbPFckplf9Z0IL4ZboitDWiwXvpn9Wd+gG6yoqbUXpl+aGkkm1QzfAZkiyXwu1q9QiePCZ1XrZwKcoKkriEyFEzQXQPz2EXxBkUk1auQdhhPBuYDIiBxFZjdyTfqMv3MyVmX+VMzoHmauIB1pTtqnmYHohCLT7CEye5wLSwirTUg3hA7wOfkdjguoOCGVptXqCPi2xRFJJtTfJ79Du1QWmne4/haH16bRvh7gXQ5W83szN3B7NLFW1Pgxpsuq1utCYF2afrlo2CisHHMjPMw+CbMDeueexzNTn4gtdKaTeUHsx1YmLImasVNMWZr28MPHdBMdrE0PwvR9M5iS1ObUKZNvjhNEZhZVVsPi0AkdQq0uy5UkJUQ87RYVhKTfmVPyrBQVYfQXRipRZt+b4W55c9l1m9jz4k23uzTc6jxw3Cjp+b7H32D7dh3e/9Uw/NT5xWSk8oJurM22eRoTv88y+Ui89hGd95nGJ3FqQyds/WstoFLR/Nw8/E/enHOqrt1iSliLnfvC9f6hLPU5Tu0D0ZV5XnYi2KvHLEhlsEbVScbqNRVMSvacjAeiA2I2LiLN7isjWJe4MJ87RX5YNZKjbNWMI9UYEcaxfNZhcwxWGQ+cxAM1XgeMH80TD9R3vSI8ozZcgtflZ218g+lY4xo5jsnL5QE0aXqElKZcTotdzPWmj9rNszGUkU4joK04hplWI2w0+YqJjjBsgDyGgaFyvvCrvsMWT56OhjZpIFoawzpvrD7BFiabI2j6NoVctjSwUeCkTLvEhTPAw5Bp6KKCmYHeYkxTLekilUaS7x1/QQgnsdFd6vdpwaEvM1IiH1kwTciNfksDC55gGQ7fgQrqYq5G3gFXS9iI/z3gBwAmjpvPEOjx02wtuAKtCFvYg5n3iBzW7wtN598BH/iUOzxgyACvc7wzXAwGaAf7tgHPf2fIAN8AOBkn89+W8X5+k2iWyIPJhGsUvvHTRofD4XA4HI7/I/8Aftw5S5yQMNQAAAAASUVORK5CYII='
        }
        alt="avatar"
      />

      <input
        ref={inputFileRef}
        id="avatar"
        name="avatar"
        type="file"
        onChange={event => {
          setFieldValue('avatar', event.currentTarget.files[0]);
        }}
        style={{ display: 'none' }}
      />

      <div>
        <UpdateAvatarButton
          type="button"
          onClick={() => inputFileRef.current.click()}
        >
          <AiOutlinePlus color="white" />

          {/* <span width="13" height="13">
            <use href={`${Sprite}#log-in`}></use>
          </span> */}
        </UpdateAvatarButton>
      </div>
    </AvatarContainer>
  );
};

export default Thumb;
