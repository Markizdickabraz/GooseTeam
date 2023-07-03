import { FiPlusCircle } from 'react-icons/fi';
import { ColumnHead, Title, Button } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ setIsAddModalOpen, title }) => {
  return (
    <ColumnHead>
      <Title>{title}</Title>
      <Button onClick={() => setIsAddModalOpen(true)} type="button">
        <FiPlusCircle size={24} />
      </Button>
    </ColumnHead>
  );
};
