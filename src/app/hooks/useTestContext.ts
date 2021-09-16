import { useUserContext } from '../context/UserContext';

export const useTestContext = () => {
  const { role, id, setId, setRole } = useUserContext();

  const fetchCheckAuth = async () => {
    const response = await fetch('api/auth/checkToken');

    if (response.status === 200) {
      const data = await response.json();
      setRole(data.role);
    } else {
      setId('');
      setRole('');
    }
  };
  fetchCheckAuth();

  return { role, id };
};
