import svgPaths from "./svg-ee3dvi5zkn";
import imgImageWithFallbackImage from "./8b3ebb616bcdf25da1b75042a3e0ae687e184286.png";

function Text() {
  return <div className="bg-[#e7e7e4] h-px relative shrink-0 w-[32px]" data-name="Text" />;
}

function Container1() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text />
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6b6b66] text-[11px] tracking-[2.42px] uppercase whitespace-nowrap">2026 / Edição 01</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-[672px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pt-[32px] relative size-full">
        <div className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#161616] text-[72px] tracking-[-1.44px] w-[672px]">
          <p className="leading-[73.44px] mb-0">Carros que não se encontram.</p>
          <p className="leading-[73.44px] text-[#6b6b66]">Se reconhecem.</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#111] h-[48px] relative rounded-[33554400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.16px] whitespace-nowrap">Ver coleção</p>
        <Icon />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b66] text-[13px] tracking-[-0.16px] whitespace-nowrap">+55 11 0000-0000 · São Paulo · Atendimento sob agendamento</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[88px] relative shrink-0 w-[690.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[40px] relative size-full">
        <Button />
        <Text1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="col-1 h-[389.063px] justify-self-stretch relative row-1 self-end shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24.375px] not-italic relative shrink-0 text-[#6b6b66] text-[15px] tracking-[-0.16px] w-[576px]">Curadoria de automóveis raros, esportivos e de coleção para quem entende a diferença entre possuir e pertencer.</p>
        <Heading />
        <Container4 />
      </div>
    </div>
  );
}

function SeloBadge() {
  return (
    <div className="bg-[#161616] relative rounded-[33554400px] shrink-0" data-name="SeloBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#fafaf8] text-[10px] tracking-[1.4px] uppercase whitespace-nowrap">Raro</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#6b6b66] text-[11px] tracking-[1.76px] uppercase whitespace-nowrap">2026 · Edição limitada</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[24px] relative size-full">
          <SeloBadge />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallbackImage() {
  return (
    <div className="h-[288px] relative shrink-0 w-[499.203px]" data-name="ImageWithFallback (image)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageWithFallbackImage} />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="bg-[#f7f7f5] h-[352px] relative shrink-0 w-[563.203px]" data-name="ImageWithFallback">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[32px] relative rounded-[inherit] size-full">
        <ImageWithFallbackImage />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[25.5px] not-italic relative shrink-0 text-[#161616] text-[17px] tracking-[-0.16px] whitespace-nowrap">Porsche 911 GT3 RS · 2024</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[214.234px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6b6b66] text-[13px] tracking-[-0.16px] whitespace-nowrap">Branco Carrara · 1.200 km</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[214.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6b6b66] text-[12px] tracking-[-0.16px] whitespace-nowrap">01 / 04</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between p-[24px] relative size-full">
          <Container8 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white col-2 h-[522px] justify-self-stretch relative rounded-[24px] row-1 self-end shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container6 />
        <ImageWithFallback />
        <Container7 />
      </div>
      <div aria-hidden className="absolute border border-[#e7e7e4] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[__690.80px_565.20px] grid-rows-[_522px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1400px] px-[48px] relative shrink-0 w-[1400px]" data-name="Container">
      <Container1 />
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

export default function Hero() {
  return (
    <div className="bg-[#fafaf8] content-stretch flex flex-col items-start pt-[112px] relative size-full" data-name="Hero">
      <ContainerMargin />
    </div>
  );
}