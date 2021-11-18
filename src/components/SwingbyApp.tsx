import React, { ReactElement, Suspense } from 'react'
import {
  RouteObject,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

console.log(process.env.SWINGBY_I18N);

function mapRoutes(routes: RouteObject[]): JSX.Element[] {
  if (routes === undefined) {
    return [];
  }

  const map = routes.map((route, index) => {
    return (
      <Route
        path={route.path}
        key={index}
        index={route.index}
        element={route.element as ReactElement}
      >
        {mapRoutes(route.children)}
      </Route>
    );
  });

  return map;
}

interface SwingbyAppProps {
  routes: RouteObject[];
}

const SwingbyApp = (props: SwingbyAppProps) => {
  return (
    <div className="s-app">
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>} >
          <Routes>
            {mapRoutes(props.routes)}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default SwingbyApp
