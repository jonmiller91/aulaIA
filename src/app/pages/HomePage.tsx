import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Hero } from "../components/home/Hero";
import { BrandsMarquee } from "../components/home/BrandsMarquee";
import { AboutSection } from "../components/home/AboutSection";
import { FeaturedVehicle } from "../components/home/FeaturedVehicle";
import { CollectionPreview } from "../components/home/CollectionPreview";
import { ServicesSection } from "../components/home/ServicesSection";
import { ProcessSection } from "../components/home/ProcessSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { FaqSection } from "../components/home/FaqSection";
import { FinalCta } from "../components/home/FinalCta";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <BrandsMarquee />
        <AboutSection />
        <FeaturedVehicle />
        <CollectionPreview />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
