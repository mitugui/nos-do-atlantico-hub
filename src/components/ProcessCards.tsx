import { Card, CardContent } from "@/components/ui/card";
import { Route, Settings, Compass } from "lucide-react";

const steps = [
  {
    icon: Route,
    title: "Você acessa nossa aba de rotas maker",
    description: "Navegue pela nossa plataforma intuitiva e descubra todas as opções disponíveis para criar sua experiência personalizada no litoral paranaense."
  },
  {
    icon: Settings,
    title: "Você configura o que você quer",
    description: "Personalize sua jornada escolhendo entre gastronomia, natureza, cultura local, aventuras e muito mais. Defina seu perfil e preferências."
  },
  {
    icon: Compass,
    title: "Você descobre sua melhor rota e aproveita o litoral do Paraná",
    description: "Receba recomendações personalizadas e conecte-se com parceiros locais para viver experiências únicas e autênticas."
  }
];

const ProcessCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Em apenas 3 passos simples, você cria sua experiência ideal
            no litoral paranaense com o apoio de nossos parceiros locais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full bg-card shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-brown rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-10 w-10 text-orange" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange rounded-full flex items-center justify-center">
                      <span className="text-orange-foreground font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connection Line (except for last card) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange/30 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 w-0 h-0 border-l-4 border-l-orange/30 border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessCards;