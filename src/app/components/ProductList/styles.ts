import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledProducts = styled(Box, {})`
  margin-top: 2rem;

  .products-heading {
    font-size: 1.1rem;
    font-weight: 600;

    span {
      font-weight: 400;
    }
  }

  @media (min-width: 768px) {
    .products-heading {
      font-size: 1.3rem;
    }
  }
`;

export const StyledProductList = styled(Box, {})`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 850px;
  margin: auto;
`;
