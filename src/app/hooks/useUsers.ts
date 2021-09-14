import type { User } from '../../lib/types';
import useFetch from './useFetch';

export default function useUsers(): {
  users: User[] | null;
  usersIsLoading: boolean;
  usersErrorMessage: string | null;
} {
  const {
    data: users,
    isLoading: usersIsLoading,
    errorMessage: usersErrorMessage,
  } = useFetch<User[]>('/api/user');

  return {
    users,
    usersIsLoading,
    usersErrorMessage,
  };
}
