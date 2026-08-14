import { useMemo, useState } from "react";
import { MessageCircle, SlidersHorizontal, Search } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { VehicleCard } from "../components/VehicleCard";
import { VehicleDetailDrawer } from "../components/VehicleDetailDrawer";
import {
  FilterSidebar,
  EMPTY_FILTERS,
  type Filters,
} from "../components/catalog/FilterSidebar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { usePublishedVehicles } from "../hooks/useVehicles";
import { whatsappLink } from "../lib/contact";
import type { Vehicle } from "../data/vehicles";

const PILLS = [
  "Todos",
  "Esportivos",
  "Clássicos",
  "SUV Premium",
  "Edições limitadas",
  "Recém-chegados",
];

type SortKey = "recentes" | "menor-preco" | "maior-preco" | "menor-km";

const SORT_LABELS: Record<SortKey, string> = {
  recentes: "Recém-chegados",
  "menor-preco": "Menor preço",
  "maior-preco": "Maior preço",
  "menor-km": "Menor km",
};

export function CatalogPage() {
  const { vehicles } = usePublishedVehicles();
  const [pill, setPill] = useState("Todos");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("recentes");
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [selected, setSelected] = useState<Vehicle | null>(null);
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    let list = [...vehicles];

    if (pill !== "Todos") list = list.filter((v) => v.categoria === pill);

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((v) =>
        `${v.marca} ${v.modelo} ${v.cor}`.toLowerCase().includes(q),
      );
    }

    if (filters.soDisponiveis) list = list.filter((v) => v.disponivelVisita);
    list = list.filter((v) => (v.preco ?? 0) <= filters.precoMax);
    if (filters.marcas.length)
      list = list.filter((v) => filters.marcas.includes(v.marca));
    if (filters.carrocerias.length)
      list = list.filter((v) => filters.carrocerias.includes(v.carroceria));
    if (filters.cambios.length)
      list = list.filter((v) => filters.cambios.includes(v.cambio));
    if (filters.combustiveis.length)
      list = list.filter((v) => filters.combustiveis.includes(v.combustivel));

    switch (sort) {
      case "menor-preco":
        list.sort((a, b) => (a.preco ?? Infinity) - (b.preco ?? Infinity));
        break;
      case "maior-preco":
        list.sort((a, b) => (b.preco ?? 0) - (a.preco ?? 0));
        break;
      case "menor-km":
        list.sort((a, b) => a.km - b.km);
        break;
      default:
        list.sort(
          (a, b) =>
            new Date(b.dataCadastro).getTime() -
            new Date(a.dataCadastro).getTime(),
        );
    }

    return list;
  }, [vehicles, pill, query, sort, filters]);

  const handleSelect = (v: Vehicle) => {
    setSelected(v);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-[1400px] px-6 pt-28 md:px-12">
        {/* Cabeçalho */}
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          Coleção · Showroom São Paulo
        </div>
        <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.2rem)] font-medium tracking-[-0.02em]">
          {vehicles.length} veículos no acervo
        </h1>

        {/* Pills + busca + ordenação */}
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {PILLS.map((p) => (
              <button
                key={p}
                onClick={() => setPill(p)}
                className={`rounded-full border px-4 py-2 text-[13px] transition-colors ${
                  pill === p
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar marca, modelo ou cor"
                className="h-11 rounded-full pl-11"
              />
            </div>

            <div className="flex items-center gap-3">
              {/* Filtros mobile */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full lg:hidden"
                  >
                    <SlidersHorizontal className="size-4" /> Filtros
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[85%] overflow-y-auto p-6 sm:max-w-md">
                  <FilterSidebar filters={filters} onChange={setFilters} />
                </SheetContent>
              </Sheet>

              <Select
                value={sort}
                onValueChange={(v) => setSort(v as SortKey)}
              >
                <SelectTrigger className="h-11 w-[190px] rounded-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(SORT_LABELS) as SortKey[]).map((k) => (
                    <SelectItem key={k} value={k}>
                      {SORT_LABELS[k]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Layout com sidebar */}
        <div className="mt-12 grid gap-10 pb-24 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <FilterSidebar filters={filters} onChange={setFilters} />
            </div>
          </aside>

          <div>
            {results.length > 0 ? (
              <>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {results.map((v) => (
                    <VehicleCard
                      key={v.id}
                      vehicle={v}
                      onSelect={handleSelect}
                    />
                  ))}
                </div>
                <div className="mt-12 flex items-center justify-between border-t border-border pt-6 text-[13px] text-muted-foreground">
                  <span>
                    Exibindo 1–{results.length} de {results.length}
                  </span>
                  <span>01 / 01</span>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-surface p-12">
                <div className="max-w-lg">
                  <h3 className="text-[22px]">
                    Nenhum veículo encontrado com esses filtros.
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                    Fale diretamente com a loja — talvez tenhamos algo em
                    processo de chegada ou possamos buscar no mercado por você.
                  </p>
                </div>
                <Button asChild className="rounded-full px-6">
                  <a href={whatsappLink()} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" /> Falar no WhatsApp
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />

      <VehicleDetailDrawer
        vehicle={selected}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
}
