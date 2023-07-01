import { useState } from 'react';
import { AddTaskBtn } from './AddTaskBtn';
import { ColumnHeadBar } from './ColumnHeadBar';
import { ColumnTasksList } from './ColumnTasksList';
import { TaskColumn } from './TasksColumn.styled';

export const TasksColumn = ({ title, tasks, category }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <TaskColumn>
      <ColumnHeadBar title={title} />
      <ColumnTasksList
        tasks={tasks}
        category={category}
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
      />
      <AddTaskBtn
        setIsAddModalOpen={setIsAddModalOpen}
      />
    </TaskColumn>
  );
};
