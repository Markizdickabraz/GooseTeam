import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/authorization/selectors';
import { TaskToolbar } from './TaskToolbar';
import TaskModal from '../TaskModal/TaskModal';
import {
  TaskCard,
  TaskTitle,
  Box,
  AvatarWrapper,
  Avatar,
  Level,
  Wrapper,
} from './TaskColumnCard.styled';

import { useState } from 'react';

export const TaskColumnCard = ({ task, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { avatarURL } = useSelector(selectUser);

  const shortTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    }

    return title.substring(0, maxLength) + '...';
  };
  return (
    <TaskCard>
      <TaskTitle>{shortTitle(task.title, 30)}</TaskTitle>
      <Box>
        <Wrapper>
          <AvatarWrapper>
            <Avatar src={avatarURL} alt="user avatar" />
          </AvatarWrapper>
          <Level priority={task.priority}>{task.priority}</Level>
        </Wrapper>
        <TaskToolbar
          category={category}
          task={task}
          setIsModalOpen={setIsModalOpen}
        />
      </Box>
      {isModalOpen && (
        <TaskModal
          close={() => setIsModalOpen(false)}
          create={false}
          task={task}
        />
      )}
    </TaskCard>
  );
};
