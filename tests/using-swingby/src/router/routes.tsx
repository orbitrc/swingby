import React from 'react'
import { RouteObject } from 'react-router-dom'

const MainLayout = React.lazy(() => import('../layouts/MainLayout'));
const Index = React.lazy(() => import('../pages/Index'));
const Counter = React.lazy(() => import('../pages/Counter'));
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
        path: 'counter',
        element: <Counter />,
      },
    ],
  },
  {
    path: '/*',
    element: <Error404 />,
  }
];

export default routes
