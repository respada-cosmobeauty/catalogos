import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Catalog } from '../types/catalog';

interface BrandCardProps {
  catalog: Catalog;
  categoryLabel?: string;
}

export default function BrandCard({ catalog, categoryLabel }: BrandCardProps) {
  // Se o logótipo faltar ou falhar, mostra o nome da marca em texto.
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = catalog.logo && !logoFailed;

  return (
    <a
      href={catalog.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line shadow-[0_1px_2px_rgba(16,40,45,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(16,40,45,0.04),0_14px_30px_-14px_rgba(16,40,45,0.22)] hover:ring-brand/40"
    >
      <div className="flex h-24 items-center justify-center border-b border-line/70 px-4 sm:h-32 sm:px-6">
        {showLogo ? (
          <img
            src={catalog.logo}
            alt={`Logótipo ${catalog.name}`}
            loading="lazy"
            decoding="async"
            onError={() => setLogoFailed(true)}
            className="max-h-[4.5rem] w-auto max-w-full object-contain sm:max-h-24"
          />
        ) : (
          <span
            aria-hidden="true"
            className="line-clamp-2 text-center font-display text-lg leading-tight font-bold tracking-tight text-balance text-petrol sm:text-2xl"
          >
            {catalog.name}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        {categoryLabel && (
          <p className="mb-1 text-[0.68rem] font-semibold tracking-[0.08em] text-brand-700 uppercase sm:text-[0.7rem]">
            {categoryLabel}
          </p>
        )}
        <h3 className="font-display text-[0.95rem] leading-snug font-bold sm:text-base">{catalog.name}</h3>
        <p className="mt-1 text-[0.8rem] leading-relaxed text-ink-soft sm:text-sm">
          {catalog.description}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[0.8rem] font-semibold text-ink transition-colors group-hover:text-brand-700 sm:pt-4 sm:text-sm">
          Ver catálogo
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
          <span className="sr-only">(abre numa nova janela)</span>
        </span>
      </div>
    </a>
  );
}
