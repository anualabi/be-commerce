import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useFeaturedProduct } from '../../shared/hooks/product';
import { Spinner } from '../../shared/components/Spinner';
import { Error } from '../../shared/components/Error';
import { useCartContext } from '../../state/cart/cartContext';
import { StyledFeatureHero, StyledFeatureContent } from './styles';

const ProductFeature = () => {
  const { isLoading, isError, data } = useFeaturedProduct();
  const { addToCart, state } = useCartContext();

  if (isLoading) return <Spinner />;

  if (isError) return <Error message="Error - Unable to display feature." />;

  if (!data) {
    return <Typography>Data not found.</Typography>;
  }

  const { id, name, srcset, image, price, dimensions, category, details } = data;

  const isProductInCart = state.cart.some((c) => c.id === id);

  return (
    <Box sx={{ my: 3 }}>
      <StyledFeatureHero>
        <Typography variant="h1" className="feature-heading">
          {name}
        </Typography>
        <Box className="feature-image">
          <img
            srcSet={`${srcset.lg} 1920w, ${srcset.md} 960w, ${srcset.sm} 480w`}
            src={image.src}
            alt={image.alt}
            width={dimensions.width}
            height={dimensions.height}
          />
          <Typography className="image-text">Photo of the day</Typography>
        </Box>
        <Button
          variant="contained"
          className="btn-cart"
          onClick={() => addToCart(id, name, image, price)}
          disabled={isProductInCart}
        >
          {isProductInCart ? 'Item in cart' : 'Add to cart'}
        </Button>
      </StyledFeatureHero>
      <StyledFeatureContent>
        <Box className="about-feature">
          <Typography variant="h2">About the {name}</Typography>
          <Typography variant="h3">{category}</Typography>
          <Typography variant="body1">{details.description}</Typography>
        </Box>
        <Box className="recommendations">
          <Typography variant="h2">People also buy</Typography>
          <Box className="recommended-images">
            {details.recommendations.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                width={details.dimensions.width}
                height={details.dimensions.height}
              />
            ))}
          </Box>
          <Typography variant="h2">Details</Typography>
          <Typography variant="body1">
            Size: {details.dimensions.width} x {details.dimensions.height} pixel
          </Typography>
          <Typography variant="body1">Size: {details.size && details.size / 1000} mb</Typography>
        </Box>
      </StyledFeatureContent>
    </Box>
  );
};

export default ProductFeature;
