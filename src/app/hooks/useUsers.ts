import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import type { User } from '../../lib/types/types';

const getUsers = async (searchValue?: string) => {
  const { data } = await axios.get(`/api/user?searchValue=${searchValue}`);
  return data;
};

const useUsers = (searchValue?: string): UseQueryResult<User[], Error> => {
  return useQuery<User[], Error>(['users', searchValue], () =>
    getUsers(searchValue)
  );
};

export default useUsers;
