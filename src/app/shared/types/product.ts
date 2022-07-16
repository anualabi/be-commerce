type ProductImage = {
  src: string;
  alt: string;
};

type ProductDimension = { width: number; height: number };

type ProductDetails = {
  dimensions: ProductDimension;
  size: number;
  description: string;
  recommendations: ProductImage[];
};

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  currency: string;
  dimensions: ProductDimension;
  image: ProductImage;
  bestseller: boolean;
  featured: boolean;
  details: ProductDetails | null;
}
