import ReactSwipe from 'react-swipe';
import { useState, useEffect } from 'react';
import { FeatchRewievs } from '../../../servises/ApiGetRewievs';
import { RewievGalleryItemDesk } from './RewievGalleryItemDesk';
import { RewievGalleryItem } from './ReviewGalleryItem';
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
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

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
  }, [windowWidth]);

  // Make a massive of two objects for sliding two element on the screen
  const slide = [];

  for (let i = 0; i < searchRewievs.length; i += 2) {
    const p = { hit: searchRewievs[i], hit2: searchRewievs[i + 1] };
    slide.push(p);
  }
  // SwipeOptions appointment
  const startSlide = 0;
  const swipeOptions = {
    startSlide:
      startSlide < searchRewievs.length && startSlide >= 0 ? startSlide : 0,
    auto: 1500,
    speed: 1500,
    disableScroll: true,
    continuous: true,
    callback() {},
    transitionEnd() {
      setWindowWidth(window.screen.width);
    },
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
              gap: '20px',
            }}
          >
            {' '}
            No any reviews yet
          </RewiewStyled>
        ) : (
          <>
            {window.screen.width > 1439 && (
              <ReactSwipe
                ref={el => (reactSwipeEl = el)}
                className="mySwipe"
                swipeOptions={swipeOptions}
              >
                {slide.map(item => (
                  <div key={item.hit.id} style={{ display: 'flex' }}>
                    <RewievGalleryItemDesk item={item} />
                  </div>
                ))}
              </ReactSwipe>
            )}
            {window.screen.width <= 1439 && (
              <ReactSwipe
                ref={el => (reactSwipeEl = el)}
                className="mySwipe"
                swipeOptions={swipeOptions}
              >
                {searchRewievs.map(item => (
                  <div key={item.id}>
                    <RewievGalleryItem item={item} />
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
      </RewievContainer>
    </MainContainer>
  );
};

export default ReviewSection;
