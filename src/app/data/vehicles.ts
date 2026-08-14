// Tipos, imagens locais e catálogo original da SELECTCARS.
// A fonte de verdade em runtime é o Supabase (tabela public.vehicles).
// SEED_VEHICLES permanece como registro do acervo inicial já gravado no banco.

import imgPorsche from "../../imports/Image__Porsche_911_GT3_RS_-1.png";
import imgPorscheFeatured from "../../imports/Image__Porsche_911_GT3_RS_em_destaque_-1.png";
import imgPorscheVideo from "../../imports/Video_-_Porsche_911_GT3_RS___perfil_em_v_deo-1.png";
import imgFerrari from "../../imports/Image__Ferrari_296_GTB_-1.png";
import imgLambo from "../../imports/Image__Lamborghini_Hurac_n_Tecnica_-1.png";
import imgMercedes from "../../imports/Image__Mercedes-AMG_GT_63_S_-1.png";
import imgAston from "../../imports/Image__Aston_Martin_DB12_-1.png";
import imgBentley from "../../imports/Image__Bentley_Continental_GT_Speed_-1.png";

// URLs representativas do Unsplash para os modelos sem foto anexada.
const imgBmw =
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const imgJaguar =
  "https://images.unsplash.com/photo-1736232821136-a29002507cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const imgRange =
  "https://images.unsplash.com/photo-1549632891-a0bea6d0355b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

// Mapa imageKey -> asset importado. Veículos criados no painel usam `imageUrl` (data URL) direto.
export const IMAGE_MAP: Record<string, string> = {
  porsche: imgPorsche,
  "porsche-featured": imgPorscheFeatured,
  "porsche-video": imgPorscheVideo,
  ferrari: imgFerrari,
  lambo: imgLambo,
  mercedes: imgMercedes,
  aston: imgAston,
  bentley: imgBentley,
  bmw: imgBmw,
  jaguar: imgJaguar,
  range: imgRange,
};

export type VehicleStatus = "publicado" | "pausado" | "rascunho";
export type Categoria =
  | "Esportivos"
  | "Clássicos"
  | "SUV Premium"
  | "Edições limitadas"
  | "Recém-chegados";
export type Carroceria = "Coupé" | "Sedan" | "GT" | "Conversível" | "SUV";
export type Cambio = "PDK" | "DCT" | "Automático";
export type Combustivel = "Gasolina" | "Híbrido";
export type Selo =
  | "Raro"
  | "Última unidade"
  | "Novo"
  | "Edição limitada"
  | "Reservado";

export interface Vehicle {
  id: string;
  marca: string;
  modelo: string;
  versao: string;
  ano: number;
  km: number;
  cor: string;
  categoria: Categoria;
  carroceria: Carroceria;
  cambio: Cambio;
  combustivel: Combustivel;
  motorPotencia: string;
  velMax: string;
  preco: number | null; // null => "Sob consulta"
  disponivelVisita: boolean;
  numeroDonos?: number;
  procedencia?: string;
  selos: Selo[];
  destaques: string[];
  descricao: string;
  status: VehicleStatus;
  imageKey?: string; // referência ao IMAGE_MAP (seed)
  imageUrl?: string; // data URL de upload (painel)
  dataCadastro: string; // ISO
}

/** Resolve a imagem exibível de um veículo. */
export function resolveImage(v: Pick<Vehicle, "imageKey" | "imageUrl">): string {
  if (v.imageUrl) return v.imageUrl;
  if (v.imageKey && IMAGE_MAP[v.imageKey]) return IMAGE_MAP[v.imageKey];
  return "";
}

/** Formata o preço em BRL ou "Sob consulta". */
export function formatPrice(preco: number | null): string {
  if (preco == null) return "Sob consulta";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(preco);
}

export function formatKm(km: number): string {
  return `${new Intl.NumberFormat("pt-BR").format(km)} km`;
}

