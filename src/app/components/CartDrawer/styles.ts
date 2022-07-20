import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledCartDrawer = styled(Box)(
  ({ theme }) => `
    border: 2px solid rgba(0, 0, 0, 0.12);
    background-color: ${theme.palette.primary.light};
    color: black;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    position: absolute;
    top: 58px;
    right: 5px;
    min-width: 250px;

    .close-cart {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0.5rem;
      margin-left: auto;
      cursor: pointer;
      width: 30px;

      svg {
        font-size: 1.5rem;
        font-weight: 900;
      }
    }

    .cart-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-grow: 2;
      margin: 0.75rem auto;
      width: 100%;

      .cart-img {
        img {
          object-fit: cover;
          width: 80px;
          height: 50px;
        }
      }
    }

  .clear-cart-btn {
    border: 2px solid ${theme.palette.primary.main};
    border-radius: 0px;
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem auto;
    width: 160px;
  }

   ${theme.breakpoints.up('md')} {
      top: 65px;
      padding: 0.75rem;
   }
`
);
