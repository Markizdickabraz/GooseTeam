// import styled from 'styled-components';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://goosetrack-backend-2lsp.onrender.com/api/';

import { useFormik } from 'formik';

// import { validate } from './utility/validateTaskForm';

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

  const closeHandler = evt => {
    close();
    console.log(formik.errors);
  };

  const addHandler = async evt => {
    // temporarily
    // const {start, date} = task;
    // const title = 'to do something';
    // const end = '12:30';
    // const priority = 'low';
    // const category = 'to-do';
    // console.log("request created");
    // const response = await axios.post('https://goosetrack-backend-2lsp.onrender.com/api/task', {title, start, end, priority, date, category});
    // console.log(response);
    // console.log("task created!");
    // console.log(response.data);
    // console.log("task created! 2");
    // console.log(response.message);
  };

  const editHandler = async evt => {
    // temporarily
    // const {title, start, end, priority, date, category} = task;
    // const response = await axios.patch(`/tasks/${task.id}`, {title, start, end, priority, date, category});
    // console.log(response);
    // console.log(response.data);
    // console.log("task changed!");
  };

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
