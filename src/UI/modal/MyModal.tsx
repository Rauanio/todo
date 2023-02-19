import React from 'react';
import cl from './MyModal.module.css';

interface IModal
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  setOpen: (value: boolean) => void;
}

export const MyModal = ({ children, setOpen }: IModal) => {
  return (
    <div className={[cl.myModal, cl.active].join(' ')} onClick={() => setOpen(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
