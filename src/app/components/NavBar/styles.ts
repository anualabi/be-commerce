import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

export const StyledNavBar = styled(AppBar)(
  ({ theme }) => `
    background-color: ${theme.palette.primary.light};
    box-shadow: none;

    .logo {
      color: ${theme.palette.primary.main};
      margin-right: auto;
    }

    .divider {
      margin: auto;
      width: 100%;
    }

    .show {
      display: block;
    }

    .hide {
      display: none;
    }

    ${theme.breakpoints.up('md')} {
      padding: 0 1.6rem 0 1.2rem;

      .divider {
        width: 98%;
      }
    }
  `
);
