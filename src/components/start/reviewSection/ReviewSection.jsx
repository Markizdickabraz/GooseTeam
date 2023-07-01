import ReactSwipe from 'react-swipe';
import { useState, useEffect } from 'react';
import { FetchReviews } from '../../../services/ApiGetReviews';
import { ReviewGalleryItemDesk } from './ReviewGalleryItemDesk';
import { ReviewGalleryItem } from './ReviewGalleryItem';
import {
  MainContainer,
  ReviewContainer,
  Arrow,
  ButtonContainer,
  SectionTitle,
  ReviewStyled,
} from './reviewSectionStyled';

import { ReactComponent as Right } from '../../../images/start_page/right-arrow.svg';
import { ReactComponent as Left } from '../../../images/start_page/left-arrow.svg';

const ReviewSection = () => {
  const [searchReviews, setSearchReviews] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let reactSwipeEl;

  useEffect(() => {
    async function FetchDataReviews() {
      try {
        const galleryReviews = await FetchReviews();
        setSearchReviews(prev => [...prev, ...galleryReviews]);
      } catch (error) {
        console.log(error);
      }
    }
    FetchDataReviews();
  }, [windowWidth]);

  // Make a massive of two objects for sliding two element on the screen
  const slide = [];

  for (let i = 0; i < searchReviews.length; i += 2) {
    const p = { hit: searchReviews[i], hit2: searchReviews[i + 1] };
    slide.push(p);
  }
  // SwipeOptions appointment
  const startSlide = 0;
  const swipeOptions = {
    startSlide:
      startSlide < searchReviews.length && startSlide >= 0 ? startSlide : 0,
    auto: 1500,
    speed: 1500,
    disableScroll: true,
    continuous: true,
    callback() {},
    transitionEnd() {
      setWindowWidth(window.innerWidth);
    },
  };

  return (
    <MainContainer>
      <SectionTitle>Reviews</SectionTitle>
      <ReviewContainer>
        {searchReviews.length === 0 ? (
          <ReviewStyled
            style={{
              fontSize: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {' '}
            No any reviews yet
          </ReviewStyled>
        ) : (
          <>
            {window.innerWidth > 1439 && (
              <ReactSwipe
                ref={el => (reactSwipeEl = el)}
                className="mySwipe"
                swipeOptions={swipeOptions}
              >
                {slide.map(item => (
                  <div key={item.hit.id} style={{ display: 'flex' }}>
                    <ReviewGalleryItemDesk item={item} />
                  </div>
                ))}
              </ReactSwipe>
            )}
            {window.innerWidth <= 1439 && (
              <ReactSwipe
                ref={el => (reactSwipeEl = el)}
                className="mySwipe"
                swipeOptions={swipeOptions}
              >
                {searchReviews.map(item => (
                  <div key={item.id}>
                    <ReviewGalleryItem item={item} />
                  </div>
                ))}
              </ReactSwipe>
            )}
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
      </ReviewContainer>
    </MainContainer>
  );
};

export default ReviewSection;
