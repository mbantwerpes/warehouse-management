import React, { createContext, useContext } from 'react';

export type GlobalUser = {
  id: string;
  role: string;
};

export const UserContext = createContext<GlobalUser>({
  id: '',
  role: '',
});

export const useUserContext = (): GlobalUser => useContext(UserContext);

const fetchCheckAuth = async (): Promise<{ id: string; role: string }> => {
  const response = await fetch('api/auth/checkToken');

  if (response.status === 200) {
    const data = await response.json();
    return { id: data.id, role: data.role };
  }
  return { id: '', role: '' };
};
const data = await fetchCheckAuth();

export const AppProvider = (props: any): JSX.Element => (
  <UserContext.Provider value={{ ...data }}>
    {props.children}
  </UserContext.Provider>
);
