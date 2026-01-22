import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BookingDialog from "./BookingDialog";
import { ServerAnimation } from "./ServerAnimation";

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-logo-blue/15 rounded-full blur-3xl animate-float" />
      </div>

      {/* Snow Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {Array.from({ length: 22 }).map((_, i) => {
          // Random position för varje snöflinga
          const randomLeft = Math.random() * 100;
          const randomTop = -50 - Math.random() * 50; // Starta mellan -50px och -100px (ovanför skärmen)
          const randomDelay = Math.random() * 2;
          const randomDuration = 24 + Math.random() * 9; // 24-33 sekunder
          const isLarge = [7, 15, 18, 20, 21].includes(i); // 5 stora snöflingor
          const largeSize = 2 + Math.random() * 2; // 2-4 gånger större
          const normalSize = 0.5 + Math.random() * 0.6; // 0.5-1.1em
          
          return (
            <div 
              key={i} 
              className="snowflake"
              style={{
                left: `${randomLeft}%`,
                top: `${randomTop}px`,
                animationDelay: `${randomDelay}s`,
                animationDuration: `${randomDuration}s`,
                fontSize: isLarge ? `${largeSize}em` : `${normalSize}em`,
                opacity: isLarge ? 0.5 : 0.3 + Math.random() * 0.15,
              }}
            >
              ❄
            </div>
          );
        })}
      </div>

      <div className="container mx-auto px-6 relative" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left pt-12 lg:pt-16">
            {/* Main Heading */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Teknik & IT-Support{" "}
              <span className="text-gradient">för alla</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Säker och professionell service direkt hemma hos dig eller på ditt företag. 
              Dator, telefon, surfplatta, internet och TV – vi hjälper dig med allt.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in mb-12" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl" onClick={() => setIsBookingOpen(true)}>
                Boka IT-support
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">30+</div>
                <div className="text-sm text-muted-foreground mt-1">Års erfarenhet</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">50%</div>
                <div className="text-sm text-muted-foreground mt-1">RUT-avdrag</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">08-22</div>
                <div className="text-sm text-muted-foreground mt-1">Öppet alla dagar</div>
                <div className="text-xs text-muted-foreground mt-0.5">Jour: Mån-Fre 18-22</div>
              </div>
            </div>
          </div>

          {/* Right side - Server Animation */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-full max-w-lg h-[500px]">
              <ServerAnimation />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </section>
  );
};

export default Hero;