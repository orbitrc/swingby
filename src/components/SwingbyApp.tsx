import React, { ReactElement, Suspense } from 'react'
import {
  RouteObject,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

interface SwingbyAppProps {
  routes: RouteObject[];
}

const SwingbyApp = (props: SwingbyAppProps) => {
  return (
    <div className="s-app">
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>} >
          <Routes>
            {props.routes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  key={index}
                  element={route.element as ReactElement}
                >
                  {route.children.map((child, index) => {
                    return (
                      <Route
                        path={child.path}
                        key={index}
                        index={child.index}
                        element={child.element as ReactElement}
                      />
                    );
                  })}
                </Route>
              )
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default SwingbyApp
