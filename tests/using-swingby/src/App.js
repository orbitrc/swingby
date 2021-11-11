import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import routes from './router/routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>} >
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  key={index}
                  element={route.element}
                >
                  {route.children.map((child, index) => {
                    return (
                      <Route
                        path={child.path}
                        key={index}
                        index={child.index}
                        element={child.element}
                      />
                    );
                  })}
                </Route>
              );
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
