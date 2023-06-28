import { TasksColumn } from './TasksColumn';
import { ColumnsList } from './TaskColumnsList.styled';

export const TaskColumnsList = () => {
  return (
    <ColumnsList >
      <TasksColumn title={'To do'} />
      <TasksColumn title={'In progress'} />
      <TasksColumn title={'Done'} />
    </ColumnsList>
  );
};
