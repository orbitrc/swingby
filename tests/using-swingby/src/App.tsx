import React from 'react'

import { SwingbyApp } from 'swingby'

import './App.css';

import routes from './router/routes'

function App() {
  return (
    <SwingbyApp routes={routes} />
  );
}

export default App;
