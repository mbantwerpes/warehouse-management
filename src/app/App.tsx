import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <main>Home</main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
