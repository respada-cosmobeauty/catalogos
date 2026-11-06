import { useMemo, useState } from 'react';
import { catalogs, categories } from './data/catalogs';
import type { CategoryId } from './types/catalog';
import { matchesQuery } from './search';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCatalogs from './components/FeaturedCatalogs';
import CategoryFilters from './components/CategoryFilters';
import BrandGrid from './components/BrandGrid';
import Footer from './components/Footer';

const byOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;

const featured = catalogs.filter((c) => c.featured).sort(byOrder);
const brands = catalogs.filter((c) => !c.featured).sort(byOrder);

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryId | 'all'>('all');

  const visibleFeatured = useMemo(
    () => featured.filter((c) => matchesQuery(c, query)),
    [query],
  );

  const visibleBrands = useMemo(
    () =>
      brands.filter(
        (c) => (category === 'all' || c.category === category) && matchesQuery(c, query),
      ),
    [query, category],
  );

  const reset = () => {
    setQuery('');
    setCategory('all');
  };

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#marcas"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Saltar para as marcas
      </a>
      <Header />
      <main className="flex-1">
        <Hero query={query} onQueryChange={setQuery} />
        <FeaturedCatalogs items={visibleFeatured} />
        <section id="marcas" aria-labelledby="marcas-titulo" className="mx-auto max-w-6xl scroll-mt-6 px-4 pb-20 sm:px-6">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 id="marcas-titulo" className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              As nossas marcas
            </h2>
            <p className="shrink-0 text-sm text-ink-soft" aria-live="polite">
              {visibleBrands.length} {visibleBrands.length === 1 ? 'marca' : 'marcas'}
            </p>
          </div>
          <CategoryFilters categories={categories} active={category} onChange={setCategory} />
          <BrandGrid
            items={visibleBrands}
            categories={categories}
            nothingFound={visibleBrands.length === 0 && visibleFeatured.length === 0}
            onReset={reset}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
