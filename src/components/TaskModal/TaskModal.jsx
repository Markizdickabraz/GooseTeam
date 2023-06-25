import { createPortal } from 'react-dom';

// import { Modal } from './Modal';
// import { TaskForm } from './TaskForm';

const TaskModal = ({ close, create, task }) => {
  return createPortal(
    <Modal close={close}>
      <TaskForm close={close} create={create} task={task} />
    </Modal>,
    document.body
  );
};

export default TaskModal;
