import { CategoryAttributes, Meta } from '@interfaces';

export interface ISizeToColors {
  tamanho: string;
  cores: string[];
}

// PRODUTOS

export interface Product {
  data: ProductData[];
  meta: Meta;
}

export interface ProductData {
  id: number;
  attributes: ProductAttributes;
}

export interface ProductAttributes {
  title: string;
  description: string;
  price: number;
  highlight: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  thumbnail: Thumbnail;
  gallery: Gallery;
  variantes: Variante[];
  colors_imgs: ColorsImg[];
  categoria: { data: Category };
}

// PRODUTOS
export interface Category {
  id: number;
  attributes: CategoryAttributes;
}

export interface ColorsImg {
  id: number;
  color_code: string;
  color_name: Cores;
  img_color: ImgColor;
}

/* export interface Color {
  id: number;
  cor: string;
}
 */
export interface ImgColor {
  data: ImgColorData;
}

export interface ImgColorData {
  id: number;
  attributes: TentacledAttributes;
}

export interface Gallery {
  data: DAT[] | null;
}

export interface DAT {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
  related: Related;
}

export enum EXT {
  Jpg = '.jpg',
  PNG = '.png',
}

export interface Formats {
  large?: Large;
  small: Large;
  medium?: Large;
  thumbnail: Large;
}

export interface Large {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export enum MIME {
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png',
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = 'image',
}

export interface Related {
  data: RelatedDatum[];
}

export interface RelatedDatum {
  id: number;
  attributes: StickyAttributes;
}

export interface StickyAttributes {
  title: string;
  description: string;
  price: number;
  highlight: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Thumbnail {
  data: DAT;
}

// Variaçoes

export interface Variante {
  id: number;
  quantidade: number;
  disponivel: boolean;
  /*   size: Size; */
  /*   color: Color; */
  tamanhos: Tamanhos;
  cores: Cores;
}

// Cores

interface Cores {
  data: CoresData;
}

export interface CoresData {
  id: number;
  attributes: CoresAttributes;
}

export interface CoresAttributes {
  cor: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

// fim Cores

// tamnhos

interface Tamanhos {
  data: TamanhosData;
}

export interface TamanhosData {
  id: number;
  attributes: TamanhosAttributes;
}

export interface TamanhosAttributes {
  tamanho: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

// fim tamnhos

export interface Size {
  id: number;
  tamanho: string;
}
