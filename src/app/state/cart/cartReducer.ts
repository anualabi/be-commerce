import { ICart } from '../../shared/types/product';

export enum ActionType {
  ADD_TO_CART = 'ADD_TO_CART',
  TOTAL_ITEMS = 'TOTAL_ITEMS',
  TOGGLE_CART = 'TOGGLE_CART',
  CLEAR_CART = 'CLEAR_CART'
}

export type Action =
  | {
      type: ActionType.ADD_TO_CART;
      payload: ICart;
    }
  | { type: ActionType.TOTAL_ITEMS }
  | { type: ActionType.TOGGLE_CART }
  | { type: ActionType.CLEAR_CART };

export type State = {
  cart: ICart[];
  total_items: number;
  toggle_cart: boolean;
};

const cartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload], toggle_cart: true };
    case ActionType.TOTAL_ITEMS:
      return { ...state, total_items: state.cart.length };
    case ActionType.TOGGLE_CART:
      return { ...state, toggle_cart: !state.toggle_cart };
    case ActionType.CLEAR_CART:
      return { ...state, cart: [], toggle_cart: false };
    default:
      return state;
  }
};

export default cartReducer;
