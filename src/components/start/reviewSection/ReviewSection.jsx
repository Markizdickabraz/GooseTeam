import ReactSwipe from 'react-swipe';
import { useState, useEffect } from 'react';
import { FeatchRewievs } from '../../../servises/ApiGetRewievs';
import { RewievGalleryItem } from './RewievGalleryItem';
import {
  MainContainer,
  RewievContainer,
  Arrow,
  ButtonContainer,
  SectionTitle,
} from './reviewSection.styled';

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
    callback() {
      // console.log('slide changed');
    },
    transitionEnd() {
      // console.log('ended transition');
    },
  };

  return (
    <MainContainer>
      <SectionTitle>Rewievs</SectionTitle>
      <RewievContainer>
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
      </RewievContainer>
    </MainContainer>
  );
};

export default ReviewSection;
