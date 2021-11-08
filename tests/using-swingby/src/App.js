import './App.css';

import { Button, HeaderBar, HeaderBarLink } from 'swingby'

function App() {
  return (
    <div className="App">
      <HeaderBar
        logo="https://raw.githubusercontent.com/orbitrc/orbit-logo/master/orbit-logo.svg"
      >
        <HeaderBarLink
          className="text-weight-bold"
          label="Lorem"
        />
        <HeaderBarLink
          className="text-weight-bold"
          label="Ipsum"
        />
        <div>Hello!</div>
      </HeaderBar>
      <Button />
      <div className="bg-primary">Hello!</div>
    </div>
  );
}

export default App;
