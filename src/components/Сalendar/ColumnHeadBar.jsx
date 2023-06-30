import { FiPlusCircle } from 'react-icons/fi';
import { ColumnHead, Title, Button } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title }) => {
  return (
    <ColumnHead>
      <Title>{title}</Title>
      <Button type="button">
        <FiPlusCircle size={24} />
      </Button>
    </ColumnHead>
  );
};
