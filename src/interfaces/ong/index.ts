export interface ONG {
  data: OngData;
}

export interface OngData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  slug: string;
  isActivated: boolean;
  vakinha_url: string | null;
  redesSociais: RedesSociai[];
  dadosBancarios: DadosBancarios;
  contato: Contato;
  pixDados: PixDados;
}

export interface Contato {
  id: number;
  email: string;
  telefone: string;
  endereco: string;
}

export interface DadosBancarios {
  id: number;
  banco: string;
  agencia: string;
  conta: string;
}

export interface PixDados {
  id: number;
  chave: string;
  nome: string;
  cidade: string;
  transactionId: string;
  message: string;
}

export interface RedesSociai {
  id: number;
  titulo: string;
  url: string;
  icon: Icon;
}

export interface Icon {
  data: IconData;
}

export interface IconData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: null;
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

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}
