import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

export const Navbar = () => {
  const { setIsAuth } = useAuthContext();
  const navigate = useNavigate();

  const onExit = () => {
    setIsAuth(false);
    navigate('/login');
  };
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-links">
          <button onClick={onExit}>Выйти</button>
          <Link to="/posts">Посты</Link>
          <Link to="/about">О сайте</Link>
        </div>
      </div>
    </div>
  );
};
