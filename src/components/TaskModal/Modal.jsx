import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
`;

const Modal = ({ close, children }) => {
  const closeHandler = evt => {
    close();
  };

  return (
    <Container>
      <button onClick={closeHandler}>Close</button>
      {children}
    </Container>
  );
};

export { Modal };
