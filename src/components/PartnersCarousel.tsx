import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const partners = [
  { name: "Pousada Caiçara", category: "Hospedagem" },
  { name: "Restaurante Barreado do Litoral", category: "Gastronomia" },
  { name: "Eco Tours Paraná", category: "Turismo" },
  { name: "Casa de Artesanato Local", category: "Cultura" },
  { name: "Marina do Atlântico", category: "Náutica" },
  { name: "Café da Manhã Caiçara", category: "Gastronomia" },
  { name: "Trilhas & Aventuras", category: "Ecoturismo" },
  { name: "Pescaria Tradicional", category: "Experiências" },
];

const PartnersCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhamos com os melhores estabelecimentos do litoral paranaense
            para oferecer experiências autênticas e memoráveis.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-hidden"
            style={{ width: "200%" }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-72 bg-card shadow-card hover:shadow-orange transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-brown rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-orange">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-lg">
                        {partner.name}
                      </h3>
                      <p className="text-orange text-sm font-medium">
                        {partner.category}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Parceiro oficial do Nós do Atlântico, oferecendo
                      experiências autênticas do litoral paranaense.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;