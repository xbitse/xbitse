import { Shield, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "30+ års erfarenhet",
    description: "Mångårig expertis inom IT-support och teknik för både privatpersoner och företag.",
  },
  {
    icon: Shield,
    title: "Trygg & Säker",
    description: "Registrerad för F-skatt med fullständig försäkring. Din säkerhet är vår prioritet.",
  },
  {
    icon: Clock,
    title: "Tillgängliga 08.00-22.00",
    description: "Vi finns här när du behöver oss – alla dagar i veckan. Jour: Mån-Fre 18.00-22.00.",
  },
  {
    icon: Users,
    title: "Personlig Service",
    description: "Vi kommer hem till dig och ger personlig, skräddarsydd hjälp med fasta priser.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-logo-blue font-medium text-sm tracking-wider uppercase">
            Om XBit
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Din lokala <span className="text-gradient">IT-partner</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            XBIT - Teknik & IT-Support AB är ett svenskt företag med över 30 års samlad 
            erfarenhet inom IT-branschen. Vi erbjuder trygg och professionell service 
            direkt hemma hos dig eller på ditt företag.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const backgrounds = [
              "bg-blue-50/80 dark:bg-blue-950/20",
              "bg-purple-50/80 dark:bg-purple-950/20", 
              "bg-orange-50/80 dark:bg-orange-950/20",
              "bg-green-50/80 dark:bg-green-950/20"
            ];
            
            return (
              <div
                key={feature.title}
                className={`group p-8 rounded-2xl ${backgrounds[index % backgrounds.length]} border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 text-center relative overflow-hidden shadow-sm hover:shadow-lg`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-black/20" />
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 mx-auto group-hover:glow-primary transition-all duration-300 relative z-10">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;