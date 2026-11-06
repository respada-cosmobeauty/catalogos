export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>Catálogos e marcas disponíveis para os nossos parceiros comerciais.</p>
        <p>
          © Cosmobeauty — Todos os direitos reservados.{' '}
          <a
            href="https://cosmobeauty.pt/"
            className="font-medium text-ink underline-offset-4 hover:text-brand-700 hover:underline"
          >
            cosmobeauty.pt
          </a>
        </p>
      </div>
    </footer>
  );
}
