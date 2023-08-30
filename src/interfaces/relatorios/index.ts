export interface Relatorios {
  data: RelatoriosData[];
  meta: Meta;
}

interface RelatoriosData {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  title: string;
  description: string;
  url_file: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
