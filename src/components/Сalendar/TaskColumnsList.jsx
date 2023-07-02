import { useSelector } from 'react-redux';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import {
  selectDoneTasks,
  selectInProgressTasks,
  selectToDoTasks,
} from '../../redux/tasks/selectors';
import { TasksColumn } from './TasksColumn';
import { ColumnsList } from './TaskColumnsList.styled';
import 'overlayscrollbars/overlayscrollbars.css';
import './Scrollbar.css';

export const TaskColumnsList = () => {
  const toDoTasks = useSelector(selectToDoTasks);
  const inProgressTasks = useSelector(selectInProgressTasks);
  const doneTasks = useSelector(selectDoneTasks);
  return (
    <ColumnsList>
      <TasksColumn title={'To do'} tasks={toDoTasks} category={'to-do'} />
      <TasksColumn
        title={'In progress'}
        tasks={inProgressTasks}
        category={'in-progress'}
      />
      <TasksColumn title={'Done'} tasks={doneTasks} category={'done'} />
    </ColumnsList>
  );
};
