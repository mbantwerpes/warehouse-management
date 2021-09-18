import { useQuery } from 'react-query';
import axios from 'axios';
import { TechComponent } from '../../lib/types/types';
import { UseQueryResult } from 'react-query';

export default function useTechComponents(
  searchValue?: string,
  ids?: string[]
): UseQueryResult<TechComponent[], Error> {
  return useQuery<TechComponent[], Error>(
    ['techComponents', searchValue, ids],
    async () => {
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

      const { data } = await axios.get(url);
      return data;
    }
  );
}
