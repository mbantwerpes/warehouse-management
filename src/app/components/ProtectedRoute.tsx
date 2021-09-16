import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const ProtectedRoute = ({
  ComponentToProtect,
  path,
}: {
  ComponentToProtect: React.ElementType;
  path: string;
}): JSX.Element => {
  const { role } = useUserContext();

  return (
    <Route
      path={path}
      render={(props) => {
        if (role) {
          return <ComponentToProtect {...props} />;
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
