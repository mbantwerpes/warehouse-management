import type { Order } from '../../lib/types';
import useFetch from './useFetch';

export default function useOrders(): {
  orders: Order[] | null;
  ordersIsLoading: boolean;
  ordersErrorMessage: string | null;
} {
  const {
    data: orders,
    isLoading: ordersIsLoading,
    errorMessage: ordersErrorMessage,
  } = useFetch<Order[]>('/api/order');

  return {
    orders,
    ordersIsLoading,
    ordersErrorMessage,
  };
}
