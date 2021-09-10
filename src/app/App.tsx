import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TechComponentList from './pages/TechComponentList/TechComponentList';
import TechComponentAdd from './pages/TechComponentAdd/TechComponentAdd';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/techcomponent/add">
          <TechComponentAdd />
        </Route>
        <Route path="/">
          <TechComponentList />
        </Route>
      </Switch>
      <div id="modal-root" />
    </BrowserRouter>
  );
};

export default App;
