import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setFilterStatus } from '../../redux/tasks/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const changeHandler = event => {
    const formValue = event.currentTarget.value;
    setName(formValue);

    dispatch(setFilterStatus(formValue));
  };

  return (
    <div className={css.container}>
      <strong className={css.strong} >Find contacts by name</strong>
      <input
        id="filter"
        type="text"
        name="filter"
        value={name}
        onChange={changeHandler}
        className={css.input}
      />
    </div>
  );
};

export { Filter };
