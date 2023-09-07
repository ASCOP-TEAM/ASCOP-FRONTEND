export interface IContato {
  data: ContatoData;
}

export interface ContatoData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  isActivated: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  topblocksection: Bloco1;
  bloco1: Bloco1;
  bloco2: Bloco1;
}

export interface Bloco1 {
  id: number;
  titulo: string;
  descricao: string;
  background?: Background;
}

export interface Background {
  data: BackgroundData;
}

export interface BackgroundData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  thumbnail: Large;
  medium: Large;
  small: Large;
  large: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}
