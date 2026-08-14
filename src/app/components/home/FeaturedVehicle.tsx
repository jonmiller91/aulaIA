import { useState } from "react";
import { useNavigate } from "react-router";
import { X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Button } from "../ui/button";
import { SectionIndex } from "../SectionIndex";
import { vehicleMessage, whatsappLink } from "../../lib/contact";
import imgFeatured from "../../../imports/FeaturedVehicle/de44e145aa649f87342cd0b43305658c7a6a2db5.png";

const SPECS = [
  { campo: "Motor",             valor: "4.0L Boxer 6 aspirado · 525 cv · 0–100 km/h em 3.2s" },
  { campo: "Velocidade máxima", valor: "296 km/h" },
  { campo: "Transmissão",       valor: "Tração traseira · PDK 7 velocidades" },
  { campo: "Combustível",       valor: "13.6 / 8.9 L/100 km · Combinado · WLTP" },
];

const TABS = ["Exterior", "Interior", "Mecânica", "Documentação"];

const TAB_CONTENT: Record<string, string> = {
  Exterior:
    "Pintura Branco Carrara original com aero kit Weissach e detalhes em fibra de carbono aparente. Nenhum retoque ou repintura.",
  Interior:
    "Bancos concha em fibra de carbono, arco de segurança e acabamento Race-Tex. Estado impecável de primeiro dono.",
  Mecânica:
    "Motor 4.0L Boxer 6 aspirado de 525 cv, câmbio PDK de 7 velocidades. Revisões em dia na concessionária oficial Porsche.",
  Documentação:
    "Laudo técnico independente, histórico de manutenção completo e procedência verificada desde o primeiro proprietário.",
};

const COLORS = [
  { name: "Branco Carrara", hex: "#f0ede8" },
  { name: "Prata Gelo",     hex: "#c8c8c4" },
  { name: "Cinza Pedra",    hex: "#8c8c88" },
  { name: "Grafite",        hex: "#585856" },
  { name: "Preto Jet",      hex: "#1e1e1c" },
];

// anchor "left"  → left edge of group at bx%
// anchor "center" → group centered at bx%
// All badges in sky (by ≤ 15%) or ground (by ≥ 85%) — never over the car body
const ANNOTATIONS: Array<{
  label: string;
  bx: number;
  by: number;
  anchor: "left" | "center";
  description: string;
}> = [
  {
    label: "Aero kit Weissach",
    bx: 6, by: 15, anchor: "left",
    description:
      "Conjunto aerodinâmico em fibra de carbono que aumenta a downforce em 25%, com difusor dianteiro, asas laterais e aileron traseiro ajustável.",
  },
  {
    label: "Teto em magnésio",
    bx: 40, by: 7, anchor: "center",
    description:
      "Teto em liga de magnésio Porsche Exclusive — 6 kg mais leve que o aço, abaixando o centro de gravidade e melhorando a dinâmica em curva.",
  },
  {
    label: 'Rodas forjadas 20"',
    bx: 6, by: 86, anchor: "left",
    description:
      'Rodas forjadas em liga leve de 20" dianteiras e 21" traseiras, com pinças de freio cerâmicas PCCB — redução de 8 kg de massa não suspensa.',
  },
  {
    label: "Bancos em fibra de carbono",
    bx: 62, by: 15, anchor: "center",
    description:
      "Bancos concha adaptativos em fibra de carbono com Race-Tex, 20 kg mais leves que os de série, com suporte lateral aumentado para uso em pista.",
  },
];

