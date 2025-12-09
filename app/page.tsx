import HeroSection from "@/components/sections/HeroSection";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";
import TeamPreviewSection from "@/components/sections/TeamPreviewSection";
import AwardsSection from "@/components/sections/AwardsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="page-transition">
      <HeroSection />
      <PracticeAreasSection />
      <AwardsSection />
      <TeamPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
