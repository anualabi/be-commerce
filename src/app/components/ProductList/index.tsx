import { SetStateAction, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useProductList } from '../../shared/hooks/product';
import { Spinner } from '../../shared/components/Spinner';
import { Error } from '../../shared/components/Error';
import ProductItem from '../ProductItem';
import { getLastPageNumber } from '../../shared/utils/helpers';
import { StyledProducts, StyledProductList, StyledPagination } from './styles';
import { Product } from '../../shared/types/product';
import SortProduct from '../SortProduct';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('price');
  const [orderBy, setOrderBy] = useState('asc');
  const { isLoading, isError, data } = useProductList(page, sortBy, orderBy);

  if (isLoading) return <Spinner />;

  if (isError) return <Error message="Error - Unable to display list of products." />;

  if (!data?.data) {
    return <Typography>No images were found.</Typography>;
  }

  const productList = data.data.map((item: Product) => <ProductItem key={item.id} {...item} />);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);

  const onProductSort = (e: SetStateAction<string>) => setSortBy(e);

  const onProductOrder = () => (orderBy === 'asc' ? setOrderBy('desc') : setOrderBy('asc'));

  return (
    <StyledProducts>
      <Box className="products-header">
        <Typography variant="h2" className="products-heading">
          Photography / <span>Premium Photos</span>
        </Typography>
        <SortProduct
          sortType={sortBy}
          handleSortBy={onProductSort}
          handleOrderBy={onProductOrder}
        />
      </Box>
      <StyledProductList>{productList}</StyledProductList>
      <StyledPagination
        count={getLastPageNumber(data.headers.link)}
        page={page}
        onChange={onPageChange}
      />
    </StyledProducts>
  );
};

export default ProductList;
