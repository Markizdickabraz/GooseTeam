import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from '../../redux/tasks/selectors';
import { addContact } from 'redux/tasks/operations';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const changeHandler = event => {
    if (event.currentTarget.name === 'name') {
      setName(event.currentTarget.value);
    } else {
      setNumber(event.currentTarget.value);
    }
  };

  const submitHandler = event => {
    event.preventDefault();

    const nameList = contacts.map(cont => cont.name);
    if (nameList.includes(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, phone }));

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <label className={css.element}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={changeHandler}
          className={css.input}
        />
      </label>
      <label className={css.element}>
        Number
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={changeHandler}
          className={css.input}
        />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export { ContactForm };
