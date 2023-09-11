import { Meta } from '@interfaces';

export interface ISizeToColors {
  tamanho: string;
  cores: string[];
}

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
  categoria: Categoria;
}

export interface CategoriaData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Variante {
  id: number;
  quantidade: number;
  disponivel: boolean;
  size: Size;
  color: Color;
}

export interface Size {
  id: number;
  tamanho: string;
}

export interface ColorsImg {
  id: number;
  color_code: string;
  color_name: Color;
  img_color: ImgColor;
}

export interface Color {
  id: number;
  cor: string;
}

export interface ImgColor {
  data: ImgColorData;
}

export interface ImgColorData {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: PurpleFormats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: Provider;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export enum EXT {
  Jpg = '.jpg',
  PNG = '.png',
}

export interface PurpleFormats {
  thumbnail: Large;
  small: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
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

export enum Provider {
  Cloudinary = 'cloudinary',
}

export interface Gallery {
  data: DAT[];
}

export interface DAT {
  id: number;
  attributes: StickyAttributes;
}

export interface StickyAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: FluffyFormats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: Provider;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
  related: Related;
}

export interface FluffyFormats {
  thumbnail: Large;
  small: Large;
  medium?: Large;
  large?: Large;
}

export interface Related {
  data: RelatedDatum[];
}

export interface RelatedDatum {
  id: number;
  attributes: IndigoAttributes;
}

export interface IndigoAttributes {
  __type: string;
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

export interface Categoria {
  data: CategoriaData;
}

export interface CategoriaData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

// new  data
