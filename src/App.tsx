import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const handleButtonClick = () => {
    alert("Someone has clicked me!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Button>I am a button</Button>
        </div>
        <div>
          <Button disabled>I am a disabled button</Button>
        </div>
        <div>
          <Button onClick={handleButtonClick} color="green">
            I am a green clickable button
          </Button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
