import { useFormik } from 'formik';

import { AiOutlinePlus } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';

import { validate } from './utility/validateTaskForm';

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
  Err
} from './TaskForm.styled';

const TaskForm = ({ close, create, task }) => {
  const formik = useFormik({
    initialValues: {
      title: task.title || 'Enter text',
      start: task.start || '09:00',
      end: task.end || '09:30',
      priority: task.priority || 'low',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));

      // if (create) {
      //   addHandler();
      // } else {
      //   editHandler();
      // }
    },
  });

  const closeHandler = evt => {
    close();
    console.log(formik.errors);
  };

  const addHandler = async evt => {};

  const editHandler = async evt => {};

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
            <AiOutlinePlus />
            Add
          </Button>
          <LightButton type="button" onClick={closeHandler}>
            Cansel
          </LightButton>
        </ButtonContainer>
      ) : (
        <Button type="submit" onClick={editHandler}>
          <BsPencil />
          Edit
        </Button>
      )}
    </form>
  );
};

export { TaskForm };
