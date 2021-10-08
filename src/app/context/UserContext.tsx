import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export type GlobalUser = {
  id: string;
  role: string;
  setData: Dispatch<SetStateAction<{ id: string; role: string }>>;
};

type ContextProps = {
  children: React.ReactNode;
};

const UserContext = createContext<GlobalUser>({
  id: '',
  role: '',
  setData: () => null,
});

export const useUserContext = (): GlobalUser => useContext(UserContext);

export const AppProvider = (props: ContextProps): JSX.Element => {
  const [data, setData] = useState({ id: '', role: '' });

  return (
    <UserContext.Provider value={{ ...data, setData }}>
      {props.children}
    </UserContext.Provider>
  );
  // }
};
