import React from 'react'
import { RouteProps } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

// const MainLayout = React.lazy(() => import('../layouts/MainLayout'));

const routes: RouteProps[] = [
  {
    path: '/',
    element: <MainLayout />,
  },
];

export default routes
