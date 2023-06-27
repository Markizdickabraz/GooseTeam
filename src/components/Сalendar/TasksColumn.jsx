import { AddTaskBtn } from './AddTaskBtn';
import { ColumnHeadBar } from './ColumnHeadBar';
import { ColumnTasksList } from './ColumnTasksList';

export const TasksColumn = ({ title, todos }) => {
  return (
    <div className="task-column">
      <ColumnHeadBar title={title} />
      <ColumnTasksList />
      <AddTaskBtn />
    </div>
  );
};
