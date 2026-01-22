import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Clock } from "lucide-react";
import BookingDialog from "./BookingDialog";

const CTA = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute inset-0 glass" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 py-20 px-8 md:px-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Behöver du{" "}
              <span className="text-gradient">IT-hjälp?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Ring oss eller boka online. Vi finns tillgängliga alla dagar 08.00-22.00, 
              även kvällar och helger för jour-ärenden.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button variant="hero" size="xl" onClick={() => setIsBookingOpen(true)}>
                Boka IT-support
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto pt-8 border-t border-border/30">
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">E-post</span>
                <span className="font-medium">info@xbit.se</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Öppettider</span>
                <span className="font-medium">08.00 - 22.00</span>
                <span className="text-xs text-muted-foreground">Jour: Mån-Fre 18.00-22.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </section>
  );
};

export default CTA;