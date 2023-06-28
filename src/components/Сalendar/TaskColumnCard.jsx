import { TaskToolbar } from './TaskToolbar';
import {
  TaskCard,
  TaskTitle,
  Box,
  Avatar,
  Level,
} from './TaskColumnCard.styled';

export const TaskColumnCard = () => {
  return (
    <TaskCard>
      <TaskTitle>Картка завдання</TaskTitle>
      <Box>
        <Avatar>Avatar</Avatar>
        <Level>Level</Level>
        <TaskToolbar />
      </Box>
    </TaskCard>
  );
};
