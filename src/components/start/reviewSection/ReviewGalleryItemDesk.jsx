import {
  ReviewStyled,
  StarContainer,
  Name,
  Comment,
  ImgContainer,
} from './reviewSectionStyled';
import { BsFillStarFill } from 'react-icons/bs';

export const ReviewGalleryItemDesk = ({ item }) => {
  // const FirstLetterAvatar = item.owner.hit.name.split('')[0].toUpperCase();
  return (
    <>
      <ReviewStyled>
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
            <StarContainer value={item.hit.rating}>
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
      </ReviewStyled>
      {item.hit2 && (
        <div styled={{ marginLeft: '20px' }}>
          <ReviewStyled>
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
                <StarContainer value={item.hit2.rating}>
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
          </ReviewStyled>
        </div>
      )}
    </>
  );
};
