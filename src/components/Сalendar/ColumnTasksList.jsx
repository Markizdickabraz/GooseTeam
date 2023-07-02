import { TasksList } from './ColumnTasksList.styled';
import { TaskColumnCard } from './TaskColumnCard';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useParams } from 'react-router-dom';
import { isSameDay } from 'date-fns';
import 'overlayscrollbars/overlayscrollbars.css';
import './Scrollbar.css';

export const ColumnTasksList = ({ tasks, category }) => {
  const { currentDay } = useParams();
  return (
    <TasksList>
      {tasks.map(task => {
        return isSameDay(new Date(currentDay), new Date(task.date)) ? (
          <TaskColumnCard key={task._id} task={task} category={category} />
        ) : (
          false
        );
      })}
    </TasksList>
  );
};
