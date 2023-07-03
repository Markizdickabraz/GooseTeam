import { format } from 'date-fns';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskModal from '../TaskModal/TaskModal';
import { AddTaskBtn } from './AddTaskBtn';
import { ColumnHeadBar } from './ColumnHeadBar';
import { ColumnTasksList } from './ColumnTasksList';
import { TaskColumn } from './TasksColumn.styled';

export const TasksColumn = ({ title, tasks, category }) => {
  const { currentDay } = useParams();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const date = format(new Date(currentDay), 'yyyy-MM-dd');
  const newTask = {
    date,
    category,
  };

  return (
    <TaskColumn key={title}>
      <ColumnHeadBar setIsAddModalOpen={setIsAddModalOpen} title={title} />
      <ColumnTasksList
        tasks={tasks}
        category={category}
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
      />
      <AddTaskBtn setIsAddModalOpen={setIsAddModalOpen} />
      {isAddModalOpen && (
        <TaskModal
          close={() => setIsAddModalOpen(false)}
          create={true}
          task={newTask}
        />
      )}
    </TaskColumn>
  );
};
