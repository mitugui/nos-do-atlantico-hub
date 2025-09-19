import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center">
                <span className="text-orange-foreground font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold">Nós do Atlântico</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Fortalecendo a cultura e negócios de impacto no litoral do Paraná,
              conectando turistas com experiências autênticas e empreendedores locais.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Nos acompanhe</h3>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="icon" className="bg-orange hover:bg-orange/90 text-orange-foreground">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Navegação</h3>
            <div className="space-y-3">
              <a href="#sobre" className="block text-primary-foreground/80 hover:text-orange transition-colors">
                Sobre Nós
              </a>
              <a href="#rotas" className="block text-primary-foreground/80 hover:text-orange transition-colors">
                Como Funciona
              </a>
              <a href="#experiencias" className="block text-primary-foreground/80 hover:text-orange transition-colors">
                Experiências
              </a>
              <a href="#parceiros" className="block text-primary-foreground/80 hover:text-orange transition-colors">
                Seja Parceiro
              </a>
              <a href="#contato" className="block text-primary-foreground/80 hover:text-orange transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="bg-primary-foreground/10 hover:bg-orange hover:text-orange-foreground text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-primary-foreground/10 hover:bg-orange hover:text-orange-foreground text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-primary-foreground/10 hover:bg-orange hover:text-orange-foreground text-primary-foreground"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="space-y-2">
              <p className="text-primary-foreground/80 text-sm">
                Siga-nos para descobrir as últimas experiências e novidades do litoral paranaense.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Nós do Atlântico. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;