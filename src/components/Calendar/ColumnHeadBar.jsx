import { isBefore, isSameDay, startOfToday } from 'date-fns';
import { FiPlusCircle } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { ColumnHead, Title, Button } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ setIsAddModalOpen, title }) => {
  const { currentDay } = useParams();
  return (
    <ColumnHead>
      <Title>{title}</Title>
      {(isBefore(startOfToday(), new Date(currentDay)) ||
        isSameDay(startOfToday(), new Date(currentDay))) && (
        <Button onClick={() => setIsAddModalOpen(true)} type="button">
          <FiPlusCircle size={24} />
        </Button>
      )}
    </ColumnHead>
  );
};
