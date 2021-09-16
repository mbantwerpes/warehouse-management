// withAuth.jsx
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (
  ComponentToProtect: React.ComponentType,
  checkAdmin = false
): JSX.Element | null => {
  const [isLoading, setIsLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const fetchCheckAuth = async () => {
    const response = await fetch('api/auth/checkToken');

    if (response.status === 200) {
      const data = await response.json();

      setIsLoading(false);

      if (checkAdmin && data.role !== 'admin') {
        setRedirect(true);
      }
    } else {
      setRedirect(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCheckAuth();
  }, []);

  if (isLoading) {
    return null;
  }
  if (redirect) {
    return <Redirect to="/login" />;
  }

  return <ComponentToProtect />;
};

export default withAuth;
