import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/Home';
import SubPage from '@/pages/Sub';
import NotFound from '@/pages/NotFound';

export function createUserRoutes(options = {}) {
  const {
    basePath = '/',
    auth = true,
  } = options;

  if (!auth) return [];

  return [
    {
      path: basePath,
      element: <MainLayout auth={auth} basePath={basePath} />, // ✅ Layout
      children: [{
        index: true,
        element: <HomePage />,
      },
      {
        path: `sub`,
        element: <SubPage />,
      }]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ];
}
