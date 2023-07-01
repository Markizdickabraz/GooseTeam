import { useState } from 'react';
import { AddTaskBtn } from './AddTaskBtn';
import { ColumnHeadBar } from './ColumnHeadBar';
import { ColumnTasksList } from './ColumnTasksList';
import { TaskColumn } from './TasksColumn.styled';

export const TasksColumn = ({ title, tasks, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    return setIsModalOpen(false);
  };
  return (
    <TaskColumn>
      <ColumnHeadBar title={title} />
      <ColumnTasksList
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        tasks={tasks}
      />
      <AddTaskBtn category={category} setIsModalOpen={setIsModalOpen} />
    </TaskColumn>
  );
};
