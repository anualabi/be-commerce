export type IProductImage = {
  src: string;
  alt: string;
};

type ProductDimension = { width: number; height: number };

type ProductDetails = {
  dimensions: ProductDimension;
  size: number;
  description: string;
  recommendations: IProductImage[];
};

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  currency: string;
  dimensions: ProductDimension;
  srcset: { lg: string; md: string; sm: string };
  image: IProductImage;
  bestseller: boolean;
  featured: boolean;
  details: ProductDetails;
}

export type ICart = Pick<IProduct, 'id' | 'name' | 'image' | 'price'>;
