import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Gift, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-couple-gift.jpg";
import santaHat from "@/assets/santa-hat-clean.png";

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
                  <span className="text-primary relative z-10">crece</span>
                  <img 
                    src={santaHat} 
                    alt="" 
                    className="absolute -top-6 -left-4 md:-top-10 md:-left-6 w-10 h-10 md:w-14 md:h-14 -rotate-12 opacity-90"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </span>
                {" "}con el tiempo.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Papá Noel y Skandia presentan los Smart Gifts: una nueva forma de regalar oportunidades.
              </p>
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

      {/* Two Paths Section */}
      <section className="py-20 md:py-32 relative">
        {/* Decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 w-2 h-2 rounded-full bg-primary/30"></div>
          <div className="absolute bottom-40 right-32 w-3 h-3 rounded-full bg-destructive/20"></div>
          <div className="absolute top-60 right-20 w-2 h-2 rounded-full bg-yellow-400/30"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Elige tu experiencia</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Dos caminos hacia la libertad financiera
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1 - Crear Smart Gift */}
            <div className="group relative bg-gradient-to-br from-primary/5 via-card to-card rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Gift className="h-10 w-10 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold">Crear mi Smart Gift</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Regala una oportunidad de inversión. Personaliza el diseño, elige el monto y añade un mensaje especial. Un regalo que crece con el tiempo.
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <p className="text-sm md:text-base">Elige diseño y monto personalizado</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <p className="text-sm md:text-base">Añade mensaje especial</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <p className="text-sm md:text-base">Entrega cuando quieras</p>
                  </div>
                </div>

                <Button 
                  size="lg"
                  variant="skandia"
                  onClick={() => navigate("/crear-regalo")}
                  className="w-full text-base h-14 group-hover:scale-105 transition-transform"
                >
                  Comenzar a crear
                </Button>
              </div>
            </div>

            {/* Card 2 - Activar Regalo */}
            <div className="group relative bg-gradient-to-br from-destructive/5 via-card to-card rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-destructive/20 hover:border-destructive/40 overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-destructive/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-10 w-10 text-destructive" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold">Activar mi regalo</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    ¿Recibiste un Smart Gift? Actívalo aquí y comienza tu camino hacia la libertad financiera con asesoría personalizada.
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-destructive text-sm font-bold">✓</span>
                    </div>
                    <p className="text-sm md:text-base">Activa tu código de regalo</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-destructive text-sm font-bold">✓</span>
                    </div>
                    <p className="text-sm md:text-base">Elige tu opción de inversión</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-destructive text-sm font-bold">✓</span>
                    </div>
                    <p className="text-sm md:text-base">Recibe asesoría Skandia gratis</p>
                  </div>
                </div>

                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/activar")}
                  className="w-full text-base h-14 border-2 border-destructive text-destructive hover:bg-destructive hover:text-white group-hover:scale-105 transition-all"
                >
                  Activar ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
