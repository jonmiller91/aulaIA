import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { SectionIndex } from "../SectionIndex";

const FAQ = [
  {
    q: "Como funciona o processo de compra na SELECTCARS?",
    a: "Tudo começa com uma conversa privada para entender seu perfil, preferências e o uso pretendido. A partir daí podemos apresentar opções do nosso estoque atual no showroom, buscar no mercado interno e internacional o carro exato que você procura, e conduzir todo o processo: laudo técnico, documentação, transferência e entrega.",
  },
  {
    q: "Vocês fazem importação de modelos específicos?",
    a: "Sim. Fazemos sourcing internacional ativo nos mercados europeu, americano e asiático, com importação completa e documentação regularizada. Compartilhe o modelo, ano e configuração desejada e iniciamos a busca.",
  },
  {
    q: "Como funciona a consignação?",
    a: "Cuidamos da apresentação editorial do seu veículo (fotografia, vídeo e ficha), avaliação com laudo técnico independente e acesso a uma rede qualificada de compradores verificados — tudo com discrição total, sem exposição em vitrine.",
  },
  {
    q: "Posso financiar a compra?",
    a: "Sim. Trabalhamos com parceiros para estruturar financiamento e seguro adequados ao perfil de cada cliente. Os detalhes são tratados de forma privada durante o atendimento.",
  },
  {
    q: "Vocês entregam fora de São Paulo?",
    a: "Sim. Realizamos entrega assistida em todo o Brasil, com toda a documentação e histórico organizados. As condições são combinadas no agendamento.",
  },
];

export function FaqSection() {
  return (
    <section id="perguntas" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionIndex label="Perguntas frequentes" />
            <h2 className="mt-8 text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em]">
              Antes de agendar.
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-6 text-left text-[16px] hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[14px] leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
