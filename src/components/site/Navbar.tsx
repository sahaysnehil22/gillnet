const links = [
  { label: "Problem", id: "problem" },
  { label: "Solution", id: "solution" },
  { label: "Services", id: "services" },
  { label: "About", id: "team" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-[60px] max-w-[1440px] items-center justify-between px-6 md:h-[78px] md:px-16">
        <a href="#top" className="text-2xl leading-none md:text-[32px]">
          GillNet AI
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-[20px] leading-none transition-opacity hover:opacity-60"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo("cta")}
          className="rounded-full bg-primary px-7 py-2 text-[16px] text-primary-foreground md:text-[20px]"
        >
          Login
        </button>
      </div>

      <nav className="flex items-center justify-center gap-6 border-t border-border py-2 md:hidden">
        {links.map((l) => (
          <button key={l.id} onClick={() => scrollTo(l.id)} className="text-[15px]">
            {l.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
