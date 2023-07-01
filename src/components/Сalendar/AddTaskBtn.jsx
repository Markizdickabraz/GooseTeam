import { FiPlus } from 'react-icons/fi';
import TaskModal from '../TaskModal/TaskModal';
import { Button, ButtonText } from './AddTaskBtn.styled';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

export const AddTaskBtn = ({ category, setIsModalOpen }) => {
  const { currentDay } = useParams();
  const date = format(new Date(currentDay), 'yyyy-MM-dd');
  console.log(date);
  return (
    <Button onClick={() => setIsModalOpen(true)} type="button">
      <div style={{ height: 24 }}>
        <FiPlus size={24} />
      </div>
      <ButtonText>Add task</ButtonText>
      <TaskModal
        close={() => setIsModalOpen(false)}
        create={true}
        task={{
          date,
          category,
          id: 1,
        }}
      />
    </Button>
  );
};
