import { TasksColumn } from './TasksColumn';

export const TaskColumnsList = () => {
  return (
    <div className="task-columns-list">
      <TasksColumn title={'To do'} />
      <TasksColumn title={'In progress'} />
      <TasksColumn title={'Done'} />
    </div>
  );
};
