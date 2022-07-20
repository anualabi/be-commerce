import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#000000',
      dark: '#303030'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200
    }
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: '1.3rem',
      fontWeight: 600,
      '@media (min-width:768px)': {
        fontSize: '1.5rem'
      }
    },
    h2: {
      fontSize: '1.2rem',
      fontWeight: 600,
      '@media (min-width:768px)': {
        fontSize: '1.4rem'
      }
    },
    h3: {
      fontSize: '1.1rem',
      fontWeight: 600,
      '@media (min-width:768px)': {
        fontSize: '1.3rem'
      }
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 600,
      '@media (min-width:768px)': {
        fontSize: '1.2rem'
      }
    },
    h5: {
      fontSize: '0.9rem',
      fontWeight: 600,
      '@media (min-width:768px)': {
        fontSize: '1.1rem'
      }
    },
    h6: {
      fontSize: '0.8rem',
      fontWeight: 600,
      '@media (min-width:768px)': {
        fontSize: '1rem'
      }
    },
    body1: {
      fontSize: '0.9rem',
      '@media (min-width:768px)': {
        fontSize: '1rem'
      }
    }
  }
});
