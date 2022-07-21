import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

export const StyledProducts = styled(Box)(
  () => `
    margin-top: 2rem;

    .products-heading {
      span {
        font-weight: 400;
      }
    }
  `
);

export const StyledProductList = styled(Box)(
  () => `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 850px;
    margin: auto;
  `
);

export const StyledPagination = styled(Pagination)(
  () => `
    display: flex;
    justify-content: center;
    margin: 1rem;
  `
);
