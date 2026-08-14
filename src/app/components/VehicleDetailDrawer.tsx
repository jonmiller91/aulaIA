import { Check, MessageCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { SeloBadge } from "./SeloBadge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  formatKm,
  formatPrice,
  resolveImage,
  type Vehicle,
} from "../data/vehicles";
import { vehicleMessage, whatsappLink } from "../lib/contact";

interface Props {
  vehicle: Vehicle | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border py-3">
      <span className="text-[13px] text-muted-foreground">{label}</span>
      <span className="text-right text-[14px]">{value}</span>
    </div>
  );
}

export function VehicleDetailDrawer({ vehicle, open, onOpenChange }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full gap-0 overflow-y-auto p-0 sm:max-w-lg"
      >
        {vehicle && (
          <>
            <SheetHeader className="sr-only p-0">
              <SheetTitle>
                {vehicle.marca} {vehicle.modelo}
              </SheetTitle>
            </SheetHeader>

            <div className="relative aspect-[4/3] overflow-hidden bg-surface">
              <span className="pointer-events-none absolute inset-x-0 bottom-2 select-none text-center text-[64px] uppercase tracking-[0.1em] text-black/[0.04]">
                {vehicle.marca}
              </span>
              {vehicle.selos[0] && (
                <div className="absolute left-6 top-6 z-10">
                  <SeloBadge selo={vehicle.selos[0]} />
                </div>
              )}
              <ImageWithFallback
                src={resolveImage(vehicle)}
                alt={`${vehicle.marca} ${vehicle.modelo}`}
                className="relative h-full w-full object-contain p-8"
              />
            </div>

            <div className="flex flex-col gap-6 p-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {vehicle.categoria}
                </span>
                <h2 className="mt-2 text-[24px] leading-tight">
                  {vehicle.marca} {vehicle.modelo}
                </h2>
                <p className="mt-1.5 text-[14px] text-muted-foreground">
                  {vehicle.ano} · {formatKm(vehicle.km)} · {vehicle.cor}
                </p>
              </div>

              <p className="text-[14px] leading-relaxed text-muted-foreground">
                {vehicle.descricao}
              </p>

              <div>
                <h3 className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                  Especificações rápidas
                </h3>
                <div className="mt-2">
                  <SpecRow label="Motor / Potência" value={vehicle.motorPotencia} />
                  <SpecRow label="Velocidade máxima" value={vehicle.velMax} />
                  <SpecRow label="Câmbio" value={vehicle.cambio} />
                  <SpecRow label="Combustível" value={vehicle.combustivel} />
                </div>
              </div>

              {vehicle.destaques.length > 0 && (
                <div>
                  <h3 className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                    Destaques do veículo
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {vehicle.destaques.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-[14px]">
                        <Check className="size-4 shrink-0 text-success" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="text-[22px]">{formatPrice(vehicle.preco)}</div>
                <div className="mt-1 text-[13px] text-muted-foreground">
                  {vehicle.disponivelVisita
                    ? "Disponível para visita"
                    : "Consulte disponibilidade"}
                </div>
              </div>

              <Button asChild className="h-12 w-full rounded-full">
                <a
                  href={whatsappLink(vehicleMessage(vehicle.marca, vehicle.modelo))}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" />
                  Falar sobre este veículo no WhatsApp
                </a>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
