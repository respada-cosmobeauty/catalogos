import { ArrowUpRight, BookOpen, Tag } from 'lucide-react';
import type { Catalog } from '../types/catalog';

interface FeaturedCatalogsProps {
  items: Catalog[];
}

/** O primeiro cartão em destaque usa o tom escuro; os restantes o tom claro. */
const styles = [
  {
    card: 'bg-petrol text-white hover:bg-[#04505a]',
    icon: 'bg-white/10 text-white',
    desc: 'text-white/80',
    cta: 'text-white',
    Icon: BookOpen,
  },
  {
    card: 'bg-white text-ink ring-1 ring-line hover:ring-brand/50',
    icon: 'bg-brand-50 text-brand-700',
    desc: 'text-ink-soft',
    cta: 'text-brand-700',
    Icon: Tag,
  },
];

export default function FeaturedCatalogs({ items }: FeaturedCatalogsProps) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="destaques-titulo" className="mx-auto max-w-6xl px-4 pt-2 pb-14 sm:px-6 sm:pb-16">
      <h2 id="destaques-titulo" className="sr-only">
        Catálogos em destaque
      </h2>
      <ul className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {items.map((item, i) => {
          const s = styles[i === 0 ? 0 : 1];
          return (
            <li key={item.id} className="animate-fade-up">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col rounded-3xl p-6 shadow-[0_1px_2px_rgba(16,40,45,0.05),0_12px_32px_-16px_rgba(16,40,45,0.25)] transition-all duration-200 hover:-translate-y-0.5 sm:p-8 ${s.card}`}
              >
                <span className={`mb-6 grid size-12 place-items-center rounded-2xl ${s.icon}`}>
                  <s.Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{item.name}</h3>
                <p className={`mt-2 text-[0.95rem] leading-relaxed ${s.desc}`}>{item.description}</p>
                <span className={`mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold ${s.cta}`}>
                  Ver catálogo
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                  <span className="sr-only">(abre numa nova janela)</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
