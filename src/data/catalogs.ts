import type { Catalog, Category } from '../types/catalog';

/*
 * ============================================================
 *  FICHEIRO ÚNICO DE MANUTENÇÃO DOS CATÁLOGOS
 * ============================================================
 *  - Alterar um link:       mude o campo `url`.
 *  - Adicionar uma marca:   copie um bloco { ... } e ajuste os campos
 *                           (o `id` tem de ser único).
 *  - Remover uma marca:     apague o bloco correspondente.
 *  - Alterar o logótipo:    coloque o ficheiro em /public/brands/ e
 *                           indique o caminho em `logo` (ex.: '/brands/marca.png').
 *                           Sem `logo`, o nome da marca é apresentado em texto.
 *  - Mudar a ordem:         altere o número em `order` (menor = primeiro).
 *  - Categorias possíveis:  ver a lista `categories` abaixo.
 * ============================================================
 */

export const categories: Category[] = [
  { id: 'beleza-cosmetica', label: 'Beleza e Cosmética' },
  { id: 'perfumaria', label: 'Perfumaria' },
  { id: 'higiene-cuidado-pessoal', label: 'Higiene e Cuidado Pessoal' },
  { id: 'saude-bem-estar', label: 'Saúde e Bem-estar' },
  { id: 'infantil', label: 'Infantil' },
  { id: 'acessorios-lifestyle', label: 'Acessórios e Lifestyle' },
  { id: 'animais', label: 'Animais' },
];

