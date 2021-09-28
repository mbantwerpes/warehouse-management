import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import type { Order } from '../../lib/types/types';

const getOrders = async (studentId: string) => {
  const { data } = await axios.get(`/api/order/student/${studentId}`);
  return data;
};

const useStudentOrders = (
  studentId: string
): UseQueryResult<Order[], Error> => {
  return useQuery<Order[], Error>(['orders'], () => getOrders(studentId));
};

export default useStudentOrders;
