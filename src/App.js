import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Home, Localization, Main} from './pages';
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
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/localizacao" component={Localization} />
          <Route path="/feira" component={Main} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Menu />
    </AppContext.Provider>
  );
}

export default App;
