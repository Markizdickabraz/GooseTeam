import { useEffect } from 'react';

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
    };
  });
  return (
    <menu ref={contextMenuRef}>
      <ul>
        <li>Список</li>
        <li>Список</li>
      </ul>
    </menu>
  );
};
