import { TechComponentOrder } from '../../lib/types/types';
import useLocalStorage from './useLocalStorage';

export default function useShoppingCart(): {
  cartItems: TechComponentOrder[];
  addCartItem: (cartItem: TechComponentOrder) => void;
  removeCartItem: (techComponentId: string) => void;
} {
  const [cartItems, setCartItems] = useLocalStorage<TechComponentOrder[]>(
    'cartItems',
    []
  );

  function addCartItem(cartItem: TechComponentOrder) {
    const searchedCartItem = cartItems.find(
      (element) => element.techComponentId === cartItem.techComponentId
    );
    // If the techComponent is not already in the list
    if (!searchedCartItem) setCartItems([...cartItems, cartItem]);
  }

  function removeCartItem(techComponentId: string) {
    setCartItems(
      cartItems.filter(
        (cartItem) => cartItem.techComponentId !== techComponentId
      )
    );
  }

  return { cartItems, addCartItem, removeCartItem };
}
