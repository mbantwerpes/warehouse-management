import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TechComponentList from './pages/TechComponentList/TechComponentList';
import TechComponentAdd from './pages/TechComponentAdd/TechComponentAdd';
import TechComponentDetail from './pages/TechComponentDetail/TechComponentDetail';
import TechComponentEdit from './pages/TechComponentEdit/TechComponentEdit';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/techcomponent/add">
          <TechComponentAdd />
        </Route>
        <Route path="/techcomponent/edit/:id">
          <TechComponentEdit />
        </Route>
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
