import type { User } from '../../lib/types/types';
import useFetch from './useFetch';

export default function useUsers(searchValue?: string): {
  users: User[] | null;
  usersIsLoading: boolean;
  usersErrorMessage: string | null;
} {
  const {
    data: users,
    isLoading: usersIsLoading,
    errorMessage: usersErrorMessage,
  } = useFetch<User[]>(`/api/user?searchValue=${searchValue}`);

  return {
    users,
    usersIsLoading,
    usersErrorMessage,
  };
}
