export interface ICadastros {
  data: CadastrosData;
}

export interface CadastrosData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  isActivated: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  background: Background;
  bloco1: Bloco;
  bloco2: Bloco;
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
  related: Related;
}

export interface Formats {
  thumbnail: Large;
  small: Large;
  medium: Large;
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

export interface Related {
  data: Datum[];
}

export interface Datum {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  __type: string;
  isActivated: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Bloco {
  id: number;
  blockSumary: BlockSumary;
  button: Button;
}

export interface BlockSumary {
  id: number;
  titulo: string;
  descricao: string;
}

export interface Button {
  id: number;
  titulo: string;
  url: string;
}
