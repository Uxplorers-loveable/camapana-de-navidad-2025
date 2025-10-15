import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GiftCard from "@/components/GiftCard";
import Snowfall from "@/components/Snowfall";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, TrendingUp, Shield, PiggyBank, Sparkles } from "lucide-react";

const investmentOptions = [
  {
    icon: Sparkles,
    title: "Tu primera inversión",
    description: "Comienza tu camino hacia la libertad financiera con un portafolio diversificado diseñado para principiantes.",
    risk: "Bajo",
    returns: "8-12% anual"
  },
  {
    icon: PiggyBank,
    title: "Fondo de emergencias",
    description: "Construye tu red de seguridad para estar preparado ante cualquier imprevisto. Liquidez inmediata cuando la necesites.",
    risk: "Muy Bajo",
    returns: "6-10% anual"
  },
  {
    icon: Shield,
    title: "Protección familiar",
    description: "Protege a tu familia mientras ahorras para el futuro. Combina seguridad con crecimiento sostenible.",
    risk: "Bajo",
    returns: "10-15% anual"
  },
  {
    icon: TrendingUp,
    title: "Portafolio de inversión",
    description: "Crea un portafolio completo y haz crecer tu patrimonio con estrategias diversificadas de inversión.",
    risk: "Medio",
    returns: "12-18% anual"
  }
];

