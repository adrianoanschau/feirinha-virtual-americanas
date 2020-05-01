import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <Switch>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Route path="/" render={() => <h1>Index</h1>} />
        </div>
      </div>
    </Switch>
  );
}

export default App;
