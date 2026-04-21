import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import WhoSection from "@/components/WhoSection";
import ModelSection from "@/components/ModelSection";
import ResultSection from "@/components/ResultSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <WhoSection />
      <ModelSection />
      <ResultSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
