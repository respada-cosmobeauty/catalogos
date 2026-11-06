// Valida src/data/catalogs.ts: IDs/URLs únicos, URLs Google Drive válidos,
// logótipos existentes em /public e categorias conhecidas.
// Uso: npm run check:data   (requer Node 22.18+ para importar .ts diretamente)
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { catalogs, categories } from '../src/data/catalogs.ts';

const root = fileURLToPath(new URL('..', import.meta.url));
const errors = [];
const dupes = (key) => {
  const seen = new Set();
  for (const c of catalogs) {
    if (seen.has(c[key])) errors.push(`${key} duplicado: ${c[key]}`);
    seen.add(c[key]);
  }
};

dupes('id');
dupes('url');
dupes('name');

const categoryIds = new Set(categories.map((c) => c.id));
for (const c of catalogs) {
  if (!/^https:\/\/drive\.google\.com\/(file\/d\/[\w-]+\/view|drive\/folders\/[\w-]+)$/.test(c.url))
    errors.push(`${c.id}: URL inesperado ${c.url}`);
  if (!c.featured && !categoryIds.has(c.category)) errors.push(`${c.id}: categoria inválida`);
  if (c.logo && !existsSync(root + 'public' + c.logo)) errors.push(`${c.id}: logótipo em falta ${c.logo}`);
}

const featured = catalogs.filter((c) => c.featured).length;
const withLogo = catalogs.filter((c) => c.logo).length;
console.log(`${catalogs.length} entradas: ${featured} em destaque + ${catalogs.length - featured} marcas (${withLogo} com logótipo)`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('OK');
