import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Gift } from "lucide-react";
import heroImage from "@/assets/hero-couple-gift.jpg";
import santaHat from "@/assets/santa-hat.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-primary/40"></div>
          <div className="absolute top-40 left-32 w-2 h-2 rounded-full bg-destructive/30"></div>
          <div className="absolute top-60 left-20 w-4 h-4 rounded-full bg-yellow-400/40"></div>
          <div className="absolute top-32 right-40 w-3 h-3 rounded-full bg-primary/50"></div>
          <div className="absolute top-80 right-20 w-2 h-2 rounded-full bg-blue-400/30"></div>
          <div className="absolute bottom-40 left-40 w-3 h-3 rounded-full bg-destructive/40"></div>
          <div className="absolute bottom-60 right-60 w-4 h-4 rounded-full bg-primary/30"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="space-y-8 animate-fade-in z-10">
              <div className="inline-block">
                <p className="text-destructive font-semibold text-lg md:text-xl mb-4">
                  Smart Gifts de Skandia
                </p>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Un regalo que{" "}
                <span className="relative inline-block">
                  <span className="text-primary">crece</span>
                  <img 
                    src={santaHat} 
                    alt="" 
                    className="absolute -top-8 -left-6 md:-top-12 md:-left-8 w-12 h-12 md:w-16 md:h-16 -rotate-12"
                  />
                </span>
                {" "}con el tiempo.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Papá Noel y Skandia presentan los Smart Gifts: una nueva forma de regalar oportunidades.
              </p>
                
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  variant="skandia"
                  onClick={() => navigate("/crear-regalo")}
                  className="text-base px-8"
                >
                  Crear mi Smart Gift
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-base border-2"
                  onClick={() => navigate("/activar")}
                >
                  Activar mi regalo
                </Button>
              </div>
            </div>

            {/* Right side - Hero image with decorative circle */}
            <div className="relative z-10 animate-scale-in">
              <div className="relative">
                {/* Decorative circle background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200/60 to-pink-300/40 rounded-full transform scale-105 blur-2xl"></div>
                
                {/* Main image */}
                <div className="relative rounded-full overflow-hidden aspect-square border-8 border-background shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Pareja feliz con Smart Gift de Skandia" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Additional decorative dots around image */}
                <div className="absolute -top-4 -right-4 w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                <div className="absolute top-1/4 -right-8 w-3 h-3 rounded-full bg-destructive/50"></div>
                <div className="absolute bottom-1/4 -left-6 w-4 h-4 rounded-full bg-yellow-400/60"></div>
                <div className="absolute -bottom-2 right-1/4 w-3 h-3 rounded-full bg-blue-400/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <Gift className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-semibold">Regala con propósito</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada Smart Gift es una inversión que crece con el tiempo. Elige el diseño, el monto y añade un mensaje personalizado.
              </p>
            </div>

            <div className="space-y-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-semibold">Construye futuro</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tu regalo se convierte en el primer paso hacia la libertad financiera. Un asesor Skandia guiará cada decisión.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
