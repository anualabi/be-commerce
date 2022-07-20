import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartContext } from '../../state/cart/cartContext';
import { StyledCartIcon } from './styles';

type IToggleCart = {
  toggleCart: () => void;
};

const CartIcon = ({ toggleCart }: IToggleCart) => {
  const { state } = useCartContext();
  const isItemInCart = state.cart.length > 0;

  return (
    <StyledCartIcon onClick={toggleCart}>
      <AiOutlineShoppingCart className="cart" />
      {isItemInCart && <span className="cart-value">{state.total_items}</span>}
    </StyledCartIcon>
  );
};

export default CartIcon;
