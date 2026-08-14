import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SeloBadge } from "./SeloBadge";
import { formatKm, formatPrice, resolveImage, type Vehicle } from "../data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect: (vehicle: Vehicle) => void;
}

export function VehicleCard({ vehicle, onSelect }: VehicleCardProps) {
  return (
    <button
      onClick={() => onSelect(vehicle)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        {vehicle.selos[0] && (
          <div className="absolute left-4 top-4 z-10">
            <SeloBadge selo={vehicle.selos[0]} />
          </div>
        )}
        <ImageWithFallback
          src={resolveImage(vehicle)}
          alt={`${vehicle.marca} ${vehicle.modelo}`}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-[17px] leading-tight">
            {vehicle.marca} {vehicle.modelo}
          </h3>
          <p className="mt-1.5 text-[13px] text-muted-foreground">
            {vehicle.ano} · {formatKm(vehicle.km)} · {vehicle.cor}
          </p>
        </div>

        <p className="line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
          {vehicle.descricao}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <span className="text-[15px]">{formatPrice(vehicle.preco)}</span>
          <span className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors group-hover:text-foreground">
            Ver detalhes
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </button>
  );
}
