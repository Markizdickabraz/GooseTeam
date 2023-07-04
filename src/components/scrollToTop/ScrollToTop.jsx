import React, { useState, useEffect } from 'react';
import { TopButton } from './ScrollToTop.styled';
import ToTopButton from '../../images/start_page/toTopButton.png';

export function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (200 < window.scrollY) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <TopButton
      hidden={!showTopBtn}
      id="topButton"
      onClick={goToTop}
      alt="scroll button"
      srcSet={ToTopButton}
    />
  );
}