export function FeaturedVehicle() {
  const navigate = useNavigate();
  const [activeColor, setActiveColor] = useState(1);
  const [openLabel, setOpenLabel]     = useState<string | null>(null);

  return (
    <section id="destaque" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionIndex label="02 / Em destaque" />
        <h2 className="mt-8 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em]">
          Cada detalhe contado.
          <br />
          <span className="text-muted-foreground">Cada procedência verificada.</span>
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_420px]">

          {/* ── Left column: image card + color selector ─────────────────────── */}
          <div className="flex flex-col">

            {/* Image card — fixed aspect ratio */}
            <div className="overflow-hidden rounded-3xl border border-[#e7e7e4] bg-[#f7f7f5]">
              <div className="relative w-full" style={{ paddingBottom: "60%" }}>

                {/* Car image — centered */}
                <img
                  src={imgFeatured}
                  alt="Porsche 911 GT3 RS em destaque"
                  className="absolute inset-0 h-full w-full object-contain object-center p-10"
                />

                {/* Annotation badge groups */}
                {ANNOTATIONS.map((a) => {
                  const isOpen = openLabel === a.label;
                  const posStyle: React.CSSProperties =
                    a.anchor === "left"
                      ? { left: `${a.bx}%`, top: `${a.by}%`, transform: "translateY(-50%)" }
                      : { left: `${a.bx}%`, top: `${a.by}%`, transform: "translate(-50%, -50%)" };

                  return (
                    <div key={a.label} className="absolute z-10" style={posStyle}>
                      <div className="flex items-center gap-2">

                        {/* + / × circle — h-7 matching badge height */}
                        <button
                          onClick={() => setOpenLabel(isOpen ? null : a.label)}
                          aria-expanded={isOpen}
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${
                            isOpen
                              ? "border-[#161616] bg-[#161616] text-white"
                              : "border-border bg-background/90 text-foreground shadow-sm backdrop-blur-sm hover:border-foreground"
                          }`}
                        >
                          <span className="text-[14px] font-light leading-none">
                            {isOpen ? "×" : "+"}
                          </span>
                        </button>

                        {/* Text badge — site style, h-7 */}
                        <div className="flex h-7 items-center rounded-full border border-border bg-background/90 px-3 backdrop-blur-sm">
                          <span className="whitespace-nowrap text-[13px] tracking-[-0.01em] text-muted-foreground">
                            {a.label}
                          </span>
                        </div>

                      </div>
                    </div>
                  );
                })}

                {/* Description panel — appears inside image frame when badge open */}
                {openLabel && (
                  <div className="absolute inset-x-4 bottom-4 z-20">
                    <div className="rounded-2xl border border-[#e7e7e4] bg-white/96 px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.09)] backdrop-blur-md">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[12px] font-medium leading-snug text-[#161616]">
                            {openLabel}
                          </p>
                          <p className="mt-1 text-[11px] leading-relaxed text-[#6b6b66]">
                            {ANNOTATIONS.find((a) => a.label === openLabel)?.description}
                          </p>
                        </div>
                        <button
                          onClick={() => setOpenLabel(null)}
                          className="shrink-0 rounded-full p-0.5 text-[#6b6b66] transition-colors hover:text-[#161616]"
                        >
                          <X className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Color selector — outside image, pushed to bottom of column via mt-auto */}
            {/* Aligns with the Ver coleção / Solicitar proposta buttons on the right */}
            <div className="mt-auto pt-8">
              <div className="flex h-12 w-fit items-center gap-3 rounded-full border border-border bg-background px-2 shadow-sm">
                <span className="flex h-8 items-center rounded-full bg-[#161616] px-4 text-[10px] uppercase tracking-[0.18em] text-white">
                  Cores
                </span>
                <div className="flex items-center gap-[10px] pr-1">
                  {COLORS.map((c, i) => (
                    <button
                      key={c.name}
                      title={c.name}
                      onClick={() => setActiveColor(i)}
                      className="relative size-5 rounded-full transition-all"
                      style={{ backgroundColor: c.hex }}
                    >
                      {activeColor === i && (
                        <span className="pointer-events-none absolute inset-[-4px] rounded-full border border-[#aaaaaa]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ── Right column: specs panel ─────────────────────────────────────── */}
          <div>
            <div className="flex items-start justify-between gap-4 border-b border-border pb-6">
              <div>
                <h3 className="text-[22px] font-medium leading-tight tracking-[-0.01em]">
                  Porsche 911 GT3 RS
                </h3>
                <p className="mt-1 text-[13px] text-muted-foreground">Esportivo · 2024</p>
              </div>
              <span className="shrink-0 text-[22px] tracking-[-0.01em]">R$ 2.890.000</span>
            </div>

            <div className="mt-6">
              {SPECS.map((s) => (
                <div
                  key={s.campo}
                  className="flex items-baseline justify-between gap-4 border-b border-border py-[17px]"
                >
                  <span className="shrink-0 text-[13px] text-muted-foreground">{s.campo}</span>
                  <span className="text-right text-[14px]">{s.valor}</span>
                </div>
              ))}
            </div>

            {/* Tabs — single row */}
            <Tabs defaultValue="Exterior" className="mt-8 gap-4">
              <TabsList className="flex h-auto w-full justify-start gap-1 rounded-full bg-muted p-1">
                {TABS.map((t) => (
                  <TabsTrigger key={t} value={t} className="rounded-full px-4 text-[13px]">
                    {t}
                  </TabsTrigger>
                ))}
              </TabsList>
              {TABS.map((t) => (
                <TabsContent key={t} value={t} className="mt-0">
                  <p className="text-[14px] leading-relaxed text-muted-foreground">
                    {TAB_CONTENT[t]}
                  </p>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="outline"
                className="h-12 flex-1 rounded-full px-6"
                onClick={() => navigate("/colecao")}
              >
                Ver coleção completa
              </Button>
              <Button asChild className="h-12 flex-1 rounded-full px-6">
                <a
                  href={whatsappLink(vehicleMessage("Porsche", "911 GT3 RS"))}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar proposta
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
