// Verifica se cada link Google Drive abre sem autenticação.
// Uso: npm run check:links
import { catalogs } from '../src/data/catalogs.ts';

const results = await Promise.all(
  catalogs.map(async (c) => {
    try {
      const res = await fetch(c.url, { redirect: 'manual', headers: { 'User-Agent': 'Mozilla/5.0' } });
      const location = res.headers.get('location') ?? '';
      // Um link privado redireciona para accounts.google.com (página de login).
      if (res.status >= 300 && res.status < 400 && location.includes('accounts.google.com'))
        return [c, 'PRIVADO (pede login)'];
      if (res.status === 200) return [c, 'OK público'];
      return [c, `HTTP ${res.status}`];
    } catch (err) {
      return [c, `ERRO ${err.message}`];
    }
  }),
);

let failed = 0;
for (const [c, status] of results) {
  if (status !== 'OK público') failed++;
  console.log(`${status.padEnd(22)} ${c.name}`);
}
console.log(`\n${results.length - failed}/${results.length} links públicos`);
process.exit(failed ? 1 : 0);
