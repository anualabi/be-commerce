import { useQuery } from 'react-query';
import { fetchData } from '../../../api/api';
import { IProduct } from '../types/product';

const featureProductUrl = 'http://localhost:4000/featured';
const productListUrl = 'http://localhost:4000/products';

export function useFeaturedProduct() {
  return useQuery<IProduct, Error>(['featuredProduct'], () => fetchData(featureProductUrl), {
    refetchOnWindowFocus: false
  });
}

export function useProductList() {
  return useQuery<IProduct[], Error>(
    ['products'],
    () => fetchData(`${productListUrl}?_page=1&_limit=6`),
    {
      refetchOnWindowFocus: false
    }
  );
}
