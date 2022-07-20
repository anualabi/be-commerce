import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { AiOutlineClose } from 'react-icons/ai';
import { useCartContext } from '../../state/cart/cartContext';
import { formatPrice } from '../../shared/utils/helpers';
import { StyledCartDrawer } from './styles';

const CartDrawer = () => {
  const { state, toggleCart, clearCart } = useCartContext();
  const isItemInCart = state.cart.length > 0;

  const cartItems = state.cart.map((item) => (
    <Box key={item.id}>
      <Box className="cart-item">
        <Box className="cart-text">
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="body1">{formatPrice(item.price)}</Typography>
        </Box>
        <Box className="cart-img">
          <img src={item.image.src} alt={item.image.alt} />
        </Box>
      </Box>
      <Divider />
    </Box>
  ));

  return (
    <StyledCartDrawer>
      <Box className="close-cart" onClick={toggleCart}>
        <AiOutlineClose />
      </Box>
      {isItemInCart ? (
        cartItems
      ) : (
        <Typography sx={{ textAlign: 'center' }}>Cart is empty</Typography>
      )}
      {isItemInCart && (
        <Button className="clear-cart-btn" onClick={clearCart}>
          Clear
        </Button>
      )}
    </StyledCartDrawer>
  );
};

export default CartDrawer;
