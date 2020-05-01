import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Home} from './pages';
import {Header, Menu} from './components/layout';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="wrapper">
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
      <Menu />
    </>
  );
}

export default App;
