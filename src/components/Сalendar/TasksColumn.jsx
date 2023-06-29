import { AddTaskBtn } from './AddTaskBtn';
import { ColumnHeadBar } from './ColumnHeadBar';
import { ColumnTasksList } from './ColumnTasksList';
import { TaskColumn } from './TasksColumn.styled';

export const TasksColumn = ({ title, todos }) => {
  return (
    <TaskColumn>
      <ColumnHeadBar title={title} />
      <ColumnTasksList />
      <AddTaskBtn />
    </TaskColumn>
  );
};
