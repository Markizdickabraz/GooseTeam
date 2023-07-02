import { useDispatch } from 'react-redux';
import { ContextMenu } from './ContextMenu';
import { deleteTask } from '../../redux/tasks/operations';
import sprite from '../../images/svg/sprite.svg';
import { Wrapper, Button, Svg } from './TaskToolbar.styled';
import { useState } from 'react';
import { useRef } from 'react';

export const TaskToolbar = ({ setIsModalOpen, taskId }) => {
  const [isContextMenu, setIsContextMenu] = useState(false);
  const contextMenuRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => setIsContextMenu(true)} type="button">
        <Svg>
          <use href={sprite + '#arrow-circle'} />
        </Svg>
      </Button>
      <Button onClick={() => setIsModalOpen(true)} type="button">
        <Svg>
          <use href={sprite + '#pencil'} />
        </Svg>
      </Button>
      <Button onClick={() => dispatch(deleteTask(taskId))} type="button">
        <Svg>
          <use href={sprite + '#trash'} />
        </Svg>
      </Button>
      {isContextMenu && (
        <ContextMenu
          contextMenuRef={contextMenuRef}
          setIsContextMenu={setIsContextMenu}
        />
      )}
    </Wrapper>
  );
};
