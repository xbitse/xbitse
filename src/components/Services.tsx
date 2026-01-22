import { Monitor, Smartphone, Wifi, Tv, Calculator, Receipt, Wrench, Home, Clock } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Datorhjälp",
    description: "Installation, felsökning och reparation av datorer. Vi hjälper dig med allt från uppstart till komponentbyten.",
  },
  {
    icon: Smartphone,
    title: "Telefon & Surfplatta",
    description: "Support för smartphones och surfplattor. Installation av appar, flytt av data och felsökning.",
  },
  {
    icon: Wifi,
    title: "Internet & Nätverk",
    description: "Hjälp med bredband, WiFi-optimering, nätverksinstallation och felsökning av anslutningsproblem.",
  },
  {
    icon: Tv,
    title: "TV & Streaming",
    description: "Installation och inställning av TV, byte av operatör, Smart-TV appar och streamingjtänster.",
  },
  {
    icon: Wrench,
    title: "Hembesök & RUT",
    description: "Vi kommer hem till dig! Med RUT-avdrag sparar du 50% på arbetskostnaden för IT-support i hemmet.",
  },
  {
    icon: Home,
    title: "Företagsupport",
    description: "IT-support för företag med snabb respons. Drift, underhåll och problemlösning för er verksamhet.",
  },
];

const financeServices = [
  {
    icon: Receipt,
    title: "Fakturering",
    description: "Personlig hjälp med fakturering och administration för småföretag och egenföretagare.",
  },
  {
    icon: Calculator,
    title: "Ekonomitjänster",
    description: "Lönehantering och skattedeklaration. Vi hjälper dig hålla ordning på ekonomin.",
  },
  {
    icon: Clock,
    title: "Support per timme",
    description: "Är ni i behov av extra ekonomihjälp vid semester eller ledighet? Vi hjälper er med ekonomisupport per timme när ni behöver det mest.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-logo-blue font-medium text-sm tracking-wider uppercase">
            Våra tjänster
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            IT-support för{" "}
            <span className="text-gradient">privatpersoner & företag</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Över 30 års erfarenhet inom IT-branschen. Vi erbjuder trygg och professionell 
            service med fasta priser – inga dolda kostnader.
          </p>
        </div>

        {/* IT Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-logo-blue/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:glow-primary transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Finance Services */}
        <div id="ekonomitjanster" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-logo-blue font-medium text-sm tracking-wider uppercase">
            Ekonomitjänster
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">
            Administration & <span className="text-gradient">Bokföring</span>
          </h3>
          <p className="text-muted-foreground">
            Behöver du hjälp med företagsadministration? Vi erbjuder personlig service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {financeServices.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:glow-primary transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;