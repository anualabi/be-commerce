import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { StyledProductCard, StyledProductImage, StyledProductContent } from './styles';
import { Product } from '../../shared/types/product';
import { formatPrice } from '../../shared/utils/helpers';
import { useCartContext } from '../../state/cart/cartContext';

const ProductItem = (item: Product) => {
  const { id, name, image, category, price, bestseller, dimensions, srcset } = item;
  const { addToCart, state } = useCartContext();

  const isProductInCart = state.cart.some((c: { id: number }) => c.id === id);

  return (
    <StyledProductCard>
      <StyledProductImage>
        <img
          srcSet={`${srcset?.md} 640w, ${srcset?.sm} 320w`}
          sizes="(max-width: 480px) 320px, 640px"
          src={image.src}
          alt={image.alt}
          width={dimensions.width}
          height={dimensions.height}
        />
        {bestseller && <Typography className="bestseller">Best Seller</Typography>}
        <Button onClick={() => addToCart(id, name, image, price)} disabled={isProductInCart}>
          {isProductInCart ? 'Item in cart' : 'Add to cart'}
        </Button>
      </StyledProductImage>
      <StyledProductContent>
        <Typography className="category">{category}</Typography>
        <Typography variant="h3">{name}</Typography>
        <Typography className="price">{formatPrice(price)}</Typography>
      </StyledProductContent>
    </StyledProductCard>
  );
};

export default ProductItem;
