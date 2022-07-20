import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CartIcon from '../CartIcon';
import CartDrawer from '../CartDrawer';
import { useCartContext } from '../../state/cart/cartContext';
import { StyledNavBar } from './styles';

const NavBar = () => {
  const { state, toggleCart } = useCartContext();

  return (
    <Box sx={{ mb: 10 }}>
      <StyledNavBar>
        <Toolbar>
          <Typography variant="h1" className="logo">
            BEJAMAS_
          </Typography>
          <CartIcon toggleCart={toggleCart} />
          <Box className={state.toggle_cart ? 'show' : 'hide'}>
            <CartDrawer />
          </Box>
        </Toolbar>
        <Divider className="divider" />
      </StyledNavBar>
    </Box>
  );
};

export default NavBar;
