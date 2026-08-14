import imgImageWithFallbackImage from "./de44e145aa649f87342cd0b43305658c7a6a2db5.png";

function Text() {
  return <div className="bg-[#e7e7e4] h-px relative shrink-0 w-[32px]" data-name="Text" />;
}

function SectionIndex() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[16.5px] items-center left-0 top-[9.25px]" data-name="SectionIndex">
      <Text />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6b6b66] text-[11px] tracking-[2.2px] uppercase whitespace-nowrap">02 / Em destaque</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[25.75px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SectionIndex />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[136px] max-w-[672px] relative shrink-0 w-[672px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pt-[32px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#161616] text-[48px] tracking-[-0.96px] whitespace-nowrap">
          <p className="leading-[51.84px] mb-0">Cada detalhe contado.</p>
          <p className="leading-[51.84px] text-[#6b6b66]">Cada procedência verificada.</p>
        </div>
      </div>
    </div>
  );
}

function ImageWithFallbackImage() {
  return (
    <div className="h-[402.109px] relative shrink-0 w-[672.188px]" data-name="ImageWithFallback (image)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageWithFallbackImage} />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[452.109px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageWithFallbackImage />
      </div>
      <div aria-hidden className="absolute border border-[#e7e7e4] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px] self-stretch" data-name="Container">
      <div aria-hidden className="absolute border border-[#e7e7e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6b6b66] text-[12px] tracking-[-0.16px] whitespace-nowrap">Aero kit Weissach</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px] self-stretch" data-name="Container">
      <div aria-hidden className="absolute border border-[#e7e7e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6b6b66] text-[12px] tracking-[-0.16px] whitespace-nowrap">Teto em magnésio</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px] self-stretch" data-name="Container">
      <div aria-hidden className="absolute border border-[#e7e7e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6b6b66] text-[12px] tracking-[-0.16px] whitespace-nowrap">{`Rodas forjadas 20"`}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px] self-stretch" data-name="Container">
      <div aria-hidden className="absolute border border-[#e7e7e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6b6b66] text-[12px] tracking-[-0.16px] w-[135px]">Bancos em fibra de carbono</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container6 />
        <Container7 />
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27.5px] not-italic relative shrink-0 text-[#161616] text-[22px] tracking-[-0.16px] whitespace-nowrap">Porsche 911 GT3 RS</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[205.719px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b66] text-[13px] tracking-[-0.16px] whitespace-nowrap">Esportivo · 2024</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-[205.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[33px] not-italic relative shrink-0 text-[#161616] text-[22px] tracking-[-0.16px] whitespace-nowrap">R$ 2.890.000</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e7e7e4] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[25px] relative size-full">
        <Container12 />
        <Text1 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e7e7e4] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between not-italic py-[17px] relative size-full tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[19.5px] relative shrink-0 text-[#6b6b66] text-[13px]">Motor</p>
        <p className="leading-[21px] relative shrink-0 text-[#161616] text-[14px] text-right">4.0L Boxer 6 aspirado · 525 cv · 0–100 km/h em 3.2s</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e7e7e4] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between not-italic py-[17px] relative size-full tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[19.5px] relative shrink-0 text-[#6b6b66] text-[13px]">Velocidade máxima</p>
        <p className="leading-[21px] relative shrink-0 text-[#161616] text-[14px] text-right">296 km/h</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e7e7e4] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between not-italic py-[17px] relative size-full tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[19.5px] relative shrink-0 text-[#6b6b66] text-[13px]">Transmissão</p>
        <p className="leading-[21px] relative shrink-0 text-[#161616] text-[14px] text-right">Tração traseira · PDK 7 velocidades</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e7e7e4] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between not-italic py-[17px] relative size-full tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[19.5px] relative shrink-0 text-[#6b6b66] text-[13px]">Combustível</p>
        <p className="leading-[21px] relative shrink-0 text-[#161616] text-[14px] text-right">13.6 / 8.9 L/100 km · Combinado · WLTP</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[242px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container14 />
        <Container15 />
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-white flex-[81.266_0_0] h-[29.5px] min-w-px relative rounded-[33554400px]" data-name="Tab">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[5px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#161616] text-[13px] text-center tracking-[-0.16px] whitespace-nowrap">Exterior</p>
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="flex-[77.313_0_0] h-[29.5px] min-w-px relative rounded-[33554400px]" data-name="Tab">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[5px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#161616] text-[13px] text-center tracking-[-0.16px] whitespace-nowrap">Interior</p>
        </div>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="flex-[71.719_0_0] h-[29.5px] min-w-px relative rounded-[33554400px]" data-name="Tab">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[5px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#161616] text-[13px] text-center tracking-[-0.16px] whitespace-nowrap">Rodas</p>
        </div>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="flex-[93.344_0_0] h-[29.5px] min-w-px relative rounded-[33554400px]" data-name="Tab">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[5px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#161616] text-[13px] text-center tracking-[-0.16px] whitespace-nowrap">Mecânica</p>
        </div>
      </div>
    </div>
  );
}

function Tab4() {
  return (
    <div className="flex-[126.375_0_0] h-[29.5px] min-w-px relative rounded-[33554400px]" data-name="Tab">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[5px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#161616] text-[13px] text-center tracking-[-0.16px] whitespace-nowrap">Documentação</p>
        </div>
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-[#f3f3f1] relative rounded-[33554400px] shrink-0 w-full" data-name="Tab List">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
          <Tab />
          <Tab1 />
          <Tab2 />
          <Tab3 />
          <Tab4 />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#6b6b66] text-[14px] tracking-[-0.16px] w-full">Pintura Branco Carrara original, aero kit Weissach completo e detalhes em fibra de carbono aparente. Sem retoques ou repintura.</p>
      </div>
    </div>
  );
}

function TabPanel() {
  return (
    <div className="flex-[45.5_0_0] min-h-px relative w-full" data-name="Tab Panel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[131px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[32px] relative size-full">
        <TabList />
        <TabPanel />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fafaf8] flex-[261.906_0_0] h-[48px] min-w-px relative rounded-[33554400px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e7e7e4] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[9px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] text-center tracking-[-0.16px] whitespace-nowrap">Ver coleção completa</p>
        </div>
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="bg-[#111] flex-[259.906_0_0] h-[48px] min-w-px relative rounded-[33554400px]" data-name="SlotClone">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.16px] whitespace-nowrap">Solicitar proposta</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[32px] relative size-full">
        <Button />
        <SlotClone />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative self-stretch shrink-0 w-[458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
        <Container13 />
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-[1304px]" data-name="Container">
      <Container3 />
      <Container10 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[64px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1400px] px-[48px] relative shrink-0 w-[1400px]" data-name="Container">
      <Container1 />
      <Heading />
      <ContainerMargin1 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container />
      </div>
    </div>
  );
}

export default function FeaturedVehicle() {
  return (
    <div className="bg-[#f7f7f5] content-stretch flex flex-col items-start py-[128px] relative size-full" data-name="FeaturedVehicle">
      <ContainerMargin />
    </div>
  );
}