import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { formatPrice } from "../../data/vehicles";
import {
  BRANDS,
  CAMBIOS,
  CARROCERIAS,
  COMBUSTIVEIS,
} from "../../data/vehicles";

export interface Filters {
  soDisponiveis: boolean;
  precoMax: number;
  marcas: string[];
  carrocerias: string[];
  cambios: string[];
  combustiveis: string[];
}

export const PRECO_MAX = 3450000;

export const EMPTY_FILTERS: Filters = {
  soDisponiveis: false,
  precoMax: PRECO_MAX,
  marcas: [],
  carrocerias: [],
  cambios: [],
  combustiveis: [],
};

interface Props {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value)
    ? arr.filter((v) => v !== value)
    : [...arr, value];
}

function Group<T extends string>({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: readonly T[];
  selected: T[];
  onToggle: (value: T) => void;
}) {
  return (
    <div className="border-t border-border py-6">
      <h4 className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
        {title}
      </h4>
      <div className="mt-4 flex flex-col gap-3">
        {options.map((opt) => (
          <label
            key={opt}
            className="flex cursor-pointer items-center gap-3 text-[14px]"
          >
            <Checkbox
              checked={selected.includes(opt)}
              onCheckedChange={() => onToggle(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

export function FilterSidebar({ filters, onChange }: Props) {
  const set = (patch: Partial<Filters>) => onChange({ ...filters, ...patch });

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-[16px]">Filtrar por</h3>
        <button
          onClick={() => onChange(EMPTY_FILTERS)}
          className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          Limpar
        </button>
      </div>

      <div className="border-t border-border py-6">
        <label className="flex cursor-pointer items-center gap-3 text-[14px]">
          <Checkbox
            checked={filters.soDisponiveis}
            onCheckedChange={(c) => set({ soDisponiveis: Boolean(c) })}
          />
          Apenas disponíveis para visita
        </label>
      </div>

      <div className="border-t border-border py-6">
        <h4 className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
          Faixa de valor
        </h4>
        <div className="mt-6">
          <Slider
            min={0}
            max={PRECO_MAX}
            step={50000}
            value={[filters.precoMax]}
            onValueChange={([v]) => set({ precoMax: v })}
          />
          <div className="mt-3 flex justify-between text-[12px] text-muted-foreground">
            <span>R$ 0</span>
            <span>até {formatPrice(filters.precoMax)}</span>
          </div>
        </div>
      </div>

      <Group
        title="Marca"
        options={BRANDS}
        selected={filters.marcas}
        onToggle={(v) => set({ marcas: toggle(filters.marcas, v) })}
      />
      <Group
        title="Carroceria"
        options={CARROCERIAS}
        selected={filters.carrocerias}
        onToggle={(v) => set({ carrocerias: toggle(filters.carrocerias, v) })}
      />
      <Group
        title="Câmbio"
        options={CAMBIOS}
        selected={filters.cambios}
        onToggle={(v) => set({ cambios: toggle(filters.cambios, v) })}
      />
      <Group
        title="Combustível"
        options={COMBUSTIVEIS}
        selected={filters.combustiveis}
        onToggle={(v) => set({ combustiveis: toggle(filters.combustiveis, v) })}
      />
    </div>
  );
}
