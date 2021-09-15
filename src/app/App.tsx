import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TechComponentList from './pages/TechComponentList/TechComponentList';
import TechComponentAdd from './pages/TechComponentAdd/TechComponentAdd';
import TechComponentDetail from './pages/TechComponentDetail/TechComponentDetail';
import TechComponentEdit from './pages/TechComponentEdit/TechComponentEdit';
import Cart from './pages/Cart/Cart';
import OrderList from './pages/OrderList/OrderList';
import OrderDetail from './pages/OrderDetail/OrderDetail';
import UserList from './pages/UserList/UserList';
import UserDetail from './pages/UserDetail/UserDetail';
import UserAdd from './pages/UserAdd/UserAdd';
import UserEdit from './pages/UserEdit/UserEdit';
import Login from './pages/Login/Login';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user/edit/:id">
          <UserEdit />
        </Route>
        <Route path="/user/add">
          <UserAdd />
        </Route>
        <Route path="/user/:id">
          <UserDetail />
        </Route>
        <Route path="/user">
          <UserList />
        </Route>
        <Route path="/order/:id">
          <OrderDetail />
        </Route>
        <Route path="/order">
          <OrderList />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
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
