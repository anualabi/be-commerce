import axios from 'axios';
import { useQuery } from 'react-query';
import { IProduct } from '../types/product';

const featureProductUrl = 'http://localhost:4000/featured';
const productListUrl = 'http://localhost:4000/products';

const fetchData = async <T>(url: string): Promise<T> => {
  const { data } = await axios.get(url);
  return data as T;
};

export function useFeaturedProduct() {
  return useQuery<IProduct, Error>(['featuredProduct'], () => fetchData(featureProductUrl), {
    refetchOnWindowFocus: false
  });
}

export function useProductList(page = 1) {
  return useQuery(
    ['products', { page }],
    async () => axios.get(`${productListUrl}?_page=${page}&_limit=6`),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  );
}
