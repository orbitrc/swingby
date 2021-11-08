import './App.css';

import { Button, HeaderBar } from 'swingby'

function App() {
  return (
    <div className="App">
      <HeaderBar
        logo="https://raw.githubusercontent.com/orbitrc/orbit-logo/master/orbit-logo.svg"
      />
      <Button />
      <div className="bg-primary">Hello!</div>
    </div>
  );
}

export default App;
