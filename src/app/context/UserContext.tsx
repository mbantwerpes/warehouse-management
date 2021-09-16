import React, { createContext, useContext, useState } from 'react';

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
  const [data, setData] = useState<GlobalUser>({ id: '', role: '' });

  const fetchCheckAuth = async (): Promise<{ id: string; role: string }> => {
    const response = await fetch('api/auth/checkToken');

    if (response.status === 200) {
      const data = await response.json();
      setData(data);
      return { id: data.id, role: data.role };
    }
    return { id: '', role: '' };
  };
  fetchCheckAuth();

  return (
    <UserContext.Provider value={{ ...data }}>
      {props.children}
    </UserContext.Provider>
  );
};
