import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TechComponentList from './pages/TechComponentList/TechComponentList';
import TechComponentDetail from './pages/TechComponentDetail/TechComponentDetail';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/techcomponent/:id">
          <TechComponentDetail />
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
