import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SectionIndex } from "../SectionIndex";
import { Button } from "../ui/button";
import { VehicleCard } from "../VehicleCard";
import { VehicleDetailDrawer } from "../VehicleDetailDrawer";
import { usePublishedVehicles } from "../../hooks/useVehicles";
import { whatsappLink } from "../../lib/contact";
import type { Vehicle } from "../../data/vehicles";

const FILTERS = [
  "Todos",
  "Esportivos",
  "Clássicos",
  "SUV Premium",
  "Edições limitadas",
  "Recém-chegados",
];

export function CollectionPreview() {
  const navigate = useNavigate();
  const { vehicles } = usePublishedVehicles();
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<Vehicle | null>(null);
  const [open, setOpen] = useState(false);

  const filtered = (
    filter === "Todos"
      ? vehicles
      : vehicles.filter((v) => v.categoria === filter)
  ).slice(0, 6);

  const handleSelect = (v: Vehicle) => {
    setSelected(v);
    setOpen(true);
  };

  return (
    <section id="colecao" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionIndex label="03 / Coleção" />
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em]">
              Disponíveis no showroom.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Uma seleção atualizada semanalmente. Para a coleção completa,
              agende uma visita privada.
            </p>
          </div>
          <Button
            variant="outline"
            className="w-fit rounded-full"
            onClick={() => navigate("/colecao")}
          >
            Ver coleção completa <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-[13px] transition-colors ${
                filter === f
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <VehicleCard key={v.id} vehicle={v} onSelect={handleSelect} />
          ))}
        </div>

        {/* Não encontrou o que procura */}
        <div className="mt-16 flex flex-col items-start gap-6 rounded-3xl border border-border bg-surface p-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-[22px]">Não encontrou o que procura?</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
              Para modelos específicos, edições limitadas ou unidades em outros
              estados, compartilhe o que você procura. Buscamos no mercado interno
              e internacional.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full px-6 py-2">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> Falar com um curador
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6"
              onClick={() => navigate("/colecao")}
            >
              Ver coleção completa
            </Button>
          </div>
        </div>
      </div>

      <VehicleDetailDrawer
        vehicle={selected}
        open={open}
        onOpenChange={setOpen}
      />
    </section>
  );
}
