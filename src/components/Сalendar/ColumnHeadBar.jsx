import { FiPlusCircle } from 'react-icons/fi';

export const ColumnHeadBar = ({ title }) => {
  return (
    <div className="column-head-bar">
      <h2>{title}</h2>

      <button type="button" className="column-head-bar-btn">
        <FiPlusCircle size={18} />
      </button>
    </div>
  );
};
