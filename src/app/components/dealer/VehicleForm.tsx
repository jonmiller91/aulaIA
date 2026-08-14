import { useEffect, useRef, useState } from "react";
import { Plus, Trash2, Upload, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  CAMBIOS,
  CARROCERIAS,
  CATEGORIAS,
  COMBUSTIVEIS,
  SELOS,
  resolveImage,
  type Cambio,
  type Carroceria,
  type Categoria,
  type Combustivel,
  type Selo,
  type Vehicle,
  type VehicleStatus,
} from "../../data/vehicles";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initial: Vehicle | null;
  onSubmit: (vehicle: Vehicle, status: VehicleStatus) => void;
}

interface FormState {
  marca: string;
  modelo: string;
  versao: string;
  ano: string;
  cor: string;
  km: string;
  numeroDonos: string;
  procedencia: string;
  categoria: Categoria;
  carroceria: Carroceria;
  motorPotencia: string;
  velMax: string;
  cambio: Cambio;
  combustivel: Combustivel;
  precoTipo: "valor" | "consulta";
  preco: string;
  disponivelVisita: boolean;
  selos: Selo[];
  destaques: string[];
  descricao: string;
  imageUrl?: string;
  imageKey?: string;
  documentos: string[];
}

const EMPTY: FormState = {
  marca: "",
  modelo: "",
  versao: "",
  ano: "",
  cor: "",
  km: "",
  numeroDonos: "",
  procedencia: "",
  categoria: "Esportivos",
  carroceria: "Coupé",
  motorPotencia: "",
  velMax: "",
  cambio: "Automático",
  combustivel: "Gasolina",
  precoTipo: "valor",
  preco: "",
  disponivelVisita: true,
  selos: [],
  destaques: [],
  descricao: "",
  documentos: [],
};

function fromVehicle(v: Vehicle): FormState {
  return {
    marca: v.marca,
    modelo: v.modelo,
    versao: v.versao,
    ano: String(v.ano),
    cor: v.cor,
    km: String(v.km),
    numeroDonos: v.numeroDonos ? String(v.numeroDonos) : "",
    procedencia: v.procedencia ?? "",
    categoria: v.categoria,
    carroceria: v.carroceria,
    motorPotencia: v.motorPotencia,
    velMax: v.velMax,
    cambio: v.cambio,
    combustivel: v.combustivel,
    precoTipo: v.preco == null ? "consulta" : "valor",
    preco: v.preco != null ? String(v.preco) : "",
    disponivelVisita: v.disponivelVisita,
    selos: v.selos,
    destaques: v.destaques,
    descricao: v.descricao,
    imageUrl: v.imageUrl,
    imageKey: v.imageKey,
    documentos: [],
  };
}

const REQUIRED: (keyof FormState)[] = ["marca", "modelo", "ano", "cor"];

function readFile(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px] text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="border-b border-border pb-2 text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </h3>
  );
}

