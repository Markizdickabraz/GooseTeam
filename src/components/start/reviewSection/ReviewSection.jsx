import ReactSwipe from 'react-swipe';
import { useState, useEffect } from 'react';
import { FeatchRewievs } from '../../../services/ApiGetRewievs';
import { RewievGalleryItem } from './RewievGalleryItem';
import {
  MainContainer,
  RewievContainer,
  Arrow,
  ButtonContainer,
  SectionTitle,
  RewiewStyled,
} from './reviewSectionStyled';

import { ReactComponent as Right } from '../../../images/start_page/right-arrow.svg';
import { ReactComponent as Left } from '../../../images/start_page/left-arrow.svg';

const ReviewSection = () => {
  const [searchRewievs, setSearchRewievs] = useState([]);

  let reactSwipeEl;

  useEffect(() => {
    async function FeatchDataRewievs() {
      try {
        const galleryReviews = await FeatchRewievs();
        setSearchRewievs(prev => [...prev, ...galleryReviews]);
      } catch (error) {
        console.log(error);
      }
    }
    FeatchDataRewievs();
  }, []);

  const startSlide = 0;
  const swipeOptions = {
    startSlide:
      startSlide < searchRewievs.length && startSlide >= 0 ? startSlide : 0,
    auto: 1000,
    speed: 1000,
    disableScroll: true,
    continuous: true,
    callback() {},
    transitionEnd() {},
  };

  return (
    <MainContainer>
      <SectionTitle>Reviews</SectionTitle>
      <RewievContainer>
        {searchRewievs.length === 0 ? (
          <RewiewStyled
            style={{
              fontSize: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {' '}
            No any reviews yet
          </RewiewStyled>
        ) : (
          <>
            <ReactSwipe
              ref={el => (reactSwipeEl = el)}
              className="mySwipe"
              swipeOptions={swipeOptions}
            >
              {searchRewievs.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: '20px' }}>
                  <RewievGalleryItem item={item} />
                </div>
              ))}
            </ReactSwipe>
            <ButtonContainer>
              <Arrow onClick={() => reactSwipeEl.next()}>
                <Left />
              </Arrow>
              <Arrow onClick={() => reactSwipeEl.prev()}>
                <Right />
              </Arrow>
            </ButtonContainer>
          </>
        )}
      </RewievContainer>
    </MainContainer>
  );
};

export default ReviewSection;
