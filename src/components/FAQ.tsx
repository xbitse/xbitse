import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Vad ingår i RUT-avdraget för IT-support?",
    answer: "RUT-avdraget ger dig 50% avdrag på arbetskostnaden för IT-support utförd i hemmet. Detta gäller för tjänster som felsökning, reparation, installation och konfiguration av datorer, telefoner, surfplattor, internet och TV. Material och komponenter ingår inte i avdraget, endast arbetskostnaden. Vi sköter allt pappersarbete åt dig så att avdraget dras direkt på fakturan.",
  },
  {
    question: "Hur lång tid tar det innan ni kommer?",
    answer: "Vi strävar efter att komma så snart som möjligt. För vanliga ärenden kan vi ofta komma samma dag eller dagen efter, beroende på vår beläggning. För akuta jour-ärenden kan vi ofta komma inom några timmar, men detta beror på om vi har tekniker tillgängliga. Ring oss på 010 - 14 88 777 så bokar vi en tid som passar dig.",
  },
  {
    question: "Vad kostar jour och när gäller jourpriser?",
    answer: "Jour kostar dubbelt så mycket jämfört med vanliga tider. Jour gäller måndag-fredag 18.00-22.00, samt helger och kvällar. Observera att jour-tjänster endast erbjuds om vi har tekniker tillgängliga. Ring oss för att kolla tillgänglighet och få en prisuppskattning innan vi bokar en jour-tid.",
  },
  {
    question: "Vad kostar en hemservice?",
    answer: "Priserna varierar beroende på vad som behöver göras. Vi har fasta priser och inga dolda kostnader. För privatpersoner med RUT-avdrag betalar du bara 50% av arbetskostnaden. Ring oss för en kostnadsfri offert eller beskriv ditt problem så ger vi dig en uppskattning innan vi börjar arbeta.",
  },
  {
    question: "Kan ni hjälpa både privatpersoner och företag?",
    answer: "Ja, vi hjälper både privatpersoner och företag. För privatpersoner erbjuder vi RUT-avdrag på hemservice. För företag erbjuder vi IT-support, drift, underhåll och problemlösning. Vi har över 30 års erfarenhet inom IT-branschen och kan hjälpa med allt från enkla felsökningar till mer komplexa IT-lösningar.",
  },
  {
    question: "Vilka områden täcker ni?",
    answer: "Vi är baserade i Sverige och kan komma hem till dig eller ditt företag. Vi täcker hela landet, men vår huvudsakliga verksamhet är i Stockholmsområdet och omnejd. Ring oss så berättar vi om vi kan komma till dig.",
  },
  {
    question: "Kan ni hjälpa med fjärrsupport?",
    answer: "Ja, vi erbjuder även fjärrsupport för många typer av problem. Om problemet kan lösas via fjärranslutning kan vi hjälpa dig direkt utan att behöva komma hem till dig. Detta är ofta snabbare och billigare. Ring oss så bedömer vi om ditt problem kan lösas via fjärrsupport.",
  },
  {
    question: "Vad händer om ni inte kan lösa problemet?",
    answer: "Om vi inte kan lösa problemet på plats tar vi ingen betalning för arbetet. Vi är ärliga om vad vi kan och inte kan hjälpa med. Om problemet kräver specialutrustning eller expertis som vi inte har, kan vi hjälpa dig hitta rätt lösning eller rekommendera andra specialister.",
  },
  {
    question: "Kan ni hjälpa med installation av ny utrustning?",
    answer: "Ja, vi hjälper gärna med installation av ny utrustning som datorer, telefoner, surfplattor, TV-apparater, nätverksutrustning och mer. Vi kan också hjälpa med konfiguration och installation av programvara. För privatpersoner gäller RUT-avdraget även på installationstjänster.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-32 relative overflow-hidden bg-[#004188] dark:bg-gradient-hero">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-logo-blue dark:text-logo-blue font-medium text-sm tracking-wider uppercase text-white">
            Vanliga frågor
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white dark:text-foreground">
            Frågor & <span className="text-gradient">Svar</span>
          </h2>
          <p className="text-muted-foreground text-lg text-white/90 dark:text-muted-foreground">
            Här svarar vi på de vanligaste frågorna om våra tjänster, RUT-avdrag och hur vi arbetar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-6 py-2 rounded-lg border border-white/20 hover:border-white/40 transition-all bg-white/10 dark:bg-background"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:no-underline text-white dark:text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-white/90 dark:text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
