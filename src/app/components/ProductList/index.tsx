import Typography from '@mui/material/Typography';
import { useProductList } from '../../shared/hooks/product';
import { Spinner } from '../../shared/components/Spinner';
import { Error } from '../../shared/components/Error';
import ProductItem from '../ProductItem';
import { StyledProducts, StyledProductList } from './styles';

const ProductList = () => {
  const { isLoading, isError, data } = useProductList();

  if (isLoading) return <Spinner />;

  if (isError) return <Error message="Feature is not available." />;

  const productList = data?.map((item) => <ProductItem key={item.id} {...item} />);

  return (
    <StyledProducts>
      <Typography variant="h2" className="products-heading">
        Photography / <span>Premium Photos</span>
      </Typography>
      <StyledProductList>{productList}</StyledProductList>
    </StyledProducts>
  );
};

export default ProductList;
