// withAuth.jsx
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const WithAuth = ({
  ComponentToProtect,
}: {
  ComponentToProtect: React.ElementType;
}): JSX.Element => {
  const { role } = useUserContext();

  return (
    <Route
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

export default WithAuth;
