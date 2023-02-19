import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { privateRoutes, publicRoutes } from '../router';

export const AppRouter = () => {
  const { isAuth } = useAuthContext();

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};