export const SEED_VEHICLES: Vehicle[] = [
  {
    id: "porsche-911-gt3-rs",
    marca: "Porsche",
    modelo: "911 GT3 RS",
    versao: "Weissach Package",
    ano: 2024,
    km: 1200,
    cor: "Branco Carrara",
    categoria: "Esportivos",
    carroceria: "Coupé",
    cambio: "PDK",
    combustivel: "Gasolina",
    motorPotencia: "4.0L Boxer 6 · 525 cv",
    velMax: "296 km/h",
    preco: 2890000,
    disponivelVisita: true,
    numeroDonos: 1,
    procedencia: "Primeiro dono, histórico completo em concessionária.",
    selos: ["Raro"],
    destaques: [
      "Aero kit Weissach completo",
      "Teto em magnésio",
      'Rodas forjadas 20"',
      "Bancos em fibra de carbono",
    ],
    descricao:
      "Aero kit Weissach, bancos em fibra de carbono e procedência impecável de primeiro dono.",
    status: "publicado",
    imageKey: "porsche",
    dataCadastro: "2026-07-20",
  },
  {
    id: "ferrari-296-gtb",
    marca: "Ferrari",
    modelo: "296 GTB",
    versao: "Assetto Fiorano",
    ano: 2023,
    km: 3400,
    cor: "Rosso Corsa",
    categoria: "Esportivos",
    carroceria: "Coupé",
    cambio: "DCT",
    combustivel: "Híbrido",
    motorPotencia: "V6 híbrido turbo · 830 cv",
    velMax: "330 km/h",
    preco: null,
    disponivelVisita: true,
    numeroDonos: 1,
    selos: ["Última unidade"],
    destaques: [
      "V6 híbrido turbinado",
      "830 cv combinados",
      "Revisão oficial em dia",
      "Histórico completo",
    ],
    descricao:
      "V6 híbrido turbinado, 830 cv combinados. Histórico completo e revisão oficial.",
    status: "publicado",
    imageKey: "ferrari",
    dataCadastro: "2026-07-18",
  },
  {
    id: "lamborghini-huracan-tecnica",
    marca: "Lamborghini",
    modelo: "Huracán Tecnica",
    versao: "Tecnica",
    ano: 2024,
    km: 800,
    cor: "Verde Mantis",
    categoria: "Esportivos",
    carroceria: "Coupé",
    cambio: "DCT",
    combustivel: "Gasolina",
    motorPotencia: "V10 aspirado · 640 cv",
    velMax: "325 km/h",
    preco: 3450000,
    disponivelVisita: true,
    numeroDonos: 1,
    selos: ["Novo"],
    destaques: [
      "V10 aspirado",
      "Dinâmica de pista",
      "Configuração específica",
      "Baixa quilometragem",
    ],
    descricao:
      "V10 aspirado, dinâmica de pista, configuração específica para a unidade.",
    status: "publicado",
    imageKey: "lambo",
    dataCadastro: "2026-07-22",
  },
  {
    id: "mercedes-amg-gt-63-s",
    marca: "Mercedes-AMG",
    modelo: "GT 63 S",
    versao: "4MATIC+",
    ano: 2023,
    km: 5100,
    cor: "Preto Obsidiana",
    categoria: "Esportivos",
    carroceria: "Sedan",
    cambio: "Automático",
    combustivel: "Gasolina",
    motorPotencia: "4.0L V8 biturbo · 639 cv",
    velMax: "315 km/h",
    preco: 1690000,
    disponivelVisita: true,
    numeroDonos: 2,
    selos: [],
    destaques: [
      "Quatro portas",
      "Motor 4.0 V8 biturbo",
      "Acabamento Designo",
      "Laudo independente",
    ],
    descricao:
      "Quatro portas com motor 4.0 V8 biturbo. Acabamento Designo e laudo independente.",
    status: "publicado",
    imageKey: "mercedes",
    dataCadastro: "2026-07-15",
  },
  {
    id: "aston-martin-db12",
    marca: "Aston Martin",
    modelo: "DB12",
    versao: "Coupe",
    ano: 2024,
    km: 1500,
    cor: "British Racing Green",
    categoria: "Edições limitadas",
    carroceria: "GT",
    cambio: "Automático",
    combustivel: "Gasolina",
    motorPotencia: "4.0L V8 biturbo · 680 cv",
    velMax: "325 km/h",
    preco: null,
    disponivelVisita: false,
    numeroDonos: 1,
    selos: ["Reservado"],
    destaques: [
      "GT inglês com 680 cv",
      "Couro Bridge of Weir",
      "Detalhes em alumínio escovado",
      "Baixa quilometragem",
    ],
    descricao:
      "GT inglês com 680 cv. Couro Bridge of Weir e detalhes em alumínio escovado.",
    status: "publicado",
    imageKey: "aston",
    dataCadastro: "2026-07-10",
  },
  {
    id: "bentley-continental-gt-speed",
    marca: "Bentley",
    modelo: "Continental GT Speed",
    versao: "Speed",
    ano: 2023,
    km: 6800,
    cor: "Orange Flame",
    categoria: "Esportivos",
    carroceria: "GT",
    cambio: "Automático",
    combustivel: "Gasolina",
    motorPotencia: "6.0L W12 · 659 cv",
    velMax: "335 km/h",
    preco: 2150000,
    disponivelVisita: true,
    numeroDonos: 1,
    selos: [],
    destaques: [
      "GT de 12 cilindros",
      "Interior em couro Mulliner",
      "Presença para qualquer agenda",
      "Acabamento impecável",
    ],
    descricao:
      "GT de 12 cilindros, interior em couro Mulliner, presença para qualquer agenda.",
    status: "publicado",
    imageKey: "bentley",
    dataCadastro: "2026-07-08",
  },
  {
    id: "bmw-m5-competition",
    marca: "BMW",
    modelo: "M5 Competition",
    versao: "Competition",
    ano: 2024,
    km: 2800,
    cor: "Cinza Brooklyn",
    categoria: "Esportivos",
    carroceria: "Sedan",
    cambio: "Automático",
    combustivel: "Gasolina",
    motorPotencia: "4.4L V8 biturbo · 625 cv",
    velMax: "305 km/h",
    preco: 1290000,
    disponivelVisita: true,
    numeroDonos: 1,
    selos: ["Novo"],
    destaques: [
      "Motor 4.4 V8 biturbo",
      "Tração M xDrive",
      "Pacote Competition",
      "Baixa quilometragem",
    ],
    descricao:
      "Sedan de alta performance com motor V8 biturbo e tração M xDrive.",
    status: "publicado",
    imageKey: "bmw",
    dataCadastro: "2026-07-21",
  },
  {
    id: "jaguar-f-type-r75",
    marca: "Jaguar",
    modelo: "F-Type R75",
    versao: "R75",
    ano: 2023,
    km: 4200,
    cor: "Azul Velocity",
    categoria: "Esportivos",
    carroceria: "Conversível",
    cambio: "Automático",
    combustivel: "Gasolina",
    motorPotencia: "5.0L V8 supercharged · 575 cv",
    velMax: "300 km/h",
    preco: 980000,
    disponivelVisita: true,
    numeroDonos: 1,
    selos: [],
    destaques: [
      "V8 supercharged",
      "Edição comemorativa R75",
      "Capota conversível",
      "Escapamento esportivo",
    ],
    descricao:
      "Conversível com V8 supercharged, edição comemorativa dos 75 anos da Jaguar.",
    status: "publicado",
    imageKey: "jaguar",
    dataCadastro: "2026-07-05",
  },
  {
    id: "range-rover-sv-autobiography",
    marca: "Range Rover",
    modelo: "SV Autobiography",
    versao: "SV",
    ano: 2024,
    km: 3200,
    cor: "Belgravia Green",
    categoria: "SUV Premium",
    carroceria: "SUV",
    cambio: "Automático",
    combustivel: "Híbrido",
    motorPotencia: "4.4L V8 · 530 cv",
    velMax: "250 km/h",
    preco: 1890000,
    disponivelVisita: true,
    numeroDonos: 1,
    selos: [],
    destaques: [
      "Acabamento SV Autobiography",
      "Bancos executivos traseiros",
      "Sistema híbrido",
      "Conforto de referência",
    ],
    descricao:
      "SUV de luxo com acabamento SV Autobiography e conforto de referência.",
    status: "publicado",
    imageKey: "range",
    dataCadastro: "2026-07-12",
  },
];

export const BRANDS = [
  "Porsche",
  "Ferrari",
  "Lamborghini",
  "Mercedes-AMG",
  "Aston Martin",
  "Bentley",
  "BMW",
  "Jaguar",
  "Range Rover",
];

export const CATEGORIAS: Categoria[] = [
  "Esportivos",
  "Clássicos",
  "SUV Premium",
  "Edições limitadas",
  "Recém-chegados",
];

export const CARROCERIAS: Carroceria[] = [
  "Coupé",
  "Sedan",
  "GT",
  "Conversível",
  "SUV",
];

export const CAMBIOS: Cambio[] = ["PDK", "DCT", "Automático"];
export const COMBUSTIVEIS: Combustivel[] = ["Gasolina", "Híbrido"];
export const SELOS: Selo[] = [
  "Raro",
  "Última unidade",
  "Novo",
  "Edição limitada",
  "Reservado",
];
