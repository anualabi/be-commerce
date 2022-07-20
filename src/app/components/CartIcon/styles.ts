import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledCartIcon = styled(Box)(
  ({ theme }) => `
    position: relative;
    cursor: pointer;
    
    .cart {
        font-size: 2.2rem;
        fill: ${theme.palette.primary.main};
        stroke-width: 3px;
    }

    .cart-value {
        background-color: black;
        font-size: 0.9rem;
        font-weight: 600;
        padding: 0.15rem 0.4rem;
        position: absolute;
        bottom: -6px;
        right: -6px;
    }
  `
);
