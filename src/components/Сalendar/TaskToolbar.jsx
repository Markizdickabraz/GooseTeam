import sprite from '../../images/svg/sprite.svg';
import { Wrapper, Button, Svg } from './TaskToolbar.styled';

export const TaskToolbar = ({ setIsModalOpen }) => {
  return (
    <Wrapper>
      <Button type="button">
        <Svg>
          <use href={sprite + '#arrow-circle'} />
        </Svg>
      </Button>
      <Button onClick={() => setIsModalOpen(true)} type="button">
        <Svg>
          <use href={sprite + '#pencil'} />
        </Svg>
      </Button>
      <Button type="button">
        <Svg>
          <use href={sprite + '#trash'} />
        </Svg>
      </Button>
    </Wrapper>
  );
};
