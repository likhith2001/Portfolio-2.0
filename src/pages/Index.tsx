import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CareerSection from "@/components/CareerSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
// import PapersSection from "@/components/PapersSection";
// import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticlesBackground />
      <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <CareerSection />
      <ProjectsSection />
      <SkillsSection />
      {/* <PapersSection /> */}
      {/* <AchievementsSection /> */}
      <CertificationsSection />
      <AboutMeSection />
      <ContactSection />
      </div>
    </div>
  );
};

export default Index;
