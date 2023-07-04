import { useEffect, useRef } from 'react';


import sprite from 'images/svg/sprite.svg';
import { Container, CloseBtn, Svg } from './Modal.styled';

const Modal = ({ close, children }) => {
  const containerRef = useRef();

  const closeHandler = evt => {
    close();
  };

  useEffect(() => {
    const escHandler = evt => {
      if (evt.key === 'Escape') {
        close();
      }
    };

    const clickOutHandler = evt => {
      const withinBoundaries = evt
        .composedPath()
        .includes(containerRef.current);

      if (!withinBoundaries) {
        close();
      }
    };

    document.addEventListener('keydown', escHandler);
    document.body.style.overflow = 'hidden';

    document.addEventListener('mousedown', clickOutHandler);

    setTimeout(() => {
      containerRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 1);

    return () => {
      document.removeEventListener('keydown', escHandler);
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', clickOutHandler);
    };
  }, [close]);

  return (
    <Container ref={containerRef}>
      <CloseBtn onClick={closeHandler}>
        {/* <GrClose size={12} /> */}
        <Svg width="24px" height="24px">
          <use href={`${sprite}#x-close`} />
        </Svg>
      </CloseBtn>
      {children}
    </Container>
  );
};

export { Modal };
