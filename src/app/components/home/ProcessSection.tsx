import { motion } from "motion/react";
import { SectionIndex } from "../SectionIndex";

const ETAPAS = [
  {
    n: "01",
    titulo: "Conversa inicial",
    texto:
      "Entendimento do perfil, preferências e uso pretendido do cliente.",
  },
  {
    n: "02",
    titulo: "Curadoria personalizada",
    texto:
      "Apresentamos opções do nosso estoque ou buscamos no mercado interno e internacional o carro exato que você procura. Cada candidato é avaliado antes de chegar até você.",
  },
  {
    n: "03",
    titulo: "Inspeção e documentação",
    texto:
      "Laudo técnico independente, verificação de procedência e regularização documental completa.",
  },
  {
    n: "04",
    titulo: "Entrega",
    texto:
      "Entrega assistida, com toda a documentação e histórico organizados.",
  },
];

export function ProcessSection() {
  return (
    <section id="processo" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-center justify-between">
          <SectionIndex label="05 / O processo" />
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            04 etapas · 1 padrão
          </span>
        </div>

        <div className="mt-8 max-w-3xl">
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em]">
            Comprar um carro deveria ser
            <br />
            <span className="text-muted-foreground">
              tão refinado quanto dirigi-lo.
            </span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Quatro etapas pensadas para entregar previsibilidade, transparência e
            o tempo adequado para cada decisão importante.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {ETAPAS.map((e, i) => (
            <motion.div
              key={e.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex min-h-[240px] flex-col gap-4 bg-card p-8"
            >
              <span className="text-[clamp(2rem,4vw,3rem)] font-medium leading-none tracking-[-0.03em] text-muted-foreground/40">
                {e.n}
              </span>
              <h3 className="mt-auto text-[17px]">{e.titulo}</h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {e.texto}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
