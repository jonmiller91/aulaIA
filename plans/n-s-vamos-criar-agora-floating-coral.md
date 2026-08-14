# SELECTCARS — Site institucional + Catálogo + Painel do Lojista

## Context

O cliente quer o primeiro build de um site para a **SELECTCARS**, uma loja de curadoria de
automóveis raros/esportivos/de coleção. O tom é *quiet luxury*: premium, minimalista, editorial,
muito whitespace, neutros, fotografia como protagonista. As 6 imagens de referência
(`src/imports/image_1..6.png`) servem **apenas como inspiração visual** (Porsche/Mercedes/Aston
editorial). O design system a seguir é a especificação em `src/imports/pasted_text/design-system-overview.md`.

Decisões já alinhadas com o usuário:
- **Escopo:** construir tudo — (1) site institucional/home, (2) página de Catálogo, (3) Painel do Lojista.
- **Persistência:** `localStorage` (mock funcional, sem backend/Supabase).
- **Imagens dos carros:** o usuário anexou recortes limpos em `src/imports/` (ver mapeamento abaixo);
  os 3 veículos sem foto (BMW M5, Jaguar F-Type, Range Rover) usarão fotos representativas do Unsplash.
- **Contato:** SEM formulários de captação/CRM. Todo CTA de contato aponta para WhatsApp
  (`wa.me`) com mensagem pré-preenchida contextual. Dados de contato ficam visíveis no footer e na seção final.

Projeto é um Figma Make novo: `src/app/App.tsx` vazio, biblioteca **shadcn/ui completa** em
`src/app/components/ui/`, `react-router@7` instalado (não configurado), tokens em `src/styles/theme.css`,
`ImageWithFallback` disponível. Não há `@make-kits`.

## Design system (tradução para tokens)

Atualizar `src/styles/theme.css` (`:root`) para refletir a paleta neutra do DS:
- Neutros: Gray 50 `#FAFAF8` … Gray 900 `#161616`; `--background: #FAFAF8`, `--foreground: #161616`,
  `--surface: #F7F7F5`, `--card: #FFFFFF`, `--primary: #111111`, `--border: #E7E7E4`, `--muted-foreground: #6B6B66`.
- Semânticos: success `#2E7D32`, warning `#C58A1E`, error `#C53D3D`.
- Radius: cards 16–20px, inputs 14–16px, botões pill (999px), chips pill.
- Sombras muito discretas (y 8–20px, blur 20–50px, opacity 6–10%).
- Fonte: neo-grotesk sans. Importar **Inter** em `src/styles/fonts.css` (topo do arquivo) e aplicar como base.
- Regras do harness: NÃO usar classes Tailwind de font-size/weight/line-height a menos que necessário;
  hierarquia via escala/tokens do theme.

## Mapeamento de imagens (import via caminho relativo a partir de `src/imports/`)

- Porsche 911 GT3 RS → `Image__Porsche_911_GT3_RS_-1.png` (branco) — hero card, coleção, catálogo, drawer
- Porsche em destaque → `Image__Porsche_911_GT3_RS_em_destaque_-1.png` (perfil) — seção "Veículo em Destaque"
- Vídeo Porsche → `Video_-_Porsche_911_GT3_RS___perfil_em_v_deo-1.png` — thumbnail de "vídeo" na seção destaque
- Ferrari 296 GTB → `Image__Ferrari_296_GTB_-1.png` (vermelho)
- Lamborghini Huracán Tecnica → `Image__Lamborghini_Hurac_n_Tecnica_-1.png`
- Mercedes-AMG GT 63 S → `Image__Mercedes-AMG_GT_63_S_-1.png`
- Aston Martin DB12 → `Image__Aston_Martin_DB12_-1.png`
- Bentley Continental GT Speed → `Image__Bentley_Continental_GT_Speed_-1.png`
- BMW M5 / Jaguar F-Type / Range Rover SV → Unsplash (segmento premium, fundo claro), via `ImageWithFallback`.

Imagens locais são importadas como ES module e passadas ao `src`/`ImageWithFallback` (nunca string de caminho).

## Arquitetura

Roteamento com `react-router@7` em `src/app/App.tsx`:
- `/` → Home institucional
- `/colecao` → Catálogo
- `/painel` → Painel do Lojista

**Fonte única de dados de veículos:** `src/app/data/vehicles.ts`
- Tipo `Vehicle` (id, marca, modelo, versão, ano, km, cor, categoria, carroceria, câmbio, combustível,
  motorPotencia, velMax, preço|"Sob consulta", disponívelVisita, selos[], destaques[], descrição, status, imagemKey, dataCadastro).
- Seed com os veículos do briefing (mock).
- Hook `useVehicles()` em `src/app/hooks/useVehicles.ts`: carrega seed → `localStorage` (chave `selectcars.vehicles`),
  expõe CRUD (add/update/remove/toggleStatus) usado pelo Painel e leitura filtrada pelo site público
  (só `status === "publicado"`). Mapa `imagemKey → import` central em `vehicles.ts`.
