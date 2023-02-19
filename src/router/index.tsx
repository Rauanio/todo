import { Posts } from '../pages/Posts';
import { About } from '../pages/About';
import { PostDetails } from '../components/PostDetails';
import { Login } from '../pages/Login';
import { Error } from '../pages/Error';

export const privateRoutes = [
  { path: '/posts', element: <Posts /> },
  { path: '/about', element: <About /> },
  { path: '/posts/:id', element: <PostDetails /> },
  { path: '*', element: <Error /> },
];

export const publicRoutes = [{ path: '/login', element: <Login /> }];
