import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './router'
import WelcomeDialog from './pages/composition-vs-inheritance/composition-vs-inheritance'
import Cont from './pages/context'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <WelcomeDialog />
      <Cont />
      <Route></Route>
    </div>
  );
}

export default App;
