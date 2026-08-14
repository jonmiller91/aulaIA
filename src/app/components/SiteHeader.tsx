import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { whatsappLink } from "../lib/contact";

const NAV = [
  { label: "Início", to: "/#top" },
  { label: "Sobre", to: "/#sobre" },
  { label: "Coleção", to: "/#colecao" },
  { label: "Destaque", to: "/#destaque" },
  { label: "Processo", to: "/#processo" },
  { label: "Perguntas", to: "/#perguntas" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (to: string) => {
    setOpen(false);
    const [path, hash] = to.split("#");
    if (location.pathname !== (path || "/")) {
      navigate(to);
    } else if (hash) {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-12">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0 })}
          className="tracking-[0.28em] text-[15px] uppercase"
        >
          Select<span className="text-muted-foreground">cars</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.label}
              onClick={() => goTo(item.to)}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-[13px] text-muted-foreground"
            onClick={() => navigate("/colecao")}
          >
            <Search className="size-4" /> Buscar
          </Button>
          <Button
            asChild
            className="rounded-full px-6"
          >
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              Agendar visita
            </a>
          </Button>
        </div>

        <button
          className="flex size-9 items-center justify-center rounded-full md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <button
                key={item.label}
                onClick={() => goTo(item.to)}
                className="py-2 text-left text-[15px] text-muted-foreground"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-3 flex gap-2">
              <Button
                variant="outline"
                className="flex-1 rounded-full"
                onClick={() => {
                  setOpen(false);
                  navigate("/colecao");
                }}
              >
                <Search className="size-4" /> Buscar
              </Button>
              <Button asChild className="flex-1 rounded-full">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  Agendar visita
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
