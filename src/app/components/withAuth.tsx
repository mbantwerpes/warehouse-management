// withAuth.jsx
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const withAuth = (
  ComponentToProtect: React.FC
  // checkAdmin = false
): React.ReactNode => {
  const [isLoading, setIsLoading] = useState(true);

  const { role } = useUserContext();
  console.log(role);
  useEffect(() => {
    if (role) {
      console.log('im effect');
      setIsLoading(false);
    }
  }, [role, useUserContext]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (role) {
    console.log('protected');
    return <ComponentToProtect />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default withAuth;
