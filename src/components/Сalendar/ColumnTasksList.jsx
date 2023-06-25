import { TaskColumnCard } from './TaskColumnCard';

export const ColumnTasksList = () => {
  return (
    <ul className='tasks-list'>
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
    </ul>
  );
};
