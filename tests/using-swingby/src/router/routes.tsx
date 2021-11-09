import React from 'react'
import { RouteObject } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

// const MainLayout = React.lazy(() => import('../layouts/MainLayout'));
const Index = React.lazy(() => import('../pages/Index'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Index />,
      }
    ],
  },
];

export default routes
