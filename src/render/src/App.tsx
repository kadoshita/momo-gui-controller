import React from 'react';
import { IpcRenderer } from 'electron';
import logo from './logo.svg';
import './App.css';

declare global {
  interface Window {
    ipcRenderer: IpcRenderer
  }
}

if (window.ipcRenderer) {
  window.ipcRenderer.on('pong', e => {
    console.log('pong');
  });
}
const handleClick = () => {
  console.log('ping');
  window.ipcRenderer.send('ping');
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <button onClick={handleClick}>Ping</button>
      </header>
    </div>
  );
}

export default App;
