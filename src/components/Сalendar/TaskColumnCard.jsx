import { TaskToolbar } from './TaskToolbar';
import {
  TaskCard,
  TaskTitle,
  Box,
  Avatar,
  Level,
  Wrapper,
} from './TaskColumnCard.styled';

export const TaskColumnCard = () => {
  return (
    <TaskCard>
      <TaskTitle>Картка завдання</TaskTitle>
      <Box>
        <Wrapper>
          <Avatar></Avatar>
          <Level>Level</Level>
        </Wrapper>
        <TaskToolbar />
      </Box>
    </TaskCard>
  );
};
