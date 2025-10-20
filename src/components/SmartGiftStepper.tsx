import { cn } from "@/lib/utils";

interface SmartGiftStepperProps {
  currentStep: number; // 0-based index
}

const steps = [
  {
    emoji: "1️⃣",
    title: "Selecciona tu producto de inversión",
    description: "Elige el que mejor se adapte a tu objetivo.",
  },
  {
    emoji: "2️⃣",
    title: "Agenda tu asesoría personalizada",
    description: "Programa una cita para resolver tus dudas y definir tu inversión.",
  },
  {
    emoji: "3️⃣",
    title: "Activa tu inversión con tu asesor",
    description: "Completa el proceso con su acompañamiento.",
  },
  {
    emoji: "4️⃣",
    title: "Tu regalo se completa",
    description: "El remitente recibirá las instrucciones de pago.",
  },
];

const SmartGiftStepper = ({ currentStep }: SmartGiftStepperProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8">
      <h3 className="text-2xl font-bold text-center mb-8">
        Tus próximos pasos con Smart Gift
      </h3>
      
      <div className="space-y-6">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const isFuture = index > currentStep;
          
          return (
            <div
              key={index}
              className={cn(
                "flex gap-4 p-5 rounded-xl transition-all duration-300",
                isCompleted && "bg-primary/10 border-2 border-primary/30",
                isActive && "bg-secondary/20 border-2 border-secondary shadow-[var(--shadow-festive)]",
                isFuture && "bg-muted/30 border-2 border-transparent"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl transition-all duration-300",
                isCompleted && "bg-primary text-primary-foreground",
                isActive && "bg-secondary text-secondary-foreground",
                isFuture && "bg-muted text-muted-foreground"
              )}>
                {isCompleted ? "✓" : step.emoji}
              </div>
              
              <div className="flex-1">
                <h4 className={cn(
                  "font-bold text-lg mb-1 transition-colors",
                  isCompleted && "text-primary",
                  isActive && "text-foreground",
                  isFuture && "text-muted-foreground"
                )}>
                  {step.title}
                </h4>
                <p className={cn(
                  "text-sm transition-colors",
                  (isCompleted || isActive) && "text-muted-foreground",
                  isFuture && "text-muted-foreground/70"
                )}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmartGiftStepper;
