import { useEffect } from 'react';
import { List, Menu } from './ContextMenu.styled';

export const ContextMenu = ({ contextMenuRef, setIsContextMenu }) => {
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

      console.log('размонт');
    };
  }, [contextMenuRef, setIsContextMenu]);
  return (
    <Menu ref={contextMenuRef}>
      <List>
        <li>Список</li>
        <li>Список</li>
      </List>
    </Menu>
  );
};
