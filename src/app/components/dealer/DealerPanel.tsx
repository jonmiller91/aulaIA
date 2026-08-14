import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import {
  ArrowLeft,
  Pause,
  Pencil,
  Play,
  Plus,
  Search,
  Trash2,
  LogOut,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { VehicleForm } from "./VehicleForm";
import { SeloBadge } from "../SeloBadge";
import { notifyVehicleError, useVehicles } from "../../hooks/useVehicles";
import { supabase } from "../../lib/supabaseClient";
import {
  formatPrice,
  resolveImage,
  type Vehicle,
  type VehicleStatus,
} from "../../data/vehicles";

const STATUS_STYLES: Record<VehicleStatus, string> = {
  publicado: "bg-success/10 text-success border-success/30",
  pausado: "bg-warning/10 text-warning border-warning/30",
  rascunho: "bg-muted text-muted-foreground border-border",
};

const STATUS_LABEL: Record<VehicleStatus, string> = {
  publicado: "Publicado",
  pausado: "Pausado",
  rascunho: "Rascunho",
};

export function DealerPanel() {
  const navigate = useNavigate();
  const {
    vehicles,
    loading,
    errorMessage,
    addVehicle,
    updateVehicle,
    removeVehicle,
    setStatus,
  } = useVehicles();
  const [query, setQuery] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Vehicle | null>(null);
  const [toDelete, setToDelete] = useState<Vehicle | null>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return vehicles;
    const q = query.toLowerCase();
    return vehicles.filter((v) =>
      `${v.marca} ${v.modelo} ${STATUS_LABEL[v.status]}`
        .toLowerCase()
        .includes(q),
    );
  }, [vehicles, query]);

  const openNew = () => {
    setEditing(null);
    setFormOpen(true);
  };

  const openEdit = (v: Vehicle) => {
    setEditing(v);
    setFormOpen(true);
  };

  const handleSubmit = async (vehicle: Vehicle) => {
    try {
      if (editing) await updateVehicle(vehicle);
      else await addVehicle(vehicle);
      setFormOpen(false);
      toast.success("Veículo salvo com sucesso.");
    } catch (error) {
      notifyVehicleError(error);
    }
  };

  const handleToggle = async (v: Vehicle) => {
    try {
      if (v.status === "publicado") {
        await setStatus(v.id, "pausado");
        toast.success("Veículo pausado. Ele não aparece mais no site público.");
      } else {
        await setStatus(v.id, "publicado");
        toast.success("Veículo publicado no site.");
      }
    } catch (error) {
      notifyVehicleError(error);
    }
  };

  const confirmDelete = async () => {
    if (!toDelete) return;
    try {
      await removeVehicle(toDelete.id);
      toast.success("Veículo removido definitivamente.");
      setToDelete(null);
    } catch (error) {
      notifyVehicleError(error);
    }
  };

  const sair = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-12">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-6">
          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Voltar ao site
          </Link>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Painel do lojista
              </span>
              <h1 className="mt-1 text-[28px] font-medium tracking-[-0.02em]">
                Veículos cadastrados
              </h1>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button className="rounded-full px-6" onClick={openNew}>
                <Plus className="size-4" /> Novo veículo
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6"
                onClick={() => void sair()}
              >
                <LogOut className="size-4" /> Sair
              </Button>
            </div>
          </div>

          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por marca, modelo ou status"
              className="h-11 rounded-full pl-11"
            />
          </div>
        </div>

        {errorMessage && (
          <p className="mt-6 text-[13px] text-destructive">{errorMessage}</p>
        )}

        {loading && (
          <p className="mt-6 text-[14px] text-muted-foreground">
            Carregando veículos…
          </p>
        )}

        {/* Tabela */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="w-20">Foto</TableHead>
                <TableHead>Marca / Modelo</TableHead>
                <TableHead className="hidden md:table-cell">Cadastro</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden lg:table-cell">Selo</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((v) => (
                <TableRow key={v.id} className="border-border">
                  <TableCell>
                    <div className="size-12 overflow-hidden rounded-lg bg-surface">
                      <ImageWithFallback
                        src={resolveImage(v)}
                        alt={v.modelo}
                        className="h-full w-full object-contain p-1"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-[14px]">
                      {v.marca} {v.modelo}
                    </div>
                    <div className="text-[12px] text-muted-foreground">
                      {v.ano} · {v.cor}
                    </div>
                  </TableCell>
                  <TableCell className="hidden text-[13px] text-muted-foreground md:table-cell">
                    {new Date(v.dataCadastro).toLocaleDateString("pt-BR")}
                  </TableCell>
                  <TableCell className="text-[13px]">
                    {formatPrice(v.preco)}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] ${STATUS_STYLES[v.status]}`}
                    >
                      {STATUS_LABEL[v.status]}
                    </span>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {v.selos[0] ? <SeloBadge selo={v.selos[0]} /> : "—"}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        onClick={() => openEdit(v)}
                        title="Editar"
                      >
                        <Pencil className="size-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        onClick={() => handleToggle(v)}
                        title={v.status === "publicado" ? "Pausar" : "Reativar"}
                      >
                        {v.status === "publicado" ? (
                          <Pause className="size-4" />
                        ) : (
                          <Play className="size-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-muted-foreground hover:text-destructive"
                        onClick={() => setToDelete(v)}
                        title="Excluir"
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filtered.length === 0 && (
            <div className="p-12 text-center text-[14px] text-muted-foreground">
              Nenhum veículo encontrado.
            </div>
          )}
        </div>
      </div>

      <VehicleForm
        open={formOpen}
        onOpenChange={setFormOpen}
        initial={editing}
        onSubmit={handleSubmit}
      />

      <AlertDialog
        open={!!toDelete}
        onOpenChange={(o) => !o && setToDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir veículo?</AlertDialogTitle>
            <AlertDialogDescription>
              {toDelete && (
                <>
                  {toDelete.marca} {toDelete.modelo} será removido
                  definitivamente. Esta ação não pode ser desfeita.
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              className="rounded-full bg-destructive text-white hover:bg-destructive/90"
              onClick={confirmDelete}
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
