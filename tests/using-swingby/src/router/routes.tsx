import React from 'react'
import { RouteObject } from 'react-router-dom'

// import MainLayout from '../layouts/MainLayout'
// import Index from '../pages/Index'

const MainLayout = React.lazy(() => import('../layouts/MainLayout'));
const Index = React.lazy(() => import('../pages/Index'));
const Counter = React.lazy(() => import('../pages/Counter'));

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
];

export default routes
