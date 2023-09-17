import { Meta } from '../meta';

export interface Category {
  data: CategoryData[];
  meta: Meta;
}

export interface CategoryData {
  id: number;
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
