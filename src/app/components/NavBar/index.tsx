import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StyledNavBar } from './styles';

const NavBar = () => {
  return (
    <Box sx={{ mb: 10 }}>
      <StyledNavBar>
        <Toolbar>
          <Typography component="h1">BEJAMAS_</Typography>
          <AiOutlineShoppingCart />
        </Toolbar>
        <Divider />
      </StyledNavBar>
    </Box>
  );
};

export default NavBar;
