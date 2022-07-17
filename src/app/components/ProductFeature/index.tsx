import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useFeaturedProduct } from '../../shared/hooks/product';
import { Spinner } from '../../shared/components/Spinner';
import { Error } from '../../shared/components/Error';
import { StyledFeatureHero, StyledFeatureContent } from './styles';

const ProductFeature = () => {
  const { isLoading, isError, data } = useFeaturedProduct();

  if (isLoading) return <Spinner />;

  if (isError) return <Error message="Error - Unable to display feature." />;

  return (
    <Box sx={{ my: 3 }}>
      <StyledFeatureHero>
        <Typography variant="h1" className="feature-heading">
          {data?.name}
        </Typography>
        <Box className="feature-image">
          <img src={data?.image.src} alt={data?.image.alt} />
          <Typography className="image-text">Photo of the day</Typography>
        </Box>
        <Button variant="contained" className="cart-btn">
          Add to cart
        </Button>
      </StyledFeatureHero>
      <StyledFeatureContent>
        <Box className="about-feature">
          <Typography variant="h2">About the {data?.name}</Typography>
          <Typography variant="h3">{data?.category}</Typography>
          <Typography variant="body1">{data?.details?.description}</Typography>
        </Box>
        <Box className="recommendations">
          <Typography variant="h2">People also buy</Typography>
          <Box className="recommended-images">
            {data?.details?.recommendations.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </Box>
          <Typography variant="h2">Details</Typography>
          <Typography variant="body1">
            Size: {data?.details?.dimensions.width} x {data?.details?.dimensions.height} pixel
          </Typography>
          <Typography variant="body1">
            Size: {data?.details?.size && data?.details?.size / 1000} mb
          </Typography>
        </Box>
      </StyledFeatureContent>
    </Box>
  );
};

export default ProductFeature;
