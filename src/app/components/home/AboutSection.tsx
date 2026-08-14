import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SectionIndex } from "../SectionIndex";

const ERAS = ["1960", "1970", "1980", "1990", "2000", "2010"];

const PRINCIPIOS = [
  {
    n: "01",
    titulo: "Procedência",
    texto:
      "Cada veículo é rastreado desde o primeiro proprietário. Documentação completa, histórico de manutenção e laudo técnico independente.",
  },
  {
    n: "02",
    titulo: "Curadoria",
    texto:
      "Selecionamos menos de 5% dos carros que avaliamos. O que entra no nosso showroom precisa ter algo além de preço alto.",
  },
  {
    n: "03",
    titulo: "Discrição",
    texto:
      "Atendimento privado, agendado, sem vitrine de rua. O processo de compra é tão exclusivo quanto o carro.",
  },
];

export function AboutSection() {
  const navigate = useNavigate();

  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-center justify-between">
          <SectionIndex label="01 / Sobre" />
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            SP · BR
          </span>
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="max-w-lg text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em]">
              Não vendemos carros.
              <br />
              <span className="text-muted-foreground">Entregamos exceções.</span>
            </h2>

            <div className="mt-12 flex items-start gap-6">
              <div className="text-[clamp(3rem,7vw,5rem)] font-medium leading-none tracking-[-0.03em]">
                5%
              </div>
              <p className="max-w-[220px] pt-2 text-[13px] leading-relaxed text-muted-foreground">
                Percentual de carros avaliados que chegam ao showroom.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-[16px] leading-relaxed text-muted-foreground">
              A SELECTCARS nasceu da convicção de que um carro extraordinário
              merece um processo à altura. Cada veículo no nosso showroom passou
              por uma seleção criteriosa: procedência verificada, histórico
              documentado, condição mecânica e estética dentro de padrões que não
              admitem concessões.
            </p>
            <p className="text-[16px] leading-relaxed text-muted-foreground">
              Trabalhamos com um número limitado de unidades por mês. Por escolha.
              Porque atender bem importa mais do que vender muito.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("processo")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex w-fit items-center gap-2 text-[14px] transition-colors hover:text-muted-foreground"
            >
              Conheça o processo
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Timeline de eras */}
        <div className="mt-20 border-t border-border pt-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {ERAS.map((era) => (
              <span
                key={era}
                className="text-[clamp(1.1rem,2.4vw,1.8rem)] tracking-[-0.02em] text-muted-foreground/60"
              >
                {era}
              </span>
            ))}
          </div>
        </div>

        {/* Três princípios */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {PRINCIPIOS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-4 bg-card p-8"
            >
              <span className="text-[12px] tracking-[0.16em] text-muted-foreground">
                {p.n}
              </span>
              <h3 className="text-[18px]">{p.titulo}</h3>
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                {p.texto}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
