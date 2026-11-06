import { SearchX } from 'lucide-react';
import type { Catalog, Category } from '../types/catalog';
import BrandCard from './BrandCard';

interface BrandGridProps {
  items: Catalog[];
  categories: Category[];
  nothingFound: boolean;
  onReset: () => void;
}

export default function BrandGrid({ items, categories, nothingFound, onReset }: BrandGridProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-line bg-white px-6 py-14 text-center">
        <SearchX aria-hidden="true" className="mx-auto mb-4 size-8 text-ink-soft" strokeWidth={1.5} />
        <p className="font-display text-lg font-semibold">
          {nothingFound
            ? 'Não encontrámos catálogos para a sua pesquisa.'
            : 'Não há marcas para esta combinação de pesquisa e categoria.'}
        </p>
        <button
          type="button"
          onClick={onReset}
          className="mt-5 h-11 rounded-full bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-petrol"
        >
          Limpar pesquisa e filtros
        </button>
      </div>
    );
  }

  const labels = new Map(categories.map((c) => [c.id, c.label]));

  return (
    <ul className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.id} className="animate-fade-up">
          <BrandCard catalog={item} categoryLabel={item.category ? labels.get(item.category) : undefined} />
        </li>
      ))}
    </ul>
  );
}
