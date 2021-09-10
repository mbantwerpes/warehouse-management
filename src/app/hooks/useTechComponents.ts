import type { TechComponent } from '../../lib/types';
import useFetch from './useFetch';

export default function useTechComponents(query?: string): {
  techComponents: TechComponent[] | null;
  techComponentsIsLoading: boolean;
  techComponentsErrorMessage: string | null;
} {
  const {
    data: techComponents,
    isLoading: techComponentsIsLoading,
    errorMessage: techComponentsErrorMessage,
  } = useFetch<TechComponent[]>(`/api/techcomponent?query=${query}`);

  return {
    techComponents,
    techComponentsIsLoading,
    techComponentsErrorMessage,
  };
}