export function VehicleForm({ open, onOpenChange, initial, onSubmit }: Props) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [novoDestaque, setNovoDestaque] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setForm(initial ? fromVehicle(initial) : EMPTY);
      setErrors(new Set());
      setNovoDestaque("");
    }
  }, [open, initial]);

  const set = (patch: Partial<FormState>) =>
    setForm((f) => ({ ...f, ...patch }));

  const validate = () => {
    const next = new Set<string>();
    REQUIRED.forEach((k) => {
      if (!String(form[k]).trim()) next.add(k);
    });
    if (form.precoTipo === "valor" && !form.preco.trim()) next.add("preco");
    setErrors(next);
    return next.size === 0;
  };

  const buildVehicle = (status: VehicleStatus): Vehicle => {
    const id =
      initial?.id ??
      `${form.marca}-${form.modelo}-${Date.now()}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-");
    return {
      id,
      marca: form.marca.trim(),
      modelo: form.modelo.trim(),
      versao: form.versao.trim(),
      ano: Number(form.ano) || new Date().getFullYear(),
      km: Number(form.km) || 0,
      cor: form.cor.trim(),
      categoria: form.categoria,
      carroceria: form.carroceria,
      cambio: form.cambio,
      combustivel: form.combustivel,
      motorPotencia: form.motorPotencia.trim(),
      velMax: form.velMax.trim(),
      preco: form.precoTipo === "consulta" ? null : Number(form.preco) || 0,
      disponivelVisita: form.disponivelVisita,
      numeroDonos: form.numeroDonos ? Number(form.numeroDonos) : undefined,
      procedencia: form.procedencia.trim() || undefined,
      selos: form.selos,
      destaques: form.destaques,
      descricao: form.descricao.trim(),
      status,
      imageUrl: form.imageUrl,
      imageKey: form.imageUrl ? undefined : form.imageKey,
      dataCadastro: initial?.dataCadastro ?? new Date().toISOString().slice(0, 10),
    };
  };

  const handleSave = (status: VehicleStatus) => {
    if (status === "publicado" && !validate()) return;
    onSubmit(buildVehicle(status), status);
  };

  const handleUpload = async (files: FileList | null) => {
    if (!files || !files[0]) return;
    const url = await readFile(files[0]);
    set({ imageUrl: url });
  };

  const preview = resolveImage({
    imageUrl: form.imageUrl,
    imageKey: form.imageKey,
  });

  const err = (k: string) =>
    errors.has(k) ? "border-destructive ring-destructive/20" : "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {initial ? "Editar veículo" : "Novo veículo"}
          </DialogTitle>
        </DialogHeader>

        {errors.size > 0 && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-[13px] text-destructive">
            Verifique os campos obrigatórios destacados.
          </div>
        )}

        <div className="flex flex-col gap-8">
          {/* Identificação */}
          <section className="flex flex-col gap-4">
            <SectionTitle>Identificação</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Marca *">
                <Input
                  value={form.marca}
                  onChange={(e) => set({ marca: e.target.value })}
                  className={`rounded-xl ${err("marca")}`}
                />
              </Field>
              <Field label="Modelo *">
                <Input
                  value={form.modelo}
                  onChange={(e) => set({ modelo: e.target.value })}
                  className={`rounded-xl ${err("modelo")}`}
                />
              </Field>
              <Field label="Versão / Trim">
                <Input
                  value={form.versao}
                  onChange={(e) => set({ versao: e.target.value })}
                  className="rounded-xl"
                />
              </Field>
              <Field label="Ano de fabricação/modelo *">
                <Input
                  value={form.ano}
                  onChange={(e) => set({ ano: e.target.value })}
                  inputMode="numeric"
                  className={`rounded-xl ${err("ano")}`}
                />
              </Field>
              <Field label="Cor (nome comercial) *">
                <Input
                  value={form.cor}
                  onChange={(e) => set({ cor: e.target.value })}
                  className={`rounded-xl ${err("cor")}`}
                />
              </Field>
            </div>
          </section>

          {/* Dados de uso */}
          <section className="flex flex-col gap-4">
            <SectionTitle>Dados de uso</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Quilometragem">
                <Input
                  value={form.km}
                  onChange={(e) => set({ km: e.target.value })}
                  inputMode="numeric"
                  className="rounded-xl"
                />
              </Field>
              <Field label="Número de donos">
                <Input
                  value={form.numeroDonos}
                  onChange={(e) => set({ numeroDonos: e.target.value })}
                  inputMode="numeric"
                  className="rounded-xl"
                />
              </Field>
            </div>
            <Field label="Procedência (histórico resumido)">
              <Textarea
                value={form.procedencia}
                onChange={(e) => set({ procedencia: e.target.value })}
                className="min-h-20 rounded-xl"
              />
            </Field>
          </section>

          {/* Classificação */}
          <section className="flex flex-col gap-4">
            <SectionTitle>Classificação</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Categoria">
                <Select
                  value={form.categoria}
                  onValueChange={(v) => set({ categoria: v as Categoria })}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIAS.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Carroceria">
                <Select
                  value={form.carroceria}
                  onValueChange={(v) => set({ carroceria: v as Carroceria })}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CARROCERIAS.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </section>

          {/* Ficha técnica */}
          <section className="flex flex-col gap-4">
            <SectionTitle>Ficha técnica</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Motor / Potência">
                <Input
                  value={form.motorPotencia}
                  onChange={(e) => set({ motorPotencia: e.target.value })}
                  placeholder="4.0L V8 · 525 cv"
                  className="rounded-xl"
                />
              </Field>
              <Field label="Velocidade máxima">
                <Input
                  value={form.velMax}
                  onChange={(e) => set({ velMax: e.target.value })}
                  placeholder="296 km/h"
                  className="rounded-xl"
                />
              </Field>
              <Field label="Câmbio">
                <Select
                  value={form.cambio}
                  onValueChange={(v) => set({ cambio: v as Cambio })}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CAMBIOS.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Combustível">
                <Select
                  value={form.combustivel}
                  onValueChange={(v) => set({ combustivel: v as Combustivel })}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {COMBUSTIVEIS.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </section>

          {/* Comercial */}
          <section className="flex flex-col gap-4">
            <SectionTitle>Comercial</SectionTitle>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => set({ precoTipo: "valor" })}
                className={`rounded-full border px-4 py-2 text-[13px] ${
                  form.precoTipo === "valor"
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground"
                }`}
              >
                Preço definido
              </button>
              <button
                onClick={() => set({ precoTipo: "consulta" })}
                className={`rounded-full border px-4 py-2 text-[13px] ${
                  form.precoTipo === "consulta"
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground"
                }`}
              >
                Sob consulta
              </button>
            </div>
            {form.precoTipo === "valor" && (
              <Field label="Preço (R$) *">
                <Input
                  value={form.preco}
                  onChange={(e) => set({ preco: e.target.value })}
                  inputMode="numeric"
                  placeholder="2890000"
                  className={`rounded-xl ${err("preco")}`}
                />
              </Field>
            )}
            <label className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
              <span className="text-[14px]">Disponível para visita</span>
              <Switch
                checked={form.disponivelVisita}
                onCheckedChange={(c) => set({ disponivelVisita: c })}
              />
            </label>
          </section>

          {/* Selos */}
          <section className="flex flex-col gap-4">
            <SectionTitle>Selos / tags</SectionTitle>
            <div className="flex flex-wrap gap-4">
              {SELOS.map((s) => (
                <label
                  key={s}
                  className="flex cursor-pointer items-center gap-2 text-[14px]"
                >
                  <Checkbox
                    checked={form.selos.includes(s)}
                    onCheckedChange={(c) =>
                      set({
                        selos: c
                          ? [...form.selos, s]
                          : form.selos.filter((x) => x !== s),
                      })
                    }
                  />
                  {s}
                </label>
              ))}
            </div>
          </section>

          {/* Destaques */}
          <section className="flex flex-col gap-4">
            <SectionTitle>Destaques do veículo</SectionTitle>
            <div className="flex flex-col gap-2">
              {form.destaques.map((d, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-border px-4 py-2.5 text-[14px]"
                >
                  {d}
                  <button
                    onClick={() =>
                      set({
                        destaques: form.destaques.filter((_, x) => x !== i),
                      })
                    }
                    className="text-muted-foreground transition-colors hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={novoDestaque}
                onChange={(e) => setNovoDestaque(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && novoDestaque.trim()) {
                    e.preventDefault();
                    set({ destaques: [...form.destaques, novoDestaque.trim()] });
                    setNovoDestaque("");
                  }
                }}
                placeholder="Ex.: Aero kit Weissach completo"
                className="rounded-xl"
              />
              <Button
                type="button"
                variant="outline"
                className="rounded-xl"
                onClick={() => {
                  if (novoDestaque.trim()) {
                    set({ destaques: [...form.destaques, novoDestaque.trim()] });
                    setNovoDestaque("");
                  }
                }}
              >
                <Plus className="size-4" /> Adicionar
              </Button>
            </div>
          </section>

          {/* Descrição */}
          <section className="flex flex-col gap-4">
            <SectionTitle>Descrição curta</SectionTitle>
            <Textarea
              value={form.descricao}
              onChange={(e) => set({ descricao: e.target.value })}
              className="min-h-20 rounded-xl"
              placeholder="Resumo comercial exibido nos cards e no site."
            />
          </section>

          {/* Mídia */}
          <section className="flex flex-col gap-4">
            <SectionTitle>Mídia</SectionTitle>
            <div className="flex items-center gap-4">
              <div className="relative size-28 shrink-0 overflow-hidden rounded-xl border border-border bg-surface">
                {preview ? (
                  <>
                    <ImageWithFallback
                      src={preview}
                      alt="Capa"
                      className="h-full w-full object-contain p-2"
                    />
                    <button
                      onClick={() => set({ imageUrl: undefined, imageKey: undefined })}
                      className="absolute right-1 top-1 flex size-6 items-center justify-center rounded-full bg-background/80 text-muted-foreground"
                    >
                      <X className="size-3.5" />
                    </button>
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center text-[11px] text-muted-foreground">
                    Sem foto
                  </div>
                )}
              </div>
              <div>
                <input
                  ref={fileInput}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleUpload(e.target.files)}
                />
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full"
                  onClick={() => fileInput.current?.click()}
                >
                  <Upload className="size-4" /> Enviar foto de capa
                </Button>
                <p className="mt-2 text-[12px] text-muted-foreground">
                  JPG ou PNG. A imagem é a capa exibida no site.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Ações */}
        <div className="sticky bottom-0 -mx-6 -mb-6 mt-2 flex flex-col gap-3 border-t border-border bg-background px-6 py-4 sm:flex-row sm:justify-end">
          <Button
            variant="ghost"
            className="rounded-full"
            onClick={() => onOpenChange(false)}
          >
            Cancelar
          </Button>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => handleSave("rascunho")}
          >
            Salvar como rascunho
          </Button>
          <Button className="rounded-full" onClick={() => handleSave("publicado")}>
            Salvar e publicar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
