import MainLayout from '@sub1/layouts/MainLayout';
import HomePage from '@sub1/pages/Home';
import SubPage from '@sub1/pages/Sub';
import NotFound from '@sub1/pages/NotFound';

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
