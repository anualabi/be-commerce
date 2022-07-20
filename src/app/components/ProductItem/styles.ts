import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledProductCard = styled(Box)(
  () => `
    margin: 1.5rem auto;
  `
);

export const StyledProductImage = styled(Box)(
  ({ theme }) => `
    position: relative;

    img {
      object-fit: cover;
      width: 240px;
      height: 360px;
    }

    .bestseller {
      background-color: ${theme.palette.primary.light};
      padding: 0.5rem 1rem;
      font-size: 1rem;
      font-weight: 600;
      position: absolute;
      top: 0;
      left: 0;
    }

    button {
      background-color: ${theme.palette.primary.main};
      border: none;
      border-radius: 0;
      box-shadow: none;
      color: ${theme.palette.primary.light};
      height: 50px;
      opacity: 0;
      position: absolute;
      text-transform: uppercase;
      transition: 0.5s ease;
      letter-spacing: 1px;
      bottom: 5px;
      left: 0px;
      width: 100%;

      &:disabled {
        color: ${theme.palette.primary.light};
        background-color: rgba(${theme.palette.primary.dark}, 0.99);
      }
    }

    &:hover button {
      background-color: ${theme.palette.primary.main};
      box-shadow: none;
      cursor: pointer;
      opacity: 1;
    }

    &:hover button:disabled {
      cursor: default;
      opacity: 0.8;
    }
    `
);

export const StyledProductContent = styled(Box)(
  ({ theme }) => `
    .category {
      font-size: 0.9rem;
      text-transform: capitalize;
    }

    .price {
      font-size: 1.15rem;
      margin: 0.25rem 0;
    }

    ${theme.breakpoints.up('md')} {
      .category {
        font-size: 1rem;
        text-transform: capitalize;
      }

      .price {
        font-size: 1.2rem;
      }
    }
    
  `
);
