import { TasksList } from './ColumnTasksList.styled';
import { TaskColumnCard } from './TaskColumnCard';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import './Scrollbar.css';

export const ColumnTasksList = () => {
  return (
    <OverlayScrollbarsComponent
      element="div"
      options={{
        overflow: {
          y: 'scroll',
          x: 'hidden',
        },
      }}
      defer
    >
      <TasksList>
        <TaskColumnCard />
        <TaskColumnCard />
        <TaskColumnCard />
        <TaskColumnCard />
        <TaskColumnCard />
        <TaskColumnCard />
        <TaskColumnCard />
        <TaskColumnCard />
        <TaskColumnCard />
      </TasksList>
    </OverlayScrollbarsComponent>
  );
};
