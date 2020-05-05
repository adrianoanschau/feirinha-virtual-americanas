import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {
  Home,
  HowTo,
  Localization,
  StoresPage,
  ProductsPage
} from './pages';
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
          <Route path="/como-funciona" component={HowTo} />
          <Route path="/localizacao" component={Localization} />
          <Route path="/lojas" component={StoresPage} />
          <Route path="/produtos/:categoryId" component={ProductsPage} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Menu />
    </AppContext.Provider>
  );
}

export default App;
