import { TasksColumn } from './TasksColumn';
import { ColumnsList } from './TaskColumnsList.styled';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import './Scrollbar.css';

export const TaskColumnsList = () => {
  return (
    <OverlayScrollbarsComponent
      element="div"
      options={{
        overflow: {
          x: 'scroll',
          y: 'hidden',
        },
      }}
      defer
    >
      <ColumnsList>
        <TasksColumn title={'To do'} />
        <TasksColumn title={'In progress'} />
        <TasksColumn title={'Done'} />
      </ColumnsList>
    </OverlayScrollbarsComponent>
  );
};
