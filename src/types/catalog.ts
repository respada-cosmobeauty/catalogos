export type CategoryId =
  | 'beleza-cosmetica'
  | 'perfumaria'
  | 'higiene-cuidado-pessoal'
  | 'saude-bem-estar'
  | 'infantil'
  | 'acessorios-lifestyle'
  | 'animais';

export interface Category {
  id: CategoryId;
  label: string;
}

export interface Catalog {
  /** Identificador único (sem espaços nem acentos). */
  id: string;
  /** Nome apresentado no cartão. */
  name: string;
  /** Descrição curta (1 frase). */
  description: string;
  /** Categoria da marca. Os catálogos em destaque não têm categoria. */
  category?: CategoryId;
  /** Link Google Drive, exatamente como fornecido. */
  url: string;
  /** Caminho do logótipo em /public (ex.: "/brands/lovren.png"). Sem logótipo, é mostrado o nome. */
  logo?: string;
  /** true = aparece nos cartões grandes "em destaque" no topo. */
  featured?: boolean;
  /** Ordem de apresentação (números menores aparecem primeiro). */
  order: number;
}
