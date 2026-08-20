import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Problem", id: "problem" },
  { label: "Solution", id: "solution" },
  { label: "Services", id: "services" },
  { label: "About", id: "team" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.getElementById("site-header");
  const offset = (header?.offsetHeight ?? 0) + 12;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollTo(id), 10);
  };

  return (
    <header id="site-header" className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-[62px] max-w-[1440px] items-center justify-between gap-4 px-6 md:h-[78px] md:px-10 lg:px-16">
        <a href="#top" className="shrink-0 text-2xl leading-none md:text-[28px] lg:text-[32px]">
          GillNet AI
        </a>

        <nav className="hidden items-center gap-5 md:flex lg:gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-[17px] leading-none transition-opacity hover:opacity-60 lg:text-[20px]"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go("cta")}
            className="hidden rounded-full bg-primary px-6 py-2 text-[17px] text-primary-foreground md:block lg:px-7 lg:text-[20px]"
          >
            Login
          </button>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-primary md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col px-6 py-4">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="border-b border-border py-4 text-left text-[20px]"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("cta")}
              className="mt-5 h-[46px] rounded-full bg-primary text-[18px] text-primary-foreground"
            >
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
