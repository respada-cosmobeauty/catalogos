export default function Header() {
  return (
    <header className="border-b border-line/70 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <a
          href="https://cosmobeauty.pt/"
          className="inline-flex items-center rounded-md"
          aria-label="Cosmobeauty — ir para o website principal"
        >
          <img
            src="/images/cosmobeauty-logo.png"
            alt="Cosmobeauty"
            width={537}
            height={136}
            className="h-7 w-auto sm:h-8"
          />
        </a>
        <span className="font-display text-xs font-semibold tracking-[0.2em] text-ink-soft uppercase">
          Catálogos
        </span>
      </div>
    </header>
  );
}
