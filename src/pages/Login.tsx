import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { MyButton } from '../UI/button/MyButton';
import { MyInput } from '../UI/input/MyInput';

export const Login = () => {
  const { setIsAuth } = useAuthContext();
  const navigate = useNavigate();

  const onLogin = () => {
    setIsAuth(true);
    navigate('/posts');
  };

  return (
    <div>
      <h1>Страница авторизаций</h1>
      <form>
        <MyInput placholder="Логин" type="text" />
        <MyInput placholder="Пароль" type="password" />
        <MyButton onClick={onLogin}>Войти</MyButton>
      </form>
    </div>
  );
};
