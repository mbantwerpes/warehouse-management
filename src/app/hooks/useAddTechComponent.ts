import type { TechComponent, TechComponentWithoutId } from '../../lib/types';
import useFetch from './useFetch';

export default function useAddTechComponent(postData: TechComponentWithoutId): {
  techComponents: TechComponent[] | null;
  techComponentsIsLoading: boolean;
  techComponentsErrorMessage: string | null;
} {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(postData),
  };

  const {
    data: techComponents,
    isLoading: techComponentsIsLoading,
    errorMessage: techComponentsErrorMessage,
  } = useFetch<TechComponent[]>(`/api/techcomponent`, fetchOptions);

  return {
    techComponents,
    techComponentsIsLoading,
    techComponentsErrorMessage,
  };
}
