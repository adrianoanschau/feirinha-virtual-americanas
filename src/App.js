import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Home, FeirinhaLocal} from './pages';
import {Header, Menu} from './components/layout';

export const AppContext = React.createContext();

function App() {

  const [title, setTitle] = React.useState(null);

  return (
    <AppContext.Provider value={{
      title, setTitle,
    }}>
      <div className="container">
        <Header />
        <div className="wrapper">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/feirinha-local" component={FeirinhaLocal} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
      <Menu />
    </AppContext.Provider>
  );
}

export default App;
