import SearchBar from './SearchBar';

interface HeroProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export default function Hero({ query, onQueryChange }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Fundo discreto em tons da marca */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_65%_at_90%_0%,var(--color-mint)_0%,transparent_100%),radial-gradient(40%_55%_at_5%_15%,var(--color-brand-50)_0%,transparent_100%)]"
      />
      <div className="relative mx-auto max-w-3xl px-4 pt-12 pb-10 text-center sm:px-6 sm:pt-20 sm:pb-16">
        <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-brand-700 uppercase">
          Para farmácias, parafarmácias e parceiros
        </p>
        <h1 className="font-display text-[2rem] leading-tight font-bold tracking-tight text-balance text-ink sm:text-5xl">
          Explore os nossos catálogos
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-pretty text-ink-soft sm:text-lg">
          Descubra as nossas marcas, novidades e promoções. Encontre facilmente os produtos ideais
          para o seu negócio.
        </p>
        <div className="mx-auto mt-8 max-w-xl">
          <SearchBar value={query} onChange={onQueryChange} />
        </div>
      </div>
    </section>
  );
}
