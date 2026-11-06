import type { Category, CategoryId } from '../types/catalog';

interface CategoryFiltersProps {
  categories: Category[];
  active: CategoryId | 'all';
  onChange: (id: CategoryId | 'all') => void;
}

export default function CategoryFilters({ categories, active, onChange }: CategoryFiltersProps) {
  const options = [{ id: 'all' as const, label: 'Todas as marcas' }, ...categories];

  return (
    <div
      role="group"
      aria-label="Filtrar por categoria"
      className="scrollbar-none -mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
    >
      {options.map((option) => {
        const selected = option.id === active;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.id)}
            className={`h-10 shrink-0 rounded-full px-4 text-sm font-medium whitespace-nowrap transition-colors ${
              selected
                ? 'bg-ink text-white'
                : 'bg-white text-ink-soft ring-1 ring-line hover:text-ink hover:ring-ink-soft/40'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
