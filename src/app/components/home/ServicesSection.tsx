import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionIndex } from "../SectionIndex";

const CONSIGNACAO = [
  { titulo: "Avaliação justa", desc: "Laudo técnico independente" },
  { titulo: "Rede qualificada", desc: "Compradores verificados" },
  { titulo: "Apresentação editorial", desc: "Fotografia · vídeo · ficha" },
  { titulo: "Discrição total", desc: "Sem exposição em vitrine" },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-center justify-between">
          <SectionIndex label="04 / Serviços" />
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Edição rara · Acervo SELECTCARS
          </span>
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em]">
            Para além da venda.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Estrutura completa para clientes que veem o automóvel como patrimônio
            e não como mero objeto de consumo.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Serviço 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-8 lg:col-span-2"
          >
            <div>
              <h3 className="text-[20px]">Consignação Premium</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                Vendemos o seu carro do jeito que ele merece ser apresentado.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {CONSIGNACAO.map((c) => (
                <div key={c.titulo} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  <div>
                    <div className="text-[14px]">{c.titulo}</div>
                    <div className="text-[13px] text-muted-foreground">
                      {c.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Serviços 2 e 3 empilhados */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-1 flex-col gap-3 rounded-3xl border border-border bg-card p-8"
            >
              <h3 className="text-[18px]">Sourcing Internacional</h3>
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                Procura ativa de modelos específicos no mercado europeu, americano
                e asiático. Importação completa com documentação regularizada.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-1 flex-col gap-3 rounded-3xl border border-border bg-card p-8"
            >
              <h3 className="text-[18px]">Gestão de Coleção</h3>
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                Patrimônio merece estrutura à altura.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {["Climatização", "Manutenção", "Documentação"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-3 py-1 text-[12px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bloco de citação */}
        <div className="mt-16 rounded-3xl border border-border bg-foreground p-10 text-background md:p-16">
          <p className="max-w-3xl text-[clamp(1.3rem,2.6vw,2rem)] font-medium leading-[1.2] tracking-[-0.01em]">
            Comprar um carro deveria ser tão refinado quanto dirigi-lo.
          </p>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-background/70">
            Sem pressa, sem ruído, sem cláusulas escondidas. Cada etapa do
            processo SELECTCARS é desenhada para que você reconheça o carro certo
            e nunca seja empurrado para nenhum.
          </p>
        </div>
      </div>
    </section>
  );
}
