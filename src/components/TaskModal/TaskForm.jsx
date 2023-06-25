// import styled from 'styled-components';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://goosetrack-backend-2lsp.onrender.com/api/';

import { useFormik } from 'formik';
import { validate } from './validateTaskForm';

const closeHandler = evt => {
  close();
};

const addHandler = async evt => {};

const editHandler = async evt => {};

const TaskForm = ({ close, create, task }) => {
  const formik = useFormik({
    initialValues: {
      title: task.title || '',
      start: task.start || '09:00',
      end: task.end || '09:30',
      priority: task.priority || 'low',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div role="group">
        <label>
          Title
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            placeholder="Enter text"
          />
        </label>
        <div>
          <label>
            Start
            <input
              id="start"
              name="start"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.start}
            />
          </label>
          <label>
            End
            <input
              id="end"
              name="end"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.end}
            />
          </label>
        </div>

        <label>
          Low
          <input
            name="priority"
            type="radio"
            onChange={formik.handleChange}
            value="low"
            checked={formik.values.priority === 'low'}
          />
        </label>
        <label>
          Medium
          <input
            name="priority"
            type="radio"
            onChange={formik.handleChange}
            value="medium"
            checked={formik.values.priority === 'medium'}
          />
        </label>
        <label>
          High
          <input
            name="priority"
            type="radio"
            onChange={formik.handleChange}
            value="high"
            checked={formik.values.priority === 'high'}
          />
        </label>
        {/* <p>{formik.values.priority}</p> */}
      </div>

      {create ? (
        <>
          <button type="submit" onClick={addHandler}>
            Add
          </button>
          <button type="button" onClick={closeHandler}>
            Cansel
          </button>
        </>
      ) : (
        <button type="submit" onClick={editHandler}>
          Edit
        </button>
      )}
    </form>
  );
};

export { TaskForm };
