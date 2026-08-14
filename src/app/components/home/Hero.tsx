import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { SeloBadge } from "../SeloBadge";
import { CONTACT_PHONE } from "../../lib/contact";
import imgPorsche from "../../../imports/Hero/8b3ebb616bcdf25da1b75042a3e0ae687e184286.png";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section id="top" className="relative overflow-hidden bg-[#fafaf8] pt-28 pb-24 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-12">
        {/* Edition tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#6b6b66]"
        >
          <span className="h-px w-8 bg-[#e7e7e4]" />
          2026 / Edição 01
        </motion.div>

        {/* Two-column grid */}
        <div className="mt-10 grid grid-cols-[1fr_auto] items-end gap-12">
          {/* Left column */}
          <div className="max-w-[690px]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
              className="text-[15px] leading-[1.625] tracking-[-0.01em] text-[#6b6b66]"
            >
              Curadoria de automóveis raros, esportivos e de coleção para quem
              entende a diferença entre possuir e pertencer.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
              className="mt-8 text-[72px] font-medium leading-[1.02] tracking-[-0.02em] text-[#161616]"
            >
              Carros que não se encontram.
              <br />
              <span className="text-[#6b6b66]">Se reconhecem.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button
                className="rounded-full px-6 py-2 bg-[#111] hover:bg-[#333] text-white"
                onClick={() => navigate("/colecao")}
              >
                Ver coleção <ArrowRight className="size-4" />
              </Button>
              <span className="text-[13px] tracking-[-0.01em] text-[#6b6b66]">
                {CONTACT_PHONE} · São Paulo · Atendimento sob agendamento
              </span>
            </motion.div>
          </div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative flex flex-col overflow-hidden rounded-[24px] border border-[#e7e7e4] bg-white"
            style={{ width: 565, height: 522 }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-[14px]">
              <SeloBadge selo="Raro" />
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#6b6b66]">
                2026 · Edição limitada
              </span>
            </div>

            {/* Car image */}
            <div className="flex flex-1 items-center justify-center bg-[#f7f7f5] mx-px">
              <img
                src={imgPorsche}
                alt="Porsche 911 GT3 RS"
                className="h-full w-full object-contain p-8"
              />
            </div>

            {/* Bottom info */}
            <div className="flex items-end justify-between gap-4 px-6 py-6">
              <div>
                <h3 className="text-[17px] font-medium tracking-[-0.01em] text-[#161616]">
                  Porsche 911 GT3 RS · 2024
                </h3>
                <p className="mt-1 text-[13px] tracking-[-0.01em] text-[#6b6b66]">
                  Branco Carrara · 1.200 km
                </p>
              </div>
              <span className="text-[12px] text-[#6b6b66]">01 / 04</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
