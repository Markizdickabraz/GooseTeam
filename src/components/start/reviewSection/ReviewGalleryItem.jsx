import {
  ReviewStyled,
  StarContainer,
  Name,
  Comment,
  ImgContainer,
} from './reviewSectionStyled';
import { BsFillStarFill } from 'react-icons/bs';

export const ReviewGalleryItem = ({ item }) => {
  const FirstLetterAvatar = item.owner.name.split('')[0].toUpperCase();
  return (
    <>
      <ReviewStyled>
        <div style={{ display: 'flex' }}>
          <ImgContainer>
            {item.owner.avatarURL ? (
              <img
                src={item.owner.avatarURL}
                alt={item.owner.name}
                style={{ width: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div>{FirstLetterAvatar}</div>
            )}
          </ImgContainer>
          <div>
            <Name>{item.owner.name.trim()}</Name>
            <StarContainer value={item.rating}>
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
        <Comment> {item.comment}</Comment>
      </ReviewStyled>
    </>
  );
};
