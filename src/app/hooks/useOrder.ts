import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import type { Order } from '../../lib/types/types';

const getOrder = async (id: string) => {
  const { data } = await axios.get(`/api/order/${id}`);
  return data;
};

const useOrder = (id: string): UseQueryResult<Order, Error> => {
  return useQuery<Order, Error>(['order', id], () => getOrder(id));
};

export default useOrder;
