import { useEffect, createContext, useReducer, useContext, ReactNode } from 'react';
import cartReducer, { ActionType, State } from './cartReducer';
import { ProductImage } from '../../shared/types/product';

type Children = { children: ReactNode };

interface ICartContext {
  state: State;
  addToCart: (id: number, name: string, image: ProductImage, price: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
}

const getLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart') || '{}');
  } else {
    return [];
  }
};

const initialState: State = {
  cart: getLocalStorage(),
  total_items: 0,
  toggle_cart: false
};

const CartContext = createContext<ICartContext>({
  state: initialState,
  addToCart: () => null,
  clearCart: () => null,
  toggleCart: () => null
});

export const CartProvider = (props: Children) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id: number, name: string, image: ProductImage, price: number): void => {
    dispatch({ type: ActionType.ADD_TO_CART, payload: { id, name, image, price } });
  };

  const clearCart = (): void => {
    dispatch({ type: ActionType.CLEAR_CART });
  };

  const toggleCart = (): void => {
    dispatch({ type: ActionType.TOGGLE_CART });
  };

  useEffect(() => {
    dispatch({ type: ActionType.TOTAL_ITEMS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, addToCart, clearCart, toggleCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
