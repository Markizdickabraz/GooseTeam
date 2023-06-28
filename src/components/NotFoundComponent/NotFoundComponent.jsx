import Desk_1x from '../../images/not_found/404Desktop@1x.png';
import Desk_2x from '../../images/not_found/404Desktop@2x.png';

import Tablet_1x from '../../images/not_found/404Tablet@1x.png';
import Tablet_2x from '../../images/not_found/404Tablet@2x.png';

import Mobile_1x from '../../images/not_found/404Mobile@1x.png';
import Mobile_2x from '../../images/not_found/404Mobile@2x.png';

import {
  Img,
  Box404,
  Number,
  HomePage,
  Error,
} from './NotFoundComponent.styled';

const NotFoundComponent = () => {
  return (
    <>
      <Box404>
        <Number>4</Number>
        <Number>4</Number>
        <Img
          alt="goose"
          srcSet={`${Desk_1x} 1440w, ${Desk_2x} 2880w,  ${Tablet_1x} 768w, ${Tablet_2x} 1536w, ${Mobile_1x} 375w, ${Mobile_2x} 750w,`}
          src={Mobile_1x}
        />
      </Box404>
      <Error>
        <p>We’re sorry, the page you requested could not be found.</p>
        <HomePage to={'/'}>Please go back to the homepage.</HomePage>
      </Error>
    </>
  );
};
export default NotFoundComponent;
