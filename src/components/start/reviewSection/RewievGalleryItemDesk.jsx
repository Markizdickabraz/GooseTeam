import {
  RewiewStyled,
  StarContainer,
  Name,
  Comment,
  ImgContainer,
} from './reviewSectionStyled';
import { BsFillStarFill } from 'react-icons/bs';

export const RewievGalleryItemDesk = ({ item }) => {
  // const FirstLetterAvatar = item.owner.hit.name.split('')[0].toUpperCase();
  return (
    <>
      <RewiewStyled>
        <div style={{ display: 'flex' }}>
          <ImgContainer>
            {item.hit.owner.avatarURL ? (
              <img
                src={item.hit.owner.avatarURL}
                alt={item.hit.owner.name}
                style={{ width: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div>{item.hit.owner.name.split('')[0].toUpperCase()}</div>
            )}
          </ImgContainer>
          <div>
            <Name>{item.hit.owner.name.trim()}</Name>
            <StarContainer value={item.hit.reting}>
              <li>
                <BsFillStarFill />
              </li>
              <li>
                <BsFillStarFill />
              </li>
              <li>
                <BsFillStarFill />
              </li>
              <li>
                <BsFillStarFill />
              </li>
              <li>
                <BsFillStarFill />
              </li>
            </StarContainer>
          </div>
        </div>
        <Comment> {item.hit.comment}</Comment>
      </RewiewStyled>
      {item.hit2 && (
        <RewiewStyled>
          <div style={{ display: 'flex' }}>
            <ImgContainer>
              {item.hit2.owner.avatarURL ? (
                <img
                  src={item.hit2.owner.avatarURL}
                  alt={item.hit2.owner.name}
                  style={{ width: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div>{item.hit2.owner.name.split('')[0].toUpperCase()}</div>
              )}
            </ImgContainer>
            <div>
              <Name>{item.hit2.owner.name.trim()}</Name>
              <StarContainer value={item.hit2.reting}>
                <li>
                  <BsFillStarFill />
                </li>
                <li>
                  <BsFillStarFill />
                </li>
                <li>
                  <BsFillStarFill />
                </li>
                <li>
                  <BsFillStarFill />
                </li>
                <li>
                  <BsFillStarFill />
                </li>
              </StarContainer>
            </div>
          </div>
          <Comment> {item.hit2.comment}</Comment>
        </RewiewStyled>
      )}
    </>
  );
};
