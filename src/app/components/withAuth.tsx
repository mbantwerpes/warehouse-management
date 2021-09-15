// withAuth.jsx
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (ComponentToProtect: any): JSX.Element | null => {
  const [isLoading, setIsLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch('/api/auth/checkToken')
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setIsLoading(false);
        } else {
          console.log('error ocurred');
        }
      })
      .catch((err) => {
        console.log(err);
        setRedirect(true);
        setIsLoading(false);
      });
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
