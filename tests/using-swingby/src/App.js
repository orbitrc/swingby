import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import { Button } from 'swingby'

import routes from './router/routes'

function App() {
  return (
    <div className="App">
      <Button />
      <div className="bg-primary">Hello!</div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                key={index}
                element={route.element}
                childRoute={route.children}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
