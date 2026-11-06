# Portal de Catálogos Cosmobeauty

Página pública e estática que reúne todos os catálogos Cosmobeauty (links Google Drive) para farmácias, parafarmácias e parceiros.
Não tem backend, base de dados, login, cookies nem recolha de dados.

**Stack:** React 19 + Vite + TypeScript + Tailwind CSS 4 + Lucide Icons. As fontes Manrope e Inter (as mesmas de cosmobeauty.pt) estão alojadas no próprio site, sem pedidos à Google.

## 1. Executar localmente

Requer Node.js 22.18 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:5173.

## 2. Gerar a build de produção

```bash
npm run build      # verifica TypeScript e gera a pasta dist/
npm run preview    # (opcional) serve dist/ em http://localhost:4173
```

A pasta `dist/` é o site completo: basta copiá-la para qualquer servidor web estático.

## 3. Publicar num servidor com Nginx

```bash
# no servidor
sudo mkdir -p /var/www/catalogos

# no seu computador (após npm run build)
rsync -avz --delete dist/ utilizador@servidor:/var/www/catalogos/

# no servidor
sudo cp nginx.conf /etc/nginx/sites-available/catalogos.cosmobeauty.pt   # ficheiro em deploy/nginx.conf
sudo ln -s /etc/nginx/sites-available/catalogos.cosmobeauty.pt /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# HTTPS gratuito (Let's Encrypt)
sudo certbot --nginx -d catalogos.cosmobeauty.pt
```

**Alternativas sem servidor:** Cloudflare Pages ou Vercel. Ligue o repositório, com o comando de build `npm run build` e a pasta de saída `dist`.

## 4. Configurar o subdomínio catalogos.cosmobeauty.pt

No painel DNS do domínio `cosmobeauty.pt`, crie **um** destes registos:

| Onde está alojado | Tipo | Nome | Valor |
|---|---|---|---|
| Servidor próprio (Nginx) | `A` | `catalogos` | IP público do servidor |
| Cloudflare Pages / Vercel | `CNAME` | `catalogos` | endereço indicado pela plataforma (ex.: `cosmobeauty-catalogos.pages.dev` ou `cname.vercel-dns.com`) |

Depois de o DNS propagar (de minutos a algumas horas), ative o HTTPS: com `certbot`, como indicado acima, ou automaticamente no Cloudflare/Vercel.

> A imagem de pré-visualização do WhatsApp usa o endereço absoluto `https://catalogos.cosmobeauty.pt/images/og-image.png`. Se o site for publicado noutro endereço, atualize os campos `og:url`, `og:image` e `canonical` em `index.html`.

## 5. Atualizar os catálogos

**Tudo é feito num único ficheiro: [`src/data/catalogs.ts`](src/data/catalogs.ts).** Não é preciso mexer nos componentes.

| Quero… | Faço… |
|---|---|
| Alterar um link | Mudar o `url` da marca |
| Alterar uma descrição | Mudar o `description` |
| Adicionar uma marca | Copiar um bloco `{ ... }`, dar-lhe um `id` único e preencher os campos |
| Remover uma marca | Apagar o bloco |
| Alterar o logótipo | Colocar o ficheiro (SVG ou PNG transparente) em `public/brands/` e indicar `logo: '/brands/ficheiro.png'` |
| Mostrar o nome em vez de logótipo | Apagar a linha `logo` |
| Mudar a ordem | Alterar o número `order` (menor = aparece primeiro) |
| Pôr em destaque | `featured: true` (aparece nos cartões grandes do topo) |

Exemplo de marca:

```ts
{
  id: 'nova-marca',
  name: 'Nova Marca',
  description: 'Descrição curta numa frase.',
  category: 'beleza-cosmetica',
  url: 'https://drive.google.com/drive/folders/XXXXXXXX',
  logo: '/brands/nova-marca.png',
  order: 35,
},
```

Categorias disponíveis: `beleza-cosmetica`, `perfumaria`, `higiene-cuidado-pessoal`, `saude-bem-estar`, `infantil`, `acessorios-lifestyle`, `animais`.

Depois de editar:

```bash
npm run check:data    # verifica IDs/links duplicados, categorias e logótipos em falta
npm run check:links   # verifica se os links Google Drive abrem sem login
npm run build         # e publique de novo a pasta dist/
```

## 6. Estrutura

```
src/
  components/   Header, Hero, SearchBar, FeaturedCatalogs, CategoryFilters, BrandGrid, BrandCard, Footer
  data/         catalogs.ts  ← único ficheiro a editar
  types/        catalog.ts
  styles/       index.css (cores e tipografia da marca)
  search.ts     pesquisa sem acentos/maiúsculas ("perfumes" encontra "Perfumaria")
public/
  brands/       logótipos das marcas
  images/       logótipo Cosmobeauty e imagem de partilha (og-image.png)
deploy/
  nginx.conf
scripts/
  check-data.mjs, check-links.mjs
```

## 7. Origem dos logótipos

- **Do site oficial cosmobeauty.pt:** Lovrén, IAP Pharma, AQC Fragrances, Rudy, AGA, MaxiNutrition, Garcia 1880, Martinelia, Kiokids, Aimmed, além do logótipo e do favicon Cosmobeauty.
- **Fornecido pela Cosmobeauty:** IDC Institute.
- **Dos sites oficiais das marcas:** Saponificio Artigianale Fiorentino, Bacterisan, Roaman, Minimelis, Menforsan.
- **Sem logótipo (o nome aparece em texto):** Beter, Alta Perfumaria, Saphir, Haan, Bon Matin, Neocare, Gudslip, Peeth, Xplote, Disney, Kommo, Colors.
