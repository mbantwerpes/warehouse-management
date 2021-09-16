import type { User } from '../../lib/types/types';
import useFetch from './useFetch';

export default function useUser(id: string): {
  user: User | null;
  userIsLoading: boolean;
  userErrorMessage: string | null;
} {
  const {
    data: user,
    isLoading: userIsLoading,
    errorMessage: userErrorMessage,
  } = useFetch<User>(`/api/user/${id}`);

  return {
    user,
    userIsLoading,
    userErrorMessage,
  };
}
