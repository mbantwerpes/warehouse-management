import type { TechComponent } from '../../lib/types';
import useFetch from './useFetch';

export default function useTechComponents(id: string): {
  techComponent: TechComponent | null;
  techComponentIsLoading: boolean;
  techComponentErrorMessage: string | null;
} {
  const {
    data: techComponent,
    isLoading: techComponentIsLoading,
    errorMessage: techComponentErrorMessage,
  } = useFetch<TechComponent>(`/api/techcomponent/${id}`);

  return {
    techComponent,
    techComponentIsLoading,
    techComponentErrorMessage,
  };
}
