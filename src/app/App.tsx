import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import NavBar from './components/NavBar';
import ProductFeature from './components/ProductFeature';

function App() {
  return (
    <>
      <NavBar />
      <StyledSiteBody>
        <ProductFeature />
      </StyledSiteBody>
    </>
  );
}

export const StyledSiteBody = styled(Box, {})`
  padding: 0 0.5rem;

  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

export default App;
