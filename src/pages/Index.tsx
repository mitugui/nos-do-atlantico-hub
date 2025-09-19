import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import PartnersCarousel from "@/components/PartnersCarousel";
import ProcessCards from "@/components/ProcessCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <PartnersCarousel />
      <ProcessCards />
      <Footer />
    </div>
  );
};

export default Index;
