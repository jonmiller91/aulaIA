const BRANDS = [
  "Porsche",
  "Ferrari",
  "Lamborghini",
  "Aston Martin",
  "Bentley",
  "McLaren",
];

export function BrandsMarquee() {
  const items = [...BRANDS, ...BRANDS];
  return (
    <section className="border-y border-border bg-background py-8">
      <div className="group relative overflow-hidden">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-16 px-8 group-hover:[animation-play-state:paused]">
          {items.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="whitespace-nowrap text-[18px] uppercase tracking-[0.2em] text-muted-foreground/70"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
