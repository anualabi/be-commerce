import axios from 'axios';
import { useQuery } from 'react-query';
import { fetchData } from '../../services/services';
import { Product } from '../types/product';

const featureProductUrl = 'http://localhost:4000/featured';
const productListUrl = 'http://localhost:4000/products';

export function useFeaturedProduct() {
  return useQuery<Product, Error>(['featuredProduct'], () => fetchData(featureProductUrl), {
    refetchOnWindowFocus: false
  });
}

export function useProductList(page = 1, sortBy = 'price', orderBy = 'asc') {
  return useQuery(
    ['products', { page, sortBy, orderBy }],
    async () =>
      axios.get(`${productListUrl}?_page=${page}&_limit=6&_sort=${sortBy}&_order=${orderBy}`),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  );
}
