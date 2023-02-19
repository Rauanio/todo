import React from 'react';
import '../../styles/App.css';

interface IButton
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
}

export const MyButton = ({ children, ...props }: IButton) => {
  return (
    <button className="myBtn" {...props}>
      {children}
    </button>
  );
};
