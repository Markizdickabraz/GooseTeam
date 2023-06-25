import styled from '@emotion/styled';
import { DEVICE_SIZE } from 'styles/deviceWidth';

export const Wrap = styled.div`
  @media (min-width: ${DEVICE_SIZE.desktop}) {
    position: fixed;
    bottom: 24px;
    left: 24px;
  }
`;