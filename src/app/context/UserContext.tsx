import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
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
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState({ id: '', role: '' });

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
      <UserContext.Provider value={{ ...data, setData }}>
        {props.children}
      </UserContext.Provider>
    );
  }
};
