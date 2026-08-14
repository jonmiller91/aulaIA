import type { Selo } from "../data/vehicles";

const STYLES: Record<Selo, string> = {
  Raro: "bg-foreground text-background",
  "Última unidade": "bg-warning/10 text-warning border border-warning/30",
  Novo: "bg-success/10 text-success border border-success/30",
  "Edição limitada": "bg-foreground text-background",
  Reservado: "bg-muted text-muted-foreground border border-border",
};

/** Selo/tag do veículo com estilo editorial. */
export function SeloBadge({ selo }: { selo: Selo }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em] ${STYLES[selo]}`}
    >
      {selo}
    </span>
  );
}
