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
import { AppProvider } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ReactQueryDevtools } from 'react-query/devtools';

const App = (): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute
              ComponentToProtect={UserEdit}
              path="/user/edit/:id"
              checkAdmin={true}
            />
            <ProtectedRoute
              ComponentToProtect={UserAdd}
              path="/user/add"
              checkAdmin={true}
            />
            <ProtectedRoute ComponentToProtect={UserDetail} path="/user/:id" />
            <ProtectedRoute
              ComponentToProtect={UserList}
              path="/user"
              checkAdmin={false}
            />
            <ProtectedRoute
              ComponentToProtect={OrderDetail}
              path="/order/:id"
            />
            <ProtectedRoute ComponentToProtect={OrderList} path="/order" />
            <ProtectedRoute ComponentToProtect={Cart} path="/cart" />
            <ProtectedRoute
              path="/techcomponent/add"
              ComponentToProtect={TechComponentAdd}
              checkAdmin={true}
            />
            <ProtectedRoute
              path="/techcomponent/edit/:id"
              ComponentToProtect={TechComponentEdit}
              checkAdmin={true}
            />
            <ProtectedRoute
              path="/techcomponent/:id"
              ComponentToProtect={TechComponentDetail}
            />
            <ProtectedRoute path="/" ComponentToProtect={TechComponentList} />
          </Switch>
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer />
          <div id="modal-root" />
        </BrowserRouter>
      </QueryClientProvider>
    </AppProvider>
  );
};

export default App;
