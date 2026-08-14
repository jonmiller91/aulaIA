import { motion } from "motion/react";
import { SectionIndex } from "../SectionIndex";

const DEPOIMENTOS = [
  {
    texto:
      "Procurei um Porsche específico por dois anos antes de chegar à SELECTCARS. Em três semanas eles encontraram a unidade certa, na cor certa, com o histórico certo. Atendimento de outro nível.",
    autor: "R. M., Empresário",
    local: "São Paulo",
  },
  {
    texto:
      "O que mais me impressionou foi a discrição. Comprei dois carros pela SELECTCARS e em nenhum momento me senti um número. O processo é silencioso, preciso e respeita o seu tempo.",
    autor: "C. A., Investidor",
    local: "Rio de Janeiro",
  },
  {
    texto:
      "Já tive experiências ruins comprando importados. Aqui foi diferente desde o primeiro contato. Eles realmente entendem o produto e tratam o carro como peça, não como estoque.",
    autor: "F. L., Colecionador",
    local: "Belo Horizonte",
  },
];

export function TestimonialsSection() {
  return (
    <section id="clientes" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionIndex label="06 / Clientes" />
        <h2 className="mt-8 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em]">
          O que nos define é
          <br />
          <span className="text-muted-foreground">quem confia em nós.</span>
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {DEPOIMENTOS.map((d, i) => (
            <motion.figure
              key={d.autor}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-8 rounded-3xl border border-border bg-card p-8"
            >
              <div className="text-[40px] leading-none text-muted-foreground/30">
                "
              </div>
              <blockquote className="text-[15px] leading-relaxed text-foreground/90">
                {d.texto}
              </blockquote>
              <figcaption className="mt-auto border-t border-border pt-5 text-[13px]">
                <div>{d.autor}</div>
                <div className="text-muted-foreground">{d.local}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
