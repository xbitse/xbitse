import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anna Johansson",
    company: "Johansson Konsult AB",
    text: "XBit löste vårt nätverksproblem på rekordtid. Teknikern var professionell, snabb och förklarade allt på ett sätt vi förstod. Vi kommer absolut att anlita dem igen!",
    rating: 5,
    service: "Nätverksproblem",
    date: "2026-02-15"
  },
  {
    name: "Erik Lindberg", 
    company: "Lindberg Bygg",
    text: "Behövde hjälp med vår nya serverinstallation. XBit kom i tid, gjorde allt professionellt och vi var igång samma dag. Kan varmt rekommendera deras tjänster.",
    rating: 5,
    service: "Serverinstallation",
    date: "2026-01-28"
  },
  {
    name: "Maria Svensson",
    company: "Privatperson",
    text: "Min dator hade kraschat och jag var orolig för alla mina filer. XBit fixade den snabbt och säkerställde allt dessutom. Priset var också väldigt rimligt!",
    rating: 4,
    service: "Datorreparation",
    date: "2026-03-10"
  },
  {
    name: "Per Karlsson",
    company: "Karlsson Transport",
    text: "Vi använde XBit för att sätta upp ett helt nytt kontorsnätverk. Allt fungerar perfekt och de gav oss bra råd om säkerhet. Kompetent och pålitlig service.",
    rating: 5,
    service: "Nätverksinstallation",
    date: "2026-02-22"
  },
  {
    name: "Sofia Andersson",
    company: "Andersson Design",
    text: "Fick fantastisk hjälp med RUT-avdraget för min hemdator. XBit skötte allt pappersarbete och jag fick 50% rabatt direkt på fakturan. Smidigt och enkelt!",
    rating: 5,
    service: "Hemdatorssupport med RUT",
    date: "2026-03-05"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Kundomdömen
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Vad våra <span className="text-gradient">kunder säger</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Läs hur våra nöjda kunder upplever vår professionella IT-support och service.
          </p>
        </div>

        {/* Auto-scrolling container - wider cards, no scrollbar */}
        <div className="overflow-x-auto overflow-y-hidden pb-6">
          <div className="flex gap-8 min-w-max md:min-w-0 animate-scroll-slow">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="flex-shrink-0 w-96 bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Header with rating */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary"
                        />
                      ))}
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
      </div>
    </section>
  );
};

export default Testimonials;
