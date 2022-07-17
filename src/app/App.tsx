import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { theme } from './theme';
import NavBar from './components/NavBar';
import ProductFeature from './components/ProductFeature';
import ProductList from './components/ProductList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <StyledSiteBody>
        <ProductFeature />
        <Divider />
        <ProductList />
      </StyledSiteBody>
    </ThemeProvider>
  );
}

export const StyledSiteBody = styled(Box, {})`
  padding: 0 0.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export default App;
