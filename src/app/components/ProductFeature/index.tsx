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

  if (isError) return <Error message="Feature is not available." />;

  return (
    <Box sx={{ my: 3 }}>
      <StyledFeatureHero>
        <Typography component="h1">{data?.name}</Typography>
        <Box className="feature-image">
          <img src={data?.image.src} alt={data?.image.alt} />
          <Typography className="image-text">Photo of the day</Typography>
        </Box>
        <Button variant="contained">Add to cart</Button>
      </StyledFeatureHero>
      <StyledFeatureContent>
        <Box className="about-feature">
          <Typography component="h2">About the {data?.name}</Typography>
          <Typography component="h3">{data?.category}</Typography>
          <Typography component="p">{data?.details?.description}</Typography>
        </Box>
        <Box className="recommendations">
          <Typography component="h2">People also buy</Typography>
          <Box className="recommended-images">
            {data?.details?.recommendations.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </Box>
          <Typography component="h2">Details</Typography>
          <Typography component="p">
            Size: {data?.details?.dimensions.width} x {data?.details?.dimensions.height} pixel
          </Typography>
          <Typography component="p">
            Size: {data?.details?.size && data?.details?.size / 1000} mb
          </Typography>
        </Box>
      </StyledFeatureContent>
    </Box>
  );
};

export default ProductFeature;
