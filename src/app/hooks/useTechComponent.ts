import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import type { TechComponent } from '../../lib/types/types';

const getTechComponent = async (id: string) => {
  const { data } = await axios.get(`/api/techcomponent/${id}`);
  return data;
};

const useTechComponent = (id: string): UseQueryResult<TechComponent, Error> => {
  return useQuery<TechComponent, Error>(['techComponent', id], () =>
    getTechComponent(id)
  );
};

export default useTechComponent;
