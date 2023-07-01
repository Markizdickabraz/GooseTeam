import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
import { format } from 'date-fns';
import { useState } from 'react';

export const TaskColumnCard = ({
  task,
  isNewTask,
  setIsNewTask,
  category,
  isAddModalOpen,
  setIsAddModalOpen,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentDay } = useParams();
  const date = format(new Date(currentDay), 'yyyy-MM-dd');
  const newTask = {
    date,
    category,
  };
  
  const { avatarURL } = useSelector(selectUser);
  const handleClick = () => {
    setIsModalOpen(false);
    setIsAddModalOpen(false);
  };
  return (
    <TaskCard>
      <TaskTitle>{task.title}</TaskTitle>
      <Box>
        <Wrapper>
          <AvatarWrapper>
            <Avatar src={avatarURL} alt="user avatar" />
          </AvatarWrapper>
          <Level priority={task.priority}>{task.priority}</Level>
        </Wrapper>
        <TaskToolbar
          taskId={task._id}
          setIsNewTask={setIsNewTask}
          setIsModalOpen={setIsModalOpen}
        />
      </Box>
      {(isModalOpen || isAddModalOpen) && (
        <TaskModal
          close={handleClick}
          create={isNewTask}
          task={isNewTask ? newTask : task}
        />
      )}
    </TaskCard>
  );
};
