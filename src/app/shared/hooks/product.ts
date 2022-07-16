import { useQuery } from 'react-query';
import { fetchData } from '../../../api/api';
import { IFeatured } from '../types/product';

const featureProductUrl = 'http://localhost:4000/featured';

export function useFeaturedProduct() {
  return useQuery<IFeatured, Error>(['featuredProduct'], () => fetchData(featureProductUrl), {
    refetchOnWindowFocus: false
  });
}
