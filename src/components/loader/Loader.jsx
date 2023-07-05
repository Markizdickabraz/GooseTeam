import { Circles } from 'react-loader-spinner';
import { LoaderSection } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderSection>
      <Circles
        height="150"
        width="150"
        color="rgba(63, 81, 181, 1)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderSection>
  );
};