const ActivateGift = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"narrative" | "intro" | "options" | "form" | "success">("narrative");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    document: "",
    email: "",
    phone: "",
  });

  // Datos de ejemplo del regalo recibido
  const giftData = {
    template: 2 as 1 | 2 | 3,
    amount: "500.000,00",
    message: "Este regalo es el comienzo de tu libertad financiera. ¡Que crezca contigo!",
    from: "Papá Noel & Familia",
    to: "Ti",
  };

  const handleActivate = () => {
    if (!formData.name || !formData.document || !formData.email || !formData.phone) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    
    setStep("success");
  };

  // Narrative intro screen
  if (step === "narrative") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-[hsl(182,25%,96%)] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">
                🎁 ¡Has recibido un Smart Gift!
              </h1>
              <p className="text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Papá Noel y tus seres queridos creen en tu futuro.
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 md:p-12 space-y-6 text-left">
              <p className="text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Esta Navidad, el mejor CEO del mundo y Skandia crearon regalos que crecen contigo.
              </p>
              <p className="text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Esta Smart Gift es más que una tarjeta: <span className="font-semibold text-primary">es el primer paso hacia tu libertad financiera.</span>
              </p>
              <p className="text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
                Aquí podrás activarla, descubrir qué puedes lograr con ella y recibir asesoría personalizada para hacerla crecer.
              </p>
              <div className="pt-4 border-t animate-fade-in" style={{ animationDelay: '1s' }}>
                <p className="text-xl font-semibold text-center">
                  🌱 No estás recibiendo un regalo. Estás comenzando una historia.
                </p>
              </div>
            </div>

            <Button 
              size="lg"
              variant="skandia"
              onClick={() => setStep("intro")}
              className="animate-fade-in"
              style={{ animationDelay: '1.2s' }}
            >
              Descubre tu regalo
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Success screen with snowfall
  if (step === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-[hsl(182,25%,96%)] py-8">
        <Snowfall />
        
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Sparkles className="h-10 w-10 text-primary" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold">
              Listo. Tu asesor se pondrá en contacto contigo muy pronto.
            </h1>
            
            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 space-y-4">
              <p className="text-lg">
                Papá Noel y Skandia te dan la bienvenida al futuro que estás construyendo.
              </p>
              <div className="pt-4 space-y-2 text-muted-foreground">
                <p>📧 Recibirás un correo de confirmación</p>
                <p>📞 Un asesor te contactará en las próximas 48 horas</p>
                <p>🎓 Tendrás acceso a contenido educativo personalizado</p>
              </div>
            </div>

            <Button 
              size="lg"
              variant="skandia"
              onClick={() => navigate("/")}
            >
              Volver al inicio
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-[hsl(182,25%,96%)] py-8">
      {step === "form" && <Snowfall />}
      
      <div className="container mx-auto px-4 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => {
            if (step === "intro") setStep("narrative");
            else if (step === "options") setStep("intro");
            else if (step === "form") setStep("options");
            else navigate("/");
          }}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        {step === "intro" && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Tu Smart Gift
              </h1>
              <p className="text-xl text-muted-foreground">
                <span className="font-semibold text-primary">{giftData.from}</span> te ha enviado un regalo que no se guarda, se activa.
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8">
              <GiftCard {...giftData} className="mx-auto mb-6" />
              
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium">
                  ⏰ Tienes 30 días para activar tu regalo
                </div>
                <Button 
                  size="lg"
                  variant="skandia"
                  onClick={() => setStep("options")}
                >
                  Activar mi Smart Gift
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === "options" && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Que quisieras lograr con tu Smart Gift?
              </h2>
              <p className="text-xl text-muted-foreground mb-2">
                El mejor regalo es elegir un futuro que te libere
              </p>
              
              <div className="inline-block bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
                <p className="text-sm font-medium">
                  ¿Primera vez invirtiendo? <br/>
                  <span className="text-muted-foreground">No te preocupes, te guiaremos paso a paso y tendrás acceso a contenido educativo personalizado.</span>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {investmentOptions.map((option, index) => {
                const Icon = option.icon;
                const isSelected = selectedOption === index;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedOption(index)}
                    className={`p-6 rounded-2xl bg-card shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 text-left card-reveal border-2 ${
                      isSelected ? "border-primary" : "border-transparent"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        option.risk === "Muy Bajo" ? "bg-green-100 text-green-700" :
                        option.risk === "Bajo" ? "bg-blue-100 text-blue-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                        Riesgo {option.risk}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground mb-3">{option.description}</p>
                    <p className="text-sm font-semibold text-primary">{option.returns}</p>
                  </button>
                );
              })}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                variant="skandia"
                onClick={() => setStep("form")}
                disabled={selectedOption === null}
              >
                {selectedOption !== null ? "Agendar asesoría para iniciar" : "Selecciona una opción"}
              </Button>
            </div>
          </div>
        )}

        {step === "form" && selectedOption !== null && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {selectedOption === 0 ? "Inicia tu primera inversión con un experto" :
                 selectedOption === 1 ? "Inicia tu fondo de emergencia con un experto" :
                 selectedOption === 2 ? "Inicia tu protección familiar con un experto" :
                 "Inicia tu portafolio de inversión con un experto"}
              </h2>
              <p className="text-xl text-muted-foreground">
                Agenda una cita personalizada con uno de nuestros asesores financieros especializados. Te guiaremos paso a paso para maximizar tu inversión.
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Left side - Why schedule */}
              <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">⭐</span>
                  <h3 className="text-xl font-bold">¿Por qué agendar una cita?</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Estrategia Personalizada</h4>
                      <p className="text-sm text-muted-foreground">Análisis de tu perfil y objetivos específicos</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Maximiza tu Rentabilidad</h4>
                      <p className="text-sm text-muted-foreground">Estrategias probadas para optimizar tus inversiones</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Gestión de Riesgos</h4>
                      <p className="text-sm text-muted-foreground">Aprende a proteger y hacer crecer tu dinero</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Agenda tu Cita Gratuita</h3>
                  <p className="text-sm text-muted-foreground">Completa la información y selecciona tu horario preferido</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+57 300 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="document">Documento de identidad *</Label>
                    <Input
                      id="document"
                      placeholder="Número de documento"
                      value={formData.document}
                      onChange={(e) => setFormData(prev => ({ ...prev, document: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label className="mb-3 block">Tipo de reunión *</Label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-accent/5 transition-colors">
                        <input type="radio" name="meetingType" value="virtual" className="text-primary" defaultChecked />
                        <div className="flex items-center gap-2">
                          <span className="text-primary">📹</span>
                          <div>
                            <div className="font-medium">Videollamada</div>
                            <div className="text-xs text-muted-foreground">Reunión virtual por Google Meet</div>
                          </div>
                        </div>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-accent/5 transition-colors">
                        <input type="radio" name="meetingType" value="phone" className="text-primary" />
                        <div className="flex items-center gap-2">
                          <span className="text-primary">📞</span>
                          <div>
                            <div className="font-medium">Llamada telefónica</div>
                            <div className="text-xs text-muted-foreground">Llamada directa a tu teléfono</div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-800">
                      <strong>✓ Consulta gratuita:</strong> Esta primera asesoría es completamente gratuita y sin compromiso.
                    </p>
                  </div>

                  <Button 
                    size="lg"
                    variant="skandia"
                    className="w-full"
                    onClick={handleActivate}
                  >
                    Confirmar activación
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivateGift;
