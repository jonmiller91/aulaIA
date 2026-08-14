import { useState } from "react";
import { useNavigate } from "react-router";
import { MessageCircle } from "lucide-react";
import { SectionIndex } from "../SectionIndex";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  whatsappLink,
} from "../../lib/contact";

export function FinalCta() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [busca, setBusca] = useState("");

  // Sem captação/CRM: os campos apenas compõem uma mensagem de WhatsApp.
  const composed = () => {
    const parts = [
      "Olá, gostaria de agendar uma visita ao showroom da SELECTCARS.",
      nome && `Meu nome é ${nome}.`,
      busca && `Procuro: ${busca}.`,
    ].filter(Boolean);
    return whatsappLink(parts.join(" "));
  };

  return (
    <section id="contato" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionIndex label="07 / Próximo passo" />

        <div className="mt-8 max-w-3xl">
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em]">
            Encontre o seu próximo.
            <br />
            <span className="text-muted-foreground">
              Ou o que você ainda não sabia que era o seu.
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Seja para uma compra específica, uma consignação ou uma conversa
            sobre o que faz sentido para o seu momento — estamos disponíveis.
            Atendimento privado, sob agendamento.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full px-6 py-2">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> Falar com um curador
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full px-6"
              onClick={() => navigate("/colecao")}
            >
              Ver coleção
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Agendar visita — compõe mensagem de WhatsApp, sem envio de lead */}
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h3 className="text-[20px]">Agendar visita ao showroom</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
              Compartilhe o que você procura. Respondemos no mesmo dia útil.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div>
                <label className="mb-2 block text-[13px] text-muted-foreground">
                  Nome completo
                </label>
                <Input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="h-12 rounded-xl"
                />
              </div>
              <div>
                <label className="mb-2 block text-[13px] text-muted-foreground">
                  Conte um pouco sobre o que procura
                </label>
                <Textarea
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  placeholder="Modelo, ano, faixa de valor…"
                  className="min-h-28 rounded-xl"
                />
              </div>
              <Button asChild className="h-12 rounded-full px-6">
                <a href={composed()} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> Enviar mensagem no WhatsApp
                </a>
              </Button>
              <p className="text-[12px] text-muted-foreground">
                Resposta em até 1 dia útil · Atendimento confidencial
              </p>
            </div>
          </div>

          {/* Informações de contato */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-border bg-card p-8">
              <h4 className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                Showroom
              </h4>
              <p className="mt-3 text-[15px]">São Paulo, SP</p>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Endereço completo enviado no agendamento
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h4 className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                Horário
              </h4>
              <p className="mt-3 text-[15px]">Seg a sex · 10h às 19h</p>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Sábado · 10h às 14h, sempre por agendamento
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h4 className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                Contato direto
              </h4>
              <p className="mt-3 text-[15px]">{CONTACT_PHONE}</p>
              <p className="mt-1 text-[13px] text-muted-foreground">
                {CONTACT_EMAIL}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
