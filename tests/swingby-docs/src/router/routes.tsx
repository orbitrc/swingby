import React from 'react'
import { RouteObject } from 'react-router-dom'

const MainLayout = React.lazy(() => import('../layouts/MainLayout'));
const Index = React.lazy(() => import('../pages/Index'));

const GettingStarted = React.lazy(() => import('../pages/GettingStarted'));

const Components = React.lazy(() => import('../pages/Components'));
const ComponentsButton = React.lazy(() => import('../pages/ComponentsButton'));

const Error404 = React.lazy(() => import('../pages/Error404'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'getting-started',
        element: <GettingStarted />,
      },
      {
        path: 'components',
        element: <Components />,
      },
      {
        path: 'components/button',
        element: <ComponentsButton />,
      },
    ],
  },
  {
    path: '/*',
    element: <Error404 />,
  }
];

export default routes