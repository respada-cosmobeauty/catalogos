import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <form role="search" onSubmit={(e) => e.preventDefault()} className="relative">
      <label htmlFor="pesquisa" className="sr-only">
        Pesquisar marca ou categoria
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-ink-soft"
      />
      <input
        id="pesquisa"
        type="search"
        inputMode="search"
        enterKeyHint="search"
        autoComplete="off"
        spellCheck={false}
        placeholder="Pesquisar marca ou categoria..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') onChange('');
        }}
        className="h-14 w-full rounded-2xl border border-line bg-white pr-14 pl-12 text-base text-ink shadow-[0_1px_2px_rgba(16,40,45,0.04),0_8px_24px_-12px_rgba(16,40,45,0.12)] transition-colors placeholder:text-ink-soft/80 hover:border-ink-soft/30 focus:border-brand-600 focus:outline-none focus-visible:outline-none focus:ring-4 focus:ring-brand/15"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Limpar pesquisa"
          className="absolute top-1/2 right-2 grid size-10 -translate-y-1/2 place-items-center rounded-xl text-ink-soft transition-colors hover:bg-canvas hover:text-ink"
        >
          <X aria-hidden="true" className="size-5" />
        </button>
      )}
    </form>
  );
}
