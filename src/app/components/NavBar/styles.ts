import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/system';

export const StyledNavBar = styled(AppBar, {})`
  background-color: white;
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

  hr {
    margin: auto;
    width: 100%;
  }

  @media (min-width: 768px) {
    hr {
      width: 96%;
    }
  }
`;
