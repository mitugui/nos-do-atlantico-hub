import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? "w-11/12 max-w-6xl" : "w-11/12 max-w-7xl"
    }`}>
      <div className={`bg-card/95 backdrop-blur-md rounded-2xl border border-border shadow-warm transition-all duration-300 ${
        isScrolled ? "py-3 px-6" : "py-4 px-8"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-brown rounded-lg flex items-center justify-center">
              <span className="text-orange font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-primary">Nós do Atlântico</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-orange transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-orange transition-colors">
              Sobre
            </a>
            <a href="#rotas" className="text-foreground hover:text-orange transition-colors">
              Rotas
            </a>
            <a href="#experiencias" className="text-foreground hover:text-orange transition-colors">
              Experiências
            </a>
          </div>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex border-orange text-orange hover:bg-orange hover:text-orange-foreground">
              Seja Parceiro
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-orange transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-foreground hover:text-orange transition-colors">
                Sobre
              </a>
              <a href="#rotas" className="text-foreground hover:text-orange transition-colors">
                Rotas
              </a>
              <a href="#experiencias" className="text-foreground hover:text-orange transition-colors">
                Experiências
              </a>
              <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-orange-foreground w-full">
                Seja Parceiro
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;