- Util `whatsappLink(msg)` em `src/app/lib/contact.ts` (número placeholder `wa.me/5511000000000`).

## Componentes a criar (`src/app/components/`)

**Layout compartilhado:** `SiteHeader.tsx` (fixo, logo SELECTCARS + nav âncoras + Buscar + "Agendar visita"→WhatsApp),
`SiteFooter.tsx`, `SectionIndex.tsx` (rótulo tipo "01 / Sobre").

**Home (`components/home/`):** `Hero.tsx` (selo, headline, título, card do veículo em destaque com indicador 01/04,
faixa de contato), `BrandsMarquee.tsx` (carrossel de marcas), `AboutSection.tsx` (título, stat 5%, texto, timeline de eras,
3 princípios), `FeaturedVehicle.tsx` (ficha, specs rápidas, abas `Tabs` shadcn Exterior/Interior/Rodas/Mecânica/Documentação,
anotações sobre imagem, imagem destaque + thumb de vídeo), `CollectionPreview.tsx` (filtros pills + grid de `VehicleCard`),
`ServicesSection.tsx` (3 serviços + bloco de citação), `ProcessSection.tsx` (stepper 4 etapas via `Carousel`),
`TestimonialsSection.tsx` (3 depoimentos), `FaqSection.tsx` (`Accordion` shadcn), `FinalCta.tsx`
(CTA WhatsApp + bloco "agendar visita" mostrando os campos como **informação** e botão que abre WhatsApp — sem submit/CRM;
dados de contato/horário visíveis).

**Compartilhado:** `VehicleCard.tsx` (imagem, selo `Badge`, marca/modelo, ano·km·cor, descrição, preço, "Ver detalhes"),
`VehicleDetailDrawer.tsx` (`Sheet`/`Drawer` shadcn: marca d'água tipográfica, badge, categoria, specs, destaques, valor, CTA WhatsApp contextual).

**Catálogo (`components/catalog/`):** `CatalogPage.tsx` (breadcrumb, contador dinâmico, pills, busca, ordenação `Select`),
`FilterSidebar.tsx` (disponibilidade `Checkbox`, faixa de valor `Slider`, marca/carroceria/câmbio/combustível multi-seleção),
`VehicleGrid.tsx` (grid + paginação + estado vazio com CTA WhatsApp). Reusa `VehicleCard` + `VehicleDetailDrawer`.

**Painel (`components/dealer/`):** `DealerPanel.tsx` (título "Veículos cadastrados", botão "+ Novo veículo", busca,
`Table` shadcn: foto, marca/modelo, data, preço, status `Badge`, selo, ações Editar/Excluir/Pausar-Reativar),
`VehicleForm.tsx` (`Dialog`/`Sheet` com seções Identificação, Dados de uso, Classificação, Ficha técnica, Comercial,
Selos, Destaques (lista editável), Documentação (upload opcional), Mídia (upload/capa) — usando `react-hook-form@7.55.0`
+ inputs/select/checkbox shadcn; uploads viram data URLs em memória/localStorage), ações Salvar/Rascunho/Cancelar,
feedback via `sonner` toast (mensagens do briefing).

## Padrões

- Reusar shadcn/ui: `button`, `card`, `badge`, `tabs`, `accordion`, `sheet`/`drawer`, `dialog`, `table`,
  `select`, `checkbox`, `slider`, `input`, `textarea`, `carousel`, `sonner`, `breadcrumb`, `separator`, `pagination`.
- `ImageWithFallback` para toda imagem; `object-contain` para recortes de carro em fundo claro.
- Responsivo (desktop-first premium, colapsando para tablet/mobile: nav vira menu, sidebar de filtros vira Sheet).
- Animações sutis com `motion/react` (fade/subida em seções) — discretas, coerentes com quiet luxury.
- Todo conteúdo textual em PT-BR conforme o briefing.

## Verificação

1. Dev server já roda (não iniciar manualmente). Abrir preview e checar as 3 rotas.
2. Home: rolar por todas as seções (hero → footer), abas da ficha técnica funcionam, accordion do FAQ abre,
   CTAs de WhatsApp abrem `wa.me` com mensagem correta.
3. Catálogo: filtros pills + sidebar (marca, faixa de preço, câmbio, etc.) filtram o grid; busca e ordenação funcionam;
   estado vazio aparece; clicar num card abre o drawer com CTA WhatsApp contextual.
4. Painel: criar veículo novo → aparece na tabela e (se publicado) no site público; editar, pausar (some do público),
   excluir; toasts de feedback corretos; dados persistem após reload (localStorage).
5. Sem erros no console; layout responsivo em larguras desktop/tablet/mobile.
