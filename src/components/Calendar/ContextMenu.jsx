import { useEffect } from 'react';
import { List, Menu, ListItem, Svg } from './ContextMenu.styled';
import sprite from '../../images/svg/sprite.svg';
import { useDispatch } from 'react-redux';
import { updateTask } from 'redux/tasks/operations';

export const ContextMenu = ({
  contextMenuRef,
  setIsContextMenu,
  category,
  task,
}) => {
  const dispatch = useDispatch();
  const taskId = task._id;


  const selectCategories = category => {
    if (category === 'to-do') {
      return [
        { title: 'In progress', newCategory: 'in-progress' },
        { title: 'Done', newCategory: 'done' },
      ];
    }
    if (category === 'in-progress') {
      return [
        { title: 'To do', newCategory: 'to-do' },
        { title: 'Done', newCategory: 'done' },
      ];
    }
    if (category === 'done') {
      return [
        { title: 'To do', newCategory: 'to-do' },
        { title: 'In progress', newCategory: 'in-progress' },
      ];
    }
  };

const onMenuClick =  (newCategory) => {
const { title, start, end, priority, date} = task; 

  const updatedTask = {
   title,
    start,
    end,
    priority,
    date,
    category: newCategory,
  };

dispatch(updateTask({ taskId, newTask: updatedTask }));
setIsContextMenu(false);
  
};


  useEffect(() => {
    function handler(e) {
      if (contextMenuRef.current) {
        if (!contextMenuRef.current.contains(e.target)) {
          setIsContextMenu(false);
        }
      }
    }
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, [contextMenuRef, setIsContextMenu]);
  return (
    <Menu ref={contextMenuRef}>
      <List>
        {selectCategories(category).map(({ title, newCategory }) => {
          
          return (
            <ListItem key={newCategory} onClick={()=>onMenuClick(newCategory)}>
              <p>{title}</p>
              <Svg>
                <use href={sprite + '#arrow-circle'} />
              </Svg>
            </ListItem>
          );
        })}
      </List>
    </Menu>
  );
};
