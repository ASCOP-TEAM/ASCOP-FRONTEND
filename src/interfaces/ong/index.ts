import { Meta } from '../meta';

export interface ONG {
  data: ONGData;
  meta: Meta;
}

export interface ONGData {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  isActivated: boolean;
  slug: string;
  vakinha_url: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  redesSociais: RedesSociai[];
  dadosBancarios: DadosBancarios;
  contato: Contato;
  pixDados: PixDados;
  footer: Footer[];
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

export interface Footer {
  id: number;
  __component: string;
  aboutproject: Aboutproject;
  linksUteis: RedesSociai[];
  importantLinks: RedesSociai[];
}

export interface Aboutproject {
  id: number;
  titulo: string;
  descricao: string;
}

export interface RedesSociai {
  id: number;
  titulo: string;
  url: string;
}

export interface PixDados {
  id: number;
  chave: string;
  nome: string;
  cidade: string;
  transactionId: string;
  message: string;
}
