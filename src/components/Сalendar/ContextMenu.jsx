import { useEffect } from 'react';
import { List, Menu, ListItem, Svg } from './ContextMenu.styled';
import { useDispatch } from 'react-redux';


export const ContextMenu = ({
  contextMenuRef,
  setIsContextMenu,
  category,
  taskId,
}) => {
  const dispatch = useDispatch();
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
      <List>{/* Куда перекидать */}</List>
    </Menu>
  );
};
