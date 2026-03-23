import { Star, Quote, MapPin, Calendar } from "lucide-react";

const testimonials = [
  {
    name: "Anna Johansson",
    company: "Johansson Konsult AB",
    text: "XBit löste vårt nätverksproblem på rekordtid. Teknikern var professionell, snabb och förklarade allt på ett sätt vi förstod. Vi kommer absolut att anlita dem igen!",
    rating: 5,
    service: "Nätverksproblem",
    location: "Uppsala",
    date: "2026-02"
  },
  {
    name: "Erik Lindberg", 
    company: "Lindberg Bygg",
    text: "Behövde hjälp med vår nya serverinstallation. XBit kom i tid, gjorde allt professionellt och vi var igång samma dag. Kan varmt rekommendera deras tjänster.",
    rating: 5,
    service: "Serverinstallation",
    location: "Stockholm",
    date: "2026-01"
  },
  {
    name: "Maria Svensson",
    company: "Privatperson",
    text: "Min dator hade kraschat och jag var orolig för alla mina filer. XBit fixade den snabbt och säkerställde allt dessutom. Priset var också väldigt rimligt!",
    rating: 4,
    service: "Datorreparation",
    location: "Västerås",
    date: "2026-03"
  },
  {
    name: "Per Karlsson",
    company: "Karlsson Transport",
    text: "Vi använde XBit för att sätta upp ett helt nytt kontorsnätverk. Allt fungerar perfekt och de gav oss bra råd om säkerhet. Kompetent och pålitlig service.",
    rating: 5,
    service: "Nätverksinstallation",
    location: "Göteborg",
    date: "2026-02"
  },
  {
    name: "Sofia Andersson",
    company: "Andersson Design",
    text: "Fick fantastisk hjälp med RUT-avdraget för min hemdator. XBit skötte allt pappersarbete och jag fick 50% rabatt direkt på fakturan. Smidigt och enkelt!",
    rating: 5,
    service: "Hemdatorssupport med RUT",
    location: "Malmö",
    date: "2026-03"
  },
  {
    name: "Lars Bergström",
    company: "Bergström Trading",
    text: "XBit hjälpte oss med en kritisk serverkrasch. De var på plats inom 2 timmar och löste problemet professionellt. Vår verksamhet kunde fortsätta utan avbrott.",
    rating: 5,
    service: "Akut support",
    location: "Örebro",
    date: "2026-02"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-muted/20">
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Kundomdömen
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Vad våra <span className="text-gradient">kunder säger</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Läs hur våra nöjda kunder upplever vår professionella IT-support och service över hela Sverige.
          </p>
        </div>

        {/* Static grid layout - better for SEO */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="group bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Header with rating */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{testimonial.location}</span>
                    <Calendar className="w-3 h-3 ml-2" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="relative border-l-4 border-primary/20 pl-6 text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonial.company}
                  </div>
                  <div className="text-sm text-primary font-medium mt-1">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
