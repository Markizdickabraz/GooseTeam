import { useDispatch, useSelector } from 'react-redux';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import {
  selectDoneTasks,
  selectInProgressTasks,
  selectTasks,
  selectToDoTasks,
} from '../../redux/tasks/selectors';
import { TasksColumn } from './TasksColumn';
import { ColumnsList } from './TaskColumnsList.styled';
import 'overlayscrollbars/overlayscrollbars.css';
import './Scrollbar.css';
import { useEffect } from 'react';
import { getTasks } from '../../redux/tasks/operations';

export const TaskColumnsList = () => {
  const dispatch = useDispatch();
  const toDoTasks = useSelector(selectToDoTasks);
  const inProgressTasks = useSelector(selectInProgressTasks);
  const doneTasks = useSelector(selectDoneTasks);
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
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
        <TasksColumn title={'To do'} tasks={toDoTasks} category={'to-do'} />
        <TasksColumn
          title={'In progress'}
          tasks={inProgressTasks}
          category={'in-progress'}
        />
        <TasksColumn title={'Done'} tasks={doneTasks} category={'done'} />
      </ColumnsList>
    </OverlayScrollbarsComponent>
  );
};
