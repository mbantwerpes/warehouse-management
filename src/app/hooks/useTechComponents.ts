import type { TechComponent } from '../../lib/types';
import useFetch from './useFetch';

export default function useTechComponents(
  searchValue?: string,
  ids?: string[]
): {
  techComponents: TechComponent[] | null;
  techComponentsIsLoading: boolean;
  techComponentsErrorMessage: string | null;
} {
  let url = '/api/techcomponent?';
  if (searchValue) {
    url += `searchValue=${searchValue}`;
  }
  if (ids) {
    ids.forEach((id, index) => {
      if (index === ids.length - 1) {
        url += `id=${id}`;
      } else {
        url += `id=${id}&`;
      }
    });
  }

  const {
    data: techComponents,
    isLoading: techComponentsIsLoading,
    errorMessage: techComponentsErrorMessage,
  } = useFetch<TechComponent[]>(url);

  return {
    techComponents,
    techComponentsIsLoading,
    techComponentsErrorMessage,
  };
}
