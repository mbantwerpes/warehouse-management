import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TechComponentList from './pages/TechComponentList/TechComponentList';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <TechComponentList />
        </Route>
      </Switch>
      <div id="modal-root" />
    </BrowserRouter>
  );
};

export default App;
