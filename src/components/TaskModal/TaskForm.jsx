import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';

import { addTask, updateTask } from '../../redux/tasks/operations';
import { validate } from './utility/validateTaskForm';
import { autocomplete } from './utility/autocompleteTaskForm';

// import { AiOutlinePlus } from 'react-icons/ai';
// import { BsPencil } from 'react-icons/bs';
import sprite from 'images/svg/sprite.svg';

import {
  Label,
  Input,
  TimeContainer,
  RadioContainer,
  RadioButton,
  RadioLabel,
  ButtonContainer,
  Button,
  LightButton,
  Err,
  Svg,
} from './TaskForm.styled';

const TaskForm = ({ close, create, task }) => {
  const dispatch = useDispatch();

  const prevStartRef = useRef('');
  const prevEndRef = useRef('');

  // const date = task.date || '2023-06-23';
  // const category = task.category || 'to-do';
  // const id = task.id || '64956a30022ac250ec769b01';
  const date = task.date;
  const category = task.category;
  const id = task._id;

  const formik = useFormik({
    initialValues: {
      title: task.title || 'Enter text8',
      start: task.start || '08:00',
      end: task.end || '09:30',
      priority: task.priority || 'low',
    },
    validate,
    onSubmit: values => {
      const newTask = { ...values, date, category };
      if (create) {
        addHandler(newTask);
      } else {
        editHandler(id, newTask);
      }
    },
  });

  useEffect(() => {
    let currentStart = formik.values.start;
    if (currentStart.length > prevStartRef.current.length) {
      currentStart = autocomplete(currentStart);
      formik.values.start = currentStart;
    }
    prevStartRef.current = currentStart;

    let currentEnd = formik.values.end;
    if (currentEnd.length > prevEndRef.current.length) {
      currentEnd = autocomplete(currentEnd);
      formik.values.end = currentEnd;
    }
    prevEndRef.current = currentStart;
  });

  const closeHandler = evt => {
    close();
  };

  const addHandler = newTask => {
    dispatch(addTask(newTask));
  };

  const editHandler = (taskId, newTask) => {
    console.log(taskId, newTask);
    dispatch(updateTask({ taskId, newTask }));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div role="group">
        <Label>
          Title
          <Input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            placeholder="Enter text"
          />
          {formik.errors.title && <Err>{formik.errors.title}</Err>}
        </Label>
        <TimeContainer>
          <Label>
            Start
            <Input
              id="start"
              name="start"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.start}
              placeholder="XX:YY"
            />
            {formik.errors.start && <Err>{formik.errors.start}</Err>}
          </Label>
          <Label>
            End
            <Input
              id="end"
              name="end"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.end}
              placeholder="XX:YY"
            />
            {formik.errors.end && <Err>{formik.errors.end}</Err>}
          </Label>
        </TimeContainer>

        <RadioContainer>
          <RadioButton
            id="low"
            name="priority"
            type="radio"
            onChange={formik.handleChange}
            value="low"
            checked={formik.values.priority === 'low'}
          />
          <RadioLabel htmlFor="low">Low</RadioLabel>
          <RadioButton
            id="medium"
            name="priority"
            type="radio"
            onChange={formik.handleChange}
            value="medium"
            checked={formik.values.priority === 'medium'}
          />
          <RadioLabel htmlFor="medium">Medium</RadioLabel>
          <RadioButton
            id="high"
            name="priority"
            type="radio"
            onChange={formik.handleChange}
            value="high"
            checked={formik.values.priority === 'high'}
          />
          <RadioLabel htmlFor="high">High</RadioLabel>
        </RadioContainer>
        {formik.errors.priority && <Err>{formik.errors.priority}</Err>}
      </div>

      {create ? (
        <ButtonContainer>
          <Button type="submit" onClick={addHandler}>
            {/* <AiOutlinePlus /> */}
            <Svg width="24px" height="24px">
              <use href={`${sprite}#plus`} />
            </Svg>
            Add
          </Button>
          <LightButton type="button" onClick={closeHandler}>
            Cansel
          </LightButton>
        </ButtonContainer>
      ) : (
        <Button type="submit" onClick={editHandler}>
          {/* <BsPencil /> */}
          <Svg width="16px" height="16px">
            <use href={`${sprite}#pencil`} />
          </Svg>
          Edit
        </Button>
      )}
    </form>
  );
};

export { TaskForm };
