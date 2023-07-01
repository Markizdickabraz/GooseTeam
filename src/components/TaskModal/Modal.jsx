import { useEffect, useRef } from 'react';

// import { GrClose } from 'react-icons/gr';
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

    document.addEventListener('keydown', escHandler);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      containerRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 1);

    return () => {
      document.removeEventListener('keydown', escHandler);
      document.body.style.overflow = 'auto';
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
