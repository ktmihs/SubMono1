import { createBrowserRouter } from 'react-router-dom';
import { createUserRoutes } from './createUserRoutes';

// 개발용에서의 권한
const auth = true;

export const router = createBrowserRouter(
  createUserRoutes({
    basePath: '/',
    auth,
  })
);
