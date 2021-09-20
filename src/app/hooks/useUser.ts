import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import type { User } from '../../lib/types/types';

const getUser = async (id: string) => {
  const { data } = await axios.get(`/api/user/${id}`);
  return data;
};

const useUser = (id: string): UseQueryResult<User, Error> => {
  return useQuery<User, Error>(['user', id], () => getUser(id));
};

export default useUser;
