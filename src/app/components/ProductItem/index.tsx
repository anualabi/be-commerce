import Typography from '@mui/material/Typography';
import { StyledProductCard, StyledProductImage, StyledProductContent } from './styles';
import { IProduct } from '../../shared/types/product';

const ProductItem = (item: IProduct) => {
  const { name, image, category, price } = item;

  return (
    <StyledProductCard>
      <StyledProductImage>
        <img src={image.src} alt={image.alt} />
        <button>Add to cart</button>
      </StyledProductImage>
      <StyledProductContent>
        <Typography className="category"> {category}</Typography>
        <Typography className="name"> {name}</Typography>
        <Typography className="price"> {price}</Typography>
      </StyledProductContent>
    </StyledProductCard>
  );
};

export default ProductItem;
