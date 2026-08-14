import { Link } from "react-router";
import { CONTACT_EMAIL, CONTACT_PHONE, whatsappLink } from "../lib/contact";

const NAV = ["Coleção", "Marcas", "Serviços", "Sobre", "Contato"];
const SERVICOS = [
  "Sourcing internacional",
  "Consignação premium",
  "Gestão de coleção",
  "Financiamento e seguro",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <div className="tracking-[0.28em] text-[15px] uppercase">
              Select<span className="text-muted-foreground">cars</span>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground">
              Curadoria de automóveis premium para o colecionador exigente.
              Atemporal. Discreta. Inconfundível.
            </p>
            <p className="mt-4 text-[13px] text-muted-foreground">
              São Paulo · Brasil
            </p>
          </div>

          <div>
            <h4 className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
              Navegação
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Coleção" ? "/colecao" : "/"}
                    className="text-[14px] text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
              Serviços
            </h4>
            <ul className="mt-5 space-y-3">
              {SERVICOS.map((item) => (
                <li
                  key={item}
                  className="text-[14px] text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
              Contato
            </h4>
            <ul className="mt-5 space-y-3 text-[14px] text-foreground/80">
              <li>{CONTACT_PHONE}</li>
              <li>{CONTACT_EMAIL}</li>
              <li className="text-muted-foreground">
                Endereço enviado no agendamento
              </li>
            </ul>
            <div className="mt-6 flex gap-4 text-[13px] text-muted-foreground">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-[12px] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© 2026 SELECTCARS — Todos os direitos reservados</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Política de privacidade
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Termos de uso
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Cookies
            </a>
            <Link
              to="/admin"
              className="transition-colors hover:text-foreground"
            >
              Área do lojista
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
