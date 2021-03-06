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
// import { ReactQueryDevtools } from 'react-query/devtools';
import StudentProfile from './pages/StudentProfile/StudentProfile';
import Dashboard from './pages/Dashboard/Dashboard';
import styles from './App.module.css';

const App = (): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <div className={styles.background}>
      <div className={styles.maxWidth}>
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
                <ProtectedRoute
                  ComponentToProtect={UserDetail}
                  path="/user/:id"
                />
                <ProtectedRoute
                  ComponentToProtect={UserList}
                  path="/user"
                  checkAdmin={false}
                />
                <ProtectedRoute
                  ComponentToProtect={StudentProfile}
                  path="/userprofile"
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
                <ProtectedRoute
                  path="/techcomponent"
                  ComponentToProtect={TechComponentList}
                />
                <ProtectedRoute path="/" ComponentToProtect={Dashboard} />
              </Switch>
              {/* <ReactQueryDevtools initialIsOpen={false} /> */}
              <ToastContainer autoClose={2000} />
            </BrowserRouter>
          </QueryClientProvider>
        </AppProvider>
      </div>
    </div>
  );
};

export default App;
