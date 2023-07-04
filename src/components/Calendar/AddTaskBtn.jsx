import { FiPlus } from 'react-icons/fi';
import { Button, ButtonText,Svg } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ setIsAddModalOpen }) => {
  return (
    <Button onClick={() => setIsAddModalOpen(true)} type="button">
      <Svg>
        <FiPlus size={24} />
      </Svg>
      <ButtonText>Add task</ButtonText>
    </Button>
  );
};
