import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Service = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary">
              Página do Serviço
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Esta página será desenvolvida em breve com todas as funcionalidades
              do serviço Nós do Atlântico.
            </p>
            
            <div className="bg-card rounded-2xl p-12 shadow-card max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Em desenvolvimento
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Aqui você encontrará as rotas personalizadas, sistema de
                recomendações, conexão com parceiros locais e todas as
                ferramentas para planejar sua experiência perfeita no
                litoral paranaense.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Service;