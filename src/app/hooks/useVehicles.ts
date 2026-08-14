import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase, VEHICLE_IMAGES_BUCKET } from "../lib/supabaseClient";
import { rowToVehicle, vehicleToRow, type VehicleRow } from "../lib/vehicleMapper";
import type { Vehicle, VehicleStatus } from "../data/vehicles";

const VEHICLE_COLUMNS =
  "id, marca, modelo, versao, ano, km, cor, categoria, carroceria, cambio, combustivel, motor_potencia, vel_max, preco, disponivel_visita, numero_donos, procedencia, selos, destaques, descricao, status, image_key, image_url, created_at";

async function fetchVehicles(): Promise<Vehicle[]> {
  const { data, error } = await supabase
    .from("vehicles")
    .select(VEHICLE_COLUMNS)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return ((data ?? []) as VehicleRow[]).map(rowToVehicle);
}

async function uploadDataUrlIfNeeded(vehicle: Vehicle): Promise<Vehicle> {
  if (!vehicle.imageUrl?.startsWith("data:")) return vehicle;

  const blob = await (await fetch(vehicle.imageUrl)).blob();
  const ext = blob.type.split("/")[1]?.split("+")[0] || "jpg";
  const path = `${vehicle.id}/${Date.now()}.${ext}`;

  const { error } = await supabase.storage
    .from(VEHICLE_IMAGES_BUCKET)
    .upload(path, blob, {
      contentType: blob.type || "image/jpeg",
      upsert: true,
    });

  if (error) throw error;

  const { data } = supabase.storage
    .from(VEHICLE_IMAGES_BUCKET)
    .getPublicUrl(path);

  return {
    ...vehicle,
    imageUrl: data.publicUrl,
    imageKey: undefined,
  };
}

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      const next = await fetchVehicles();
      setVehicles(next);
      setErrorMessage(null);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Não foi possível carregar os veículos.";
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const addVehicle = useCallback(async (vehicle: Vehicle) => {
    const withImage = await uploadDataUrlIfNeeded(vehicle);
    const { error } = await supabase.from("vehicles").insert(vehicleToRow(withImage));
    if (error) throw error;
    await refresh();
  }, [refresh]);

  const updateVehicle = useCallback(async (vehicle: Vehicle) => {
    const withImage = await uploadDataUrlIfNeeded(vehicle);
    const { error } = await supabase
      .from("vehicles")
      .update(vehicleToRow(withImage))
      .eq("id", vehicle.id);
    if (error) throw error;
    await refresh();
  }, [refresh]);

  const removeVehicle = useCallback(async (id: string) => {
    const { error } = await supabase.from("vehicles").delete().eq("id", id);
    if (error) throw error;
    await refresh();
  }, [refresh]);

  const setStatus = useCallback(async (id: string, status: VehicleStatus) => {
    const { error } = await supabase.from("vehicles").update({ status }).eq("id", id);
    if (error) throw error;
    await refresh();
  }, [refresh]);

  return {
    vehicles,
    loading,
    errorMessage,
    refresh,
    addVehicle,
    updateVehicle,
    removeVehicle,
    setStatus,
  };
}

export function usePublishedVehicles() {
  const { vehicles, loading, errorMessage } = useVehicles();
  return {
    vehicles: vehicles.filter((vehicle) => vehicle.status === "publicado"),
    loading,
    errorMessage,
  };
}

export function notifyVehicleError(error: unknown) {
  const message =
    error instanceof Error ? error.message : "Não foi possível salvar o veículo.";
  toast.error(message);
}
