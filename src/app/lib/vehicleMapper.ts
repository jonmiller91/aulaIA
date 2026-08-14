import type { Vehicle, VehicleStatus } from "../data/vehicles";

export interface VehicleRow {
  id: string;
  marca: string;
  modelo: string;
  versao: string;
  ano: number;
  km: number;
  cor: string;
  categoria: Vehicle["categoria"];
  carroceria: Vehicle["carroceria"];
  cambio: Vehicle["cambio"];
  combustivel: Vehicle["combustivel"];
  motor_potencia: string;
  vel_max: string;
  preco: string | number | null;
  disponivel_visita: boolean;
  numero_donos: number | null;
  procedencia: string | null;
  selos: Vehicle["selos"];
  destaques: string[];
  descricao: string;
  status: VehicleStatus;
  image_key: string | null;
  image_url: string | null;
  created_at: string;
}

export function rowToVehicle(row: VehicleRow): Vehicle {
  return {
    id: row.id,
    marca: row.marca,
    modelo: row.modelo,
    versao: row.versao,
    ano: row.ano,
    km: row.km,
    cor: row.cor,
    categoria: row.categoria,
    carroceria: row.carroceria,
    cambio: row.cambio,
    combustivel: row.combustivel,
    motorPotencia: row.motor_potencia,
    velMax: row.vel_max,
    preco: row.preco == null ? null : Number(row.preco),
    disponivelVisita: row.disponivel_visita,
    numeroDonos: row.numero_donos ?? undefined,
    procedencia: row.procedencia ?? undefined,
    selos: row.selos ?? [],
    destaques: row.destaques ?? [],
    descricao: row.descricao,
    status: row.status,
    imageKey: row.image_key ?? undefined,
    imageUrl: row.image_url ?? undefined,
    dataCadastro: row.created_at.slice(0, 10),
  };
}

export function vehicleToRow(vehicle: Vehicle) {
  return {
    id: vehicle.id,
    marca: vehicle.marca,
    modelo: vehicle.modelo,
    versao: vehicle.versao,
    ano: vehicle.ano,
    km: vehicle.km,
    cor: vehicle.cor,
    categoria: vehicle.categoria,
    carroceria: vehicle.carroceria,
    cambio: vehicle.cambio,
    combustivel: vehicle.combustivel,
    motor_potencia: vehicle.motorPotencia,
    vel_max: vehicle.velMax,
    preco: vehicle.preco,
    disponivel_visita: vehicle.disponivelVisita,
    numero_donos: vehicle.numeroDonos ?? null,
    procedencia: vehicle.procedencia ?? null,
    selos: vehicle.selos,
    destaques: vehicle.destaques,
    descricao: vehicle.descricao,
    status: vehicle.status,
    image_key: vehicle.imageKey ?? null,
    image_url: vehicle.imageUrl ?? null,
    slug: vehicle.id,
  };
}
