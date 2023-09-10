export interface IHome {
  data: Data;
}

// dados mcomeço

export interface Data {
  id: number;
  attributes: PurpleAttributes;
}

// dadso da matriz
export interface PurpleAttributes {
  isActivated: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  bloco1: Bloco;
  bloco2: Bloco;
  bloco3: Bloco3;
  bloco4: Bloco;
  bloco5: Bloco3;
}

// componete bloco
export interface Bloco {
  id: number;
  titulo: string;
  descricao: string;
  botao: Botao | null;
  sliders?: Sliders;
  photo?: Photo;
}

// componete de botao

export interface Botao {
  id: number;
  titulo: string;
  url: string;
}

export interface Photo {
  data: DAT;
}

export interface DAT {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  name: string;
  alternativeText: null;
  caption: null;
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
}

export enum EXT {
  Jpg = '.jpg',
  Webp = '.webp',
}

export interface Formats {
  thumbnail: Large;
  small: Large;
  medium?: Large;
  large?: Large;
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
  ImageWebp = 'image/webp',
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = 'image',
}

export interface Sliders {
  data: DAT[];
}

export interface Bloco3 {
  id: number;
  titulo: string;
  descricao: string;
  quando: string;
  cards?: Bloco3[];
}