export const catalogs: Catalog[] = [
  // ---------- CATÁLOGOS EM DESTAQUE ----------
  {
    id: 'catalogo-geral',
    name: 'Catálogo Geral Cosmobeauty',
    description: 'Todas as marcas, produtos galénicos, promoções e novidades.',
    url: 'https://drive.google.com/file/d/1eDfNe2DeBNUvrrVRiilCAEU2IQf99JR1/view',
    featured: true,
    order: 1,
  },
  {
    id: 'promocoes',
    name: 'Promoções Cosmobeauty',
    description: 'Campanhas e artigos promocionais em vigor.',
    url: 'https://drive.google.com/file/d/10Jn42NHl0RYEfKet0FjTnmi9cA7AR-ea/view',
    featured: true,
    order: 2,
  },

  // ---------- BELEZA E COSMÉTICA ----------
  {
    id: 'lovren',
    name: 'Lovrén',
    description: 'Maquilhagem e dermocosmética italiana, exclusiva do canal farmácia.',
    category: 'beleza-cosmetica',
    url: 'https://drive.google.com/drive/folders/1PZC9MRj54EksTWnBClN_sfcyf5l4y10P',
    logo: '/brands/lovren.png',
    order: 10,
  },
  {
    id: 'beter',
    name: 'Beter',
    description: 'Beleza, cuidado pessoal e acessórios de alta qualidade.',
    category: 'beleza-cosmetica',
    url: 'https://drive.google.com/drive/folders/1O7WMuH-O6wZR_6kCx8qisPzz1CvRkiLC',
    order: 20,
  },
  {
    id: 'idc-institute',
    name: 'IDC Institute',
    description: 'Sets de oferta de cosmética, maquilhagem e cuidado pessoal.',
    category: 'beleza-cosmetica',
    url: 'https://drive.google.com/drive/folders/1dGpVHFs3c2JFZCqglWxt3ouT7n8aT6qS',
    logo: '/brands/idc-institute.png',
    order: 30,
  },

  // ---------- PERFUMARIA ----------
  {
    id: 'iap-pharma',
    name: 'IAP Pharma',
    description: 'Perfumes e cosmética para farmácias e parafarmácias.',
    category: 'perfumaria',
    url: 'https://drive.google.com/drive/folders/1fL9kklbuDlehPyuhGv_EbakWpY8o9VZX',
    logo: '/brands/iap-pharma.png',
    order: 40,
  },
  {
    id: 'aqc-fragrances',
    name: 'AQC Fragrances',
    description: 'Fragrâncias, body mists e sets de oferta.',
    category: 'perfumaria',
    url: 'https://drive.google.com/drive/folders/10F9L_jCz2ia8d5MtZ0yT3HuVlXmy8ft6',
    logo: '/brands/aqc-fragrances.png',
    order: 50,
  },
  {
    id: 'alta-perfumaria',
    name: 'Alta Perfumaria',
    description: 'Perfumes exclusivos para o mercado premium.',
    category: 'perfumaria',
    url: 'https://drive.google.com/file/d/1oHtV6S-0QamdQaWBsmfIrjH06ti9Ij1L/view',
    order: 60,
  },
  {
    id: 'saphir',
    name: 'Saphir',
    description: 'Perfumaria de equivalência e coffrets de oferta.',
    category: 'perfumaria',
    url: 'https://drive.google.com/drive/folders/1TiFpNUUdFf8hFDDNPOcSdTBECfxkuttN',
    order: 70,
  },
  {
    id: 'rudy',
    name: 'Rudy',
    description: 'Cuidado pessoal e fragrâncias com design sofisticado.',
    category: 'perfumaria',
    url: 'https://drive.google.com/drive/folders/1VOuEysnrFgQOdFLe75-jNzWkeQO1Hc30',
    logo: '/brands/rudy.png',
    order: 80,
  },

  // ---------- HIGIENE E CUIDADO PESSOAL ----------
  {
    id: 'haan',
    name: 'Haan',
    description: 'Higiene pessoal com design moderno e sustentável.',
    category: 'higiene-cuidado-pessoal',
    url: 'https://drive.google.com/drive/folders/1vYp00kgFi4WV9eveb2GAtY5WR5Pbi5na',
    order: 90,
  },
  {
    id: 'bon-matin',
    name: 'Bon Matin',
    description: 'Conjuntos de banho e spa para oferta.',
    category: 'higiene-cuidado-pessoal',
    url: 'https://drive.google.com/drive/folders/11r6oe-j2YFSyuvc0I30QYoiqquDittuu',
    order: 100,
  },
  {
    id: 'saponificio-artigianale-fiorentino',
    name: 'Saponificio Artigianale Fiorentino',
    description: 'Sabonetes e cosmética artesanal italiana.',
    category: 'higiene-cuidado-pessoal',
    url: 'https://drive.google.com/drive/folders/1uwM3P6lJij89iJsFnhkwoe_CKiqXQWgP',
    logo: '/brands/saponificio-artigianale-fiorentino.svg',
    order: 110,
  },
  {
    id: 'aga',
    name: 'AGA',
    description: 'Acetonas, removedores de verniz e produtos de higiene e desinfeção.',
    category: 'higiene-cuidado-pessoal',
    url: 'https://drive.google.com/drive/folders/11wuvuSuu_3YBJqibEBSTY9sDxrU0nzaY',
    logo: '/brands/aga.png',
    order: 120,
  },
  {
    id: 'bacterisan',
    name: 'Bacterisan',
    description: 'Higiene e cuidado da pele.',
    category: 'higiene-cuidado-pessoal',
    url: 'https://drive.google.com/drive/folders/12Zzx5nmdqsxk2jbULOICVsAEsstSnhMj',
    logo: '/brands/bacterisan.png',
    order: 130,
  },

  // ---------- SAÚDE E BEM-ESTAR ----------
  {
    id: 'roaman',
    name: 'Roaman',
    description: 'Escovas elétricas e irrigadores orais.',
    category: 'saude-bem-estar',
    url: 'https://drive.google.com/drive/folders/1fqSXDMWMomAMzQQLADzrsANEbefbRb3E',
    logo: '/brands/roaman.png',
    order: 140,
  },
  {
    id: 'maxinutrition',
    name: 'MaxiNutrition',
    description: 'Suplementos nutricionais de alta performance.',
    category: 'saude-bem-estar',
    url: 'https://drive.google.com/drive/folders/1AO9dtiOTabqb7MZR_gEUFsVyDQLcOdE7',
    logo: '/brands/maxinutrition.png',
    order: 150,
  },
  {
    id: 'minimelis',
    name: 'Minimelis',
    description: 'Suplementos em goma, 0% açúcar.',
    category: 'saude-bem-estar',
    url: 'https://drive.google.com/drive/folders/1eHOSfDXwf1t331q551Ow4qDURwz8O4i_',
    logo: '/brands/minimelis.png',
    order: 160,
  },
  {
    id: 'neocare',
    name: 'Neocare',
    description: 'Dispositivos de saúde, almofadas térmicas, termómetros e oxímetros.',
    category: 'saude-bem-estar',
    url: 'https://drive.google.com/drive/folders/1rW-ZkV9rVbCRk9RltKnQu3q6c6PROuaP',
    order: 170,
  },
  {
    id: 'gudslip',
    name: 'Gudslip',
    description: 'Produtos para o sono e bem-estar.',
    category: 'saude-bem-estar',
    url: 'https://drive.google.com/drive/folders/1MbZZ_WB1pnDSf8uhBwg22v-iJUGYxBV4',
    order: 180,
  },
  {
    id: 'garcia-1880',
    name: 'Garcia 1880',
    description: 'Produtos de ortopedia.',
    category: 'saude-bem-estar',
    url: 'https://drive.google.com/drive/folders/1E10OyS5DhqIORVkpWhlRhdyGyeTphQ9Y',
    logo: '/brands/garcia-1880.png',
    order: 190,
  },
  {
    id: 'peeth',
    name: 'Peeth',
    description: 'Soluções ortopédicas e desportivas.',
    category: 'saude-bem-estar',
    url: 'https://drive.google.com/drive/folders/1vQbrowAvNrftFSGprgFS1iXAFeqGr2xv',
    order: 200,
  },

  // ---------- INFANTIL ----------
  {
    id: 'martinelia',
    name: 'Martinelia',
    description: 'Maquilhagem, cosmética e acessórios para crianças.',
    category: 'infantil',
    url: 'https://drive.google.com/drive/folders/1MXmTjoeZ9WsvRJ_IOme-rIDqYH6bCQ0c',
    logo: '/brands/martinelia.png',
    order: 210,
  },
  {
    id: 'xplote',
    name: 'Xplote',
    description: 'Bálsamos labiais, sets de oferta e acessórios divertidos para os mais novos.',
    category: 'infantil',
    url: 'https://drive.google.com/drive/folders/1ykXcY2PnLNehPFmr8IJ6H1O6V6XMrxI9',
    order: 220,
  },
  {
    id: 'disney',
    name: 'Disney',
    description: 'Produtos licenciados para crianças.',
    category: 'infantil',
    url: 'https://drive.google.com/drive/folders/1dfS9LIJjSWL3IL4kjFVjb4cCeOIflQxh',
    order: 230,
  },
  {
    id: 'kiokids',
    name: 'Kiokids',
    description: 'Cuidados pessoais e brinquedos infantis.',
    category: 'infantil',
    url: 'https://drive.google.com/drive/folders/1NBcPmGO_Bb_61TfXgXN9pfHcXEGESL44',
    logo: '/brands/kiokids.png',
    order: 240,
  },

  // ---------- ACESSÓRIOS E LIFESTYLE ----------
  {
    id: 'aimmed',
    name: 'Aimmed',
    description: 'Óculos de leitura e de sol.',
    category: 'acessorios-lifestyle',
    url: 'https://drive.google.com/drive/folders/1yNHmygIjgPRSfZlYWqmDVyIxgR1-akCE',
    logo: '/brands/aimmed.png',
    order: 250,
  },
  {
    id: 'kommo',
    name: 'Kommo',
    description: 'Acessórios de moda.',
    category: 'acessorios-lifestyle',
    url: 'https://drive.google.com/drive/folders/13MnprZamvivJmTGcQE7VhDyseZewtwOB',
    order: 260,
  },
  {
    id: 'colors',
    name: 'Colors',
    description: 'Acessórios de lifestyle.',
    category: 'acessorios-lifestyle',
    url: 'https://drive.google.com/drive/folders/1sr5uWt5962YfE9sI_L0O2IHbNQmJDc1e',
    order: 270,
  },

  // ---------- ANIMAIS ----------
  {
    id: 'menforsan-pet',
    name: 'Menforsan Pet',
    description: 'Cuidados para animais de estimação.',
    category: 'animais',
    url: 'https://drive.google.com/drive/folders/1FcisaCie1JLxu64PC5OQelOv2k4ZhX3E',
    logo: '/brands/menforsan-pet.png',
    order: 280,
  },
];
