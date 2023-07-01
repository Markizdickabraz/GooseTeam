import { FiPlus } from 'react-icons/fi';
import { Button, ButtonText } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ setIsAddModalOpen, setIsNewTask }) => {
  const handleClick = () => {
    setIsAddModalOpen(true);
    setIsNewTask(true);
  };
  return (
    <Button onClick={handleClick} type="button">
      <div style={{ height: 24 }}>
        <FiPlus size={24} />
      </div>
      <ButtonText>Add task</ButtonText>
    </Button>
  );
};
