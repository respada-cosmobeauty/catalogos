import type { Catalog } from './types/catalog';
import { categories } from './data/catalogs';

/** Minúsculas e sem acentos: "Lovrén" → "lovren". */
export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

/** Radical simples em português, para que "perfumes" encontre "perfumaria". */
function stem(word: string): string {
  const stemmed = word.replace(/(arias?|rias?|es|s|a|o)$/, '');
  return stemmed.length >= 4 ? stemmed : word;
}

const categoryLabel = new Map(categories.map((c) => [c.id, c.label]));

function haystack(catalog: Catalog): string {
  const label = catalog.category ? categoryLabel.get(catalog.category) ?? '' : '';
  return normalize(`${catalog.name} ${catalog.description} ${label}`);
}

/** Cada palavra da pesquisa tem de aparecer (ou o seu radical) no nome, descrição ou categoria. */
export function matchesQuery(catalog: Catalog, query: string): boolean {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return true;
  const text = haystack(catalog);
  return words.every((word) => text.includes(word) || text.includes(stem(word)));
}
