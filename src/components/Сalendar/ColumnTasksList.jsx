import { TasksList } from './ColumnTasksList.styled';
import { TaskColumnCard } from './TaskColumnCard';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useParams } from 'react-router-dom';
import { format, isSameDay } from 'date-fns';
import 'overlayscrollbars/overlayscrollbars.css';
import './Scrollbar.css';
import TaskModal from '../TaskModal/TaskModal';

export const ColumnTasksList = ({
  tasks,
  category,
  isAddModalOpen,
  setIsAddModalOpen,
}) => {
  const { currentDay } = useParams();
  const date = format(new Date(currentDay), 'yyyy-MM-dd');
  const newTask = {
    date,
    category,
  };

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
              key={task._id}
              task={task}
              category={category}
            />
          ) : (
            false
          );
        })}
        {isAddModalOpen && (
          <TaskModal
            close={() => setIsAddModalOpen(false)}
            create={true}
            task={newTask}
          />
        )}
      </TasksList>
    </OverlayScrollbarsComponent>
  );
};
