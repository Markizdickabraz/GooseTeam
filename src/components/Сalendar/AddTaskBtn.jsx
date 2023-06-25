import { FiPlus } from 'react-icons/fi';

export const AddTaskBtn = () => {
  return (
    <button type="button" className="todo-btn">
      <FiPlus size={24} />
      <p className="button-text">Add task</p>
    </button>
  );
};
