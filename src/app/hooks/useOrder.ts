import type { Order } from '../../lib/types';
import useFetch from './useFetch';

export default function useOrder(id: string): {
  order: Order | null;
  orderIsLoading: boolean;
  orderErrorMessage: string | null;
} {
  const {
    data: order,
    isLoading: orderIsLoading,
    errorMessage: orderErrorMessage,
  } = useFetch<Order>(`/api/order/${id}`);

  return {
    order,
    orderIsLoading,
    orderErrorMessage,
  };
}
