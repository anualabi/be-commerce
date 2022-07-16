import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledProductCard = styled(Box, {})`
  margin: 1.5rem auto;
`;

export const StyledProductImage = styled(Box, {})`
  width: 250px;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 320px;
  }

  .bestseller {
    background-color: white;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    position: absolute;
    top: 0;
    left: 0;
  }

  button {
    background-color: black;
    border: none;
    color: white;
    height: 50px;
    opacity: 0;
    position: absolute;
    text-transform: uppercase;
    transition: 0.5s ease;
    letter-spacing: 1px;
    bottom: 0px;
    left: 0px;
    width: 100%;
  }

  &:hover button {
    opacity: 1;
    cursor: pointer;
  }
`;

export const StyledProductContent = styled(Box, {})`
  .category {
    font-size: 0.9rem;
    text-transform: capitalize;
  }

  .name {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .price {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    .category {
      font-size: 1rem;
      text-transform: capitalize;
    }

    .name {
      font-size: 1.3rem;
      font-weight: 600;
    }

    .price {
      font-size: 1.2rem;
    }
  }
`;
