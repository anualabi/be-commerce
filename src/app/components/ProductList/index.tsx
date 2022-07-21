import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useProductList } from '../../shared/hooks/product';
import { Spinner } from '../../shared/components/Spinner';
import { Error } from '../../shared/components/Error';
import ProductItem from '../ProductItem';
import { getLastPageNumber } from '../../shared/utils/helpers';
import { StyledProducts, StyledProductList, StyledPagination } from './styles';
import { IProduct } from '../../shared/types/product';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data } = useProductList(page);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) return <Spinner />;

  if (isError) return <Error message="Error - Unable to display list of products." />;

  if (!data?.data) {
    return <Typography>No images were found.</Typography>;
  }

  const productList = data.data.map((item: IProduct) => <ProductItem key={item.id} {...item} />);

  return (
    <StyledProducts>
      <Typography variant="h2" className="products-heading">
        Photography / <span>Premium Photos</span>
      </Typography>
      <StyledProductList>{productList}</StyledProductList>
      <StyledPagination
        count={getLastPageNumber(data.headers.link)}
        page={page}
        onChange={handleChange}
        className="pagination"
      />
    </StyledProducts>
  );
};

export default ProductList;
