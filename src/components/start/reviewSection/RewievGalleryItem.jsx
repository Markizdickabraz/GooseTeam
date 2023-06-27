import {
  RewiewStyled,
  StarContainer,
  Name,
  Comment,
  ImgContainer,
} from './reviewSection.styled';
import { BsFillStarFill } from 'react-icons/bs';

export const RewievGalleryItem = ({ item }) => {
  const FirstLetterAvatar = item.name.split('')[0].toUpperCase();

  return (
    <RewiewStyled>
      <div style={{ display: 'flex' }}>
        <ImgContainer>
          {item.src ? (
            <img src={item.src} alt={FirstLetterAvatar} />
          ) : (
            <div>{FirstLetterAvatar}</div>
          )}
        </ImgContainer>
        <div>
          <Name>{item.name.trim()}</Name>
          <StarContainer value={item.reting}>
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
    </RewiewStyled>
  );
};
