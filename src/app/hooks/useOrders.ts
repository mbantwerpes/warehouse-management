import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import type { Order } from '../../lib/types/types';

const getOrders = async () => {
  const { data } = await axios.get(`/api/order`);
  return data;
};

const useOrders = (): UseQueryResult<Order[], Error> => {
  return useQuery<Order[], Error>(['orders'], () => getOrders());
};

export default useOrders;
