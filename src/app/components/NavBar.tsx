import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = () => {
  return (
    <StyledNavBar sx={{ px: 5 }}>
      <Toolbar>
        <Typography component="h1">BEJAMAS_</Typography>
        <AiOutlineShoppingCart />
      </Toolbar>
      <Divider sx={{ width: '97%', mx: 'auto' }} />
    </StyledNavBar>
  );
};

const StyledNavBar = styled(AppBar, {})`
  background-color: transparent;
  box-shadow: none;

  h1 {
    color: black;
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: auto;
  }

  svg {
    font-size: 2.2rem;
    fill: black;
    stroke-width: 3px;
  }
`;

export default NavBar;
