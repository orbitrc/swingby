import React from 'react'
import { RouteProps } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

// const MainLayout = React.lazy(() => import('../layouts/MainLayout'));
const Index = React.lazy(() => import('../pages/Index'));

const routes: RouteProps[] = [
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
