import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anna Johansson",
    company: "Johansson Konsult AB",
    text: "XBit löste vårt nätverksproblem på rekordtid. Teknikern var professionell, snabb och förklarade allt på ett sätt vi förstod. Vi kommer absolut att anlita dem igen!",
    rating: 5,
    service: "Nätverksproblem"
  },
  {
    name: "Erik Lindberg",
    company: "Lindberg Bygg",
    text: "Behövde hjälp med vår nya serverinstallation. XBit kom i tid, gjorde allt professionellt och vi var igång samma dag. Kan varmt rekommendera deras tjänster.",
    rating: 5,
    service: "Serverinstallation"
  },
  {
    name: "Maria Svensson",
    company: "Privatperson",
    text: "Min dator hade kraschat och jag var orolig för alla mina filer. XBit fixade den snabbt och säkerställde allt dessutom. Priset var också väldigt rimligt!",
    rating: 4,
    service: "Datorreparation"
  },
  {
    name: "Per Karlsson",
    company: "Karlsson Transport",
    text: "Vi använde XBit för att sätta upp ett helt nytt kontorsnätverk. Allt fungerar perfekt och de gav oss bra råd om säkerhet. Kompetent och pålitlig service.",
    rating: 5,
    service: "Nätverksinstallation"
  },
  {
    name: "Sofia Andersson",
    company: "Andersson Design",
    text: "Fick fantastisk hjälp med RUT-avdraget för min hemdator. XBit skötte allt pappersarbete och jag fick 50% rabatt direkt på fakturan. Smidigt och enkelt!",
    rating: 5,
    service: "Hemdatorssupport med RUT"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-logo-blue font-medium text-sm tracking-wider uppercase">
            Vad våra kunder säger
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Kund<span className="text-gradient">omdömen</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Läs vad våra nöjda kunder tycker om vår IT-support och service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Testimonial */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.company}
                </div>
                <div className="text-xs text-primary mt-1">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
