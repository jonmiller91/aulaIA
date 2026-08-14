interface SectionIndexProps {
  label: string;
  className?: string;
}

/** Rótulo editorial tipo "01 / Sobre" usado como marcador de seção. */
export function SectionIndex({ label, className = "" }: SectionIndexProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground ${className}`}
    >
      <span className="h-px w-8 bg-border" />
      {label}
    </div>
  );
}
