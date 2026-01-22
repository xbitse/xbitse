import { Check, Percent, Home, FileText, ExternalLink } from "lucide-react";

const benefits = [
  "Felsökning av datorer, telefoner och surfplattor",
  "Reparation och komponentbyten",
  "Installation av programvara och system",
  "Hjälp med internet och nätverk",
  "TV-installation och streaming-setup",
  "Flytt av data mellan enheter",
];

const RutInfo = () => {
  return (
    <section id="rut" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-logo-blue font-medium text-sm tracking-wider uppercase">
              RUT-avdrag
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Spara <span className="text-gradient">50%</span> på{" "}
              IT-support hemma
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Som privatperson kan du utnyttja RUT-avdraget och få 50% av arbetskostnaden 
              avdragen direkt på fakturan. Vi sköter allt pappersarbete åt dig.
            </p>
            
            <a
              href="https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete.4.2e56d4ba1202f95012080002966.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mb-8 group"
            >
              Läs mer om RUT-avdrag på Skatteverket
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-logo-blue/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-logo-blue" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Info Cards */}
          <div className="grid gap-6">
            <div className="p-8 rounded-2xl glass hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Percent className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">50% rabatt på arbetet</h3>
                  <p className="text-muted-foreground">
                    RUT-avdraget ger dig halva priset på arbetskostnaden för IT-support utförd i hemmet.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl glass hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Home className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Vi kommer hem till dig</h3>
                  <p className="text-muted-foreground">
                    Bekväm service i ditt eget hem. Vi tar med oss all utrustning som behövs.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl glass hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Vi fixar pappersarbetet</h3>
                  <p className="text-muted-foreground">
                    Vi ansöker om RUT-avdraget åt dig. Du betalar bara halva arbetskostnaden direkt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RutInfo;