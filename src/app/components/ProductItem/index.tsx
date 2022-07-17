import Typography from '@mui/material/Typography';
import { StyledProductCard, StyledProductImage, StyledProductContent } from './styles';
import { IProduct } from '../../shared/types/product';
import { formatPrice } from '../../shared/utils/helpers';

const ProductItem = (item: IProduct) => {
  const { name, image, category, price, bestseller, dimensions, srcset } = item;

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
        <button>Add to cart</button>
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
