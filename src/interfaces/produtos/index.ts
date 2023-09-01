import { Sizes, CategoryData as DataCategoty, Meta } from '@interfaces';

export interface Product {
  data: ProductData[];
  meta: Meta;
}

export interface ProductData {
  id: number;
  attributes: ProductAttributes;
}

interface CategoryData {
  data: DataCategoty;
}

export interface ProductAttributes {
  title: string;
  description: string;
  price: number;
  highlight: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail: ThumbnailData;
  gallery: GaleryData;
  categoria: CategoryData;
  sizes: Sizes[];
}

interface ThumbnailData {
  data: ThumbnailAttributes;
}

interface ThumbnailAttributes {
  id: number;
  attributes: GenericValuesImages;
}

interface GaleryData {
  data: GaleryAttributes[];
}

interface GaleryAttributes {
  id: number;
  attributes: GenericValuesImages;
}

interface GenericValuesImages {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
}
