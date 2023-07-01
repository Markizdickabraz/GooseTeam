import { useSelector } from 'react-redux';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { selectTasks } from '../../redux/tasks/selectors';
import { TasksColumn } from './TasksColumn';
import { ColumnsList } from './TaskColumnsList.styled';
import { getTasks } from '../../exampleTask';
import 'overlayscrollbars/overlayscrollbars.css';
import './Scrollbar.css';

const tasks = [
  {
    id: '1',
    title: 'Start page 1',
    start: '09:00',
    end: '09:30',
    priority: 'low',
    date: '2023-07-01',
    category: 'to-do',
  },
  {
    id: '2',
    title: 'Start page 2',
    start: '09:02',
    end: '09:32',
    priority: 'medium',
    date: '2023-07-01',
    category: 'in-progress',
  },
  {
    id: '3',
    title: 'Start page 3',
    start: '09:03',
    end: '09:33',
    priority: 'high',
    date: '2023-07-01',
    category: 'done',
  },
  {
    id: '4',
    title: 'Start page 4',
    start: '09:04',
    end: '09:34',
    priority: 'low',
    date: '2023-07-01',
    category: 'to-do',
  },
  {
    id: '5',
    title: 'Start page 5',
    start: '09:05',
    end: '09:35',
    priority: 'medium',
    date: '2023-07-01',
    category: 'in-progress',
  },
  {
    id: '6',
    title: 'Start page 6',
    start: '09:06',
    end: '09:36',
    priority: 'high',
    date: '2023-07-01',
    category: 'done',
  },
  {
    id: '7',
    title: 'Start page 1',
    start: '09:00',
    end: '09:30',
    priority: 'low',
    date: '2023-06-01',
    category: 'to-do',
  },
  {
    id: '8',
    title: 'Start page 2',
    start: '09:02',
    end: '09:32',
    priority: 'medium',
    date: '2023-07-02',
    category: 'in-progress',
  },
  {
    id: '9',
    title: 'Start page 3',
    start: '09:03',
    end: '09:33',
    priority: 'high',
    date: '2023-07-02',
    category: 'done',
  },
  {
    id: '10',
    title: 'Start page 4',
    start: '09:04',
    end: '09:34',
    priority: 'low',
    date: '2023-07-01',
    category: 'to-do',
  },
  {
    id: '11',
    title: 'Start page 5',
    start: '09:05',
    end: '09:35',
    priority: 'medium',
    date: '2023-07-01',
    category: 'in-progress',
  },
  {
    id: '12',
    title: 'Start page 6',
    start: '09:06',
    end: '09:36',
    priority: 'high',
    date: '2023-07-01',
    category: 'done',
  },
  {
    id: '13',
    title: 'Start page 6',
    start: '09:06',
    end: '09:36',
    priority: 'high',
    date: '2023-07-01',
    category: 'done',
  },
  {
    id: '14',
    title: 'Start page 6',
    start: '09:06',
    end: '09:36',
    priority: 'high',
    date: '2023-07-01',
    category: 'done',
  },
];

export const TaskColumnsList = () => {
  const allTasks = tasks;
  const toDoTasks = allTasks.filter(task => task.category === 'to-do');
  const inProgressTasks = allTasks.filter(
    task => task.category === 'in-progress'
  );
  const doneTasks = allTasks.filter(task => task.category === 'done');
  return (
    <OverlayScrollbarsComponent
      element="div"
      options={{
        overflow: {
          x: 'scroll',
          y: 'hidden',
        },
      }}
      defer
    >
      <ColumnsList>
        <TasksColumn title={'To do'} tasks={toDoTasks} category={'to-do'} />
        <TasksColumn
          title={'In progress'}
          tasks={inProgressTasks}
          category={'in-progress'}
        />
        <TasksColumn title={'Done'} tasks={doneTasks} category={'done'} />
      </ColumnsList>
    </OverlayScrollbarsComponent>
  );
};
