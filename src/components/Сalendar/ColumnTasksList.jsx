import { TasksList } from './ColumnTasksList.styled';
import { TaskColumnCard } from './TaskColumnCard';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useParams } from 'react-router-dom';
import { isSameDay } from 'date-fns';
import 'overlayscrollbars/overlayscrollbars.css';
import './Scrollbar.css';

export const ColumnTasksList = ({
  tasks,
  isNewTask,
  setIsNewTask,
  category,
  isAddModalOpen,
  setIsAddModalOpen,
}) => {
  const { currentDay } = useParams();
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
        {tasks.map(task => {
          return isSameDay(new Date(currentDay), new Date(task.date)) ? (
            <TaskColumnCard
              key={task.id}
              task={task}
              isNewTask={isNewTask}
              setIsNewTask={setIsNewTask}
              category={category}
              isAddModalOpen={isAddModalOpen}
              setIsAddModalOpen={setIsAddModalOpen}
            />
          ) : (
            false
          );
        })}
      </TasksList>
    </OverlayScrollbarsComponent>
  );
};
