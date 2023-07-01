import sprite from '../../images/svg/sprite.svg';
import { Wrapper, Button, Svg } from './TaskToolbar.styled';

export const TaskToolbar = ({ setIsModalOpen, setIsNewTask }) => {
  const handleClick = () => {
    setIsModalOpen(true);
    setIsNewTask(false);
  };
  return (
    <Wrapper>
      <Button type="button">
        <Svg>
          <use href={sprite + '#arrow-circle'} />
        </Svg>
      </Button>
      <Button onClick={handleClick} type="button">
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
