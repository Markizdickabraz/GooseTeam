import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/tasks/operations';

import css from './Contact.module.css';

const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const clickHandler = event => {
    dispatch(deleteContact(event.currentTarget.id));
  };

  return (
    <>
      <p>
        {name}: {phone}
      </p>
      <button
        type="button"
        id={id}
        onClick={clickHandler}
        className={css.button}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export { Contact };
