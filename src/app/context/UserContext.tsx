import React, { createContext, useContext, useEffect, useState } from 'react';

export type GlobalUser = {
  id: string;
  role: string;
};

type ContextProps = {
  children: React.ReactNode;
};

const UserContext = createContext<GlobalUser>({
  id: '',
  role: '',
});

export const useUserContext = (): GlobalUser => useContext(UserContext);

export const AppProvider = (props: ContextProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState<GlobalUser>({ id: '', role: '' });

  const fetchCheckAuth = async (): Promise<{ id: string; role: string }> => {
    const response = await fetch('/api/auth/checkToken');

    if (response.status === 200) {
      const data = await response.json();
      return { id: data.id, role: data.role };
    }
    return { id: '', role: '' };
  };

  useEffect(() => {
    const asyncFunc = async () => {
      setData(await fetchCheckAuth());
      setIsLoading(false);
    };
    asyncFunc();
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  } else {
    return (
      <UserContext.Provider value={{ ...data }}>
        {props.children}
      </UserContext.Provider>
    );
  }
};
