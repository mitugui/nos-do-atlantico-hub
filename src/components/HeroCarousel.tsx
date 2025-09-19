import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Instagram, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import barreadoImage from "@/assets/barreado-dish.jpg";
import birdwatchingImage from "@/assets/birdwatching.jpg";

const slides = [
  {
    id: 1,
    question: "Nós do Atlântico? Onde posso encontrar Barreado?",
    image: barreadoImage,
    title: "Melhores lugares com Barreado para você",
    description: "Descubra os sabores autênticos do litoral paranaense com nossas recomendações especiais de casas tradicionais que servem o melhor barreado da região.",
    location: {
      name: "Casa do Barreado",
      owner: "João Silva",
      role: "Dono da Casa do Barreado",
      bio: "30 anos dedicados à tradição culinária caiçara",
      instagram: "@casadobarreado"
    }
  },
  {
    id: 2,
    question: "Onde posso fazer birdwatching no litoral?",
    image: birdwatchingImage,
    title: "Experiências de observação de aves",
    description: "Explore a rica biodiversidade do litoral paranaense com guias especializados e descubra espécies únicas em seus habitats naturais.",
    location: {
      name: "Reserva Natural Guaraqueçaba",
      owner: "Maria Santos",
      role: "Guia de Birdwatching",
      bio: "Bióloga especializada em avifauna costeira",
      instagram: "@birdwatchingpr"
    }
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[currentSlide];

  return (
    <section className="relative h-screen bg-gradient-hero overflow-hidden">
      {/* Orange asymmetric element */}
      <div className="absolute right-0 top-0 w-[35%] h-full bg-orange/20 transform translate-x-12 rotate-2 -skew-y-2"></div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Question and Image */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                  {current.question}
                </h1>
                <div className="relative group">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-warm transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Right side - Content Card */}
            <div className="space-y-6">
              <Card className="bg-card/95 backdrop-blur-md shadow-card border-0">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary">
                    {current.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {current.description}
                  </p>

                  {/* Location Info */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-orange" />
                      <span className="font-semibold text-primary">
                        {current.location.name}
                      </span>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-brown rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-orange" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary">
                          {current.location.owner}
                        </h3>
                        <p className="text-sm font-medium text-orange">
                          {current.location.role}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {current.location.bio}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Instagram className="h-4 w-4 text-orange" />
                          <span className="text-sm text-orange">
                            {current.location.instagram}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-orange hover:bg-orange/90 text-orange-foreground">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-md hover:bg-card text-primary shadow-card"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-md hover:bg-card text-primary shadow-card"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-orange scale-125"
                : "bg-card/50 hover:bg-card/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;