import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const ProtectedRoute = ({
  ComponentToProtect,
  path,
  checkAdmin = false,
}: {
  ComponentToProtect: React.ElementType;
  path: string;
  checkAdmin?: boolean;
}): JSX.Element => {
  const { role } = useUserContext();

  return (
    <Route
      path={path}
      render={(props) => {
        if (role) {
          if (checkAdmin && role !== 'admin') {
            return (
              <Redirect
                to={{
                  pathname: '/login',
                }}
              />
            );
          } else {
            return <ComponentToProtect {...props} />;
          }
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
