import { useQuery } from 'react-query';
import axios from 'axios';
import { TechComponent } from '../../lib/types/types';
import { UseQueryResult } from 'react-query';

const getTechComponents = async (
  searchValue?: string,
  ids?: string[],
  cartRequest = false
) => {
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
  if (cartRequest) {
    url += 'cartRequest=true';
  }

  const { data } = await axios.get(url);
  return data;
};

const useTechComponents = (
  searchValue?: string,
  ids?: string[],
  cartRequest?: boolean
): UseQueryResult<TechComponent[], Error> => {
  return useQuery<TechComponent[], Error>(
    ['techComponents', searchValue, ids, cartRequest],
    () => getTechComponents(searchValue, ids, cartRequest)
  );
};

export default useTechComponents;
