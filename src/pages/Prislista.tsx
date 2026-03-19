import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Phone, Monitor, Smartphone, Wifi, Printer, Tv, Calculator, Receipt, ArrowRight } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";
import { useState } from "react";

const Prislista = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const privatTjanster = [
    {
      icon: Monitor,
      title: "Datorstäd",
      description: "Vi kommer hem till dig och trimmar samt städar din dator för optimal prestanda.",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
    {
      icon: Monitor,
      title: "Felsökning",
      description: "Kontroll av trådlöst nätverk, dator, TV, telefon med mera. Vi bedömer om befintlig utrustning är i gott skick eller behöver bytas ut.",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
    {
      icon: Wifi,
      title: "Router",
      description: "Grundinstallation, uppdatering av mjukvara och kryptering av WiFi-nätverk. Upp till 2 enheter ingår (ytterligare enheter debiteras per timme).",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
    {
      icon: Printer,
      title: "Skrivare",
      description: "Grundinstallation och anslutning till nätverk eller dator. Installation på upp till 3 enheter samt provutskrift ingår.",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
    {
      icon: Monitor,
      title: "Datorbyte",
      description: "Grundinställning, skapande av användarprofil, anslutning till nätverk/WiFi, flytt av filer samt installation av skrivare och e-post.",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
    {
      icon: Smartphone,
      title: "Byte av telefon/surfplatta",
      description: "Vi hjälper dig flytta över filer och bilder till din nya surfplatta eller telefon. Kostnaden varierar beroende på förutsättningarna.",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
    {
      icon: Monitor,
      title: "Ominstallation",
      description: "Ren installation av Windows, installation av nödvändiga program samt säkerhetskopiering och återkopiering av bilder och dokument.",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
    {
      icon: Monitor,
      title: "Fjärrsupport",
      description: "Vi ansluter till din dator via fjärrstyrning för att felsöka och lösa problem direkt, ofta med stöd via telefon eller chatt.",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
    {
      icon: Tv,
      title: "TV på bänk",
      description: "Uppackning, montering på TV-bänk, inkoppling av digitalbox, kanalsökning samt inkoppling av Smart-TV.",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
    {
      icon: Tv,
      title: "TV på vägg",
      description: "Uppackning, montering av TV på vägg, inkoppling av digitalbox, kanalsökning samt inkoppling av Smart-TV. Väggfäste ingår ej.",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
    {
      icon: Tv,
      title: "Digitalbox",
      description: "Inkoppling av digitalbox och kanalsökning.",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
    {
      icon: Smartphone,
      title: "Bank-ID",
      description: "Vi hjälper dig att ställa in BankID på din dator och mobil.",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
    {
      icon: Smartphone,
      title: "Swish",
      description: "Vi hjälper dig att ställa in Swish på din dator och mobil.",
      price: "1 295 kr",
      priceAfterRut: "648 kr*",
    },
  ];

  const foretagTjanster = [
    {
      icon: Monitor,
      title: "IT-Support",
      description: "Support för mobiltelefoner, surfplattor, datorer, nätverk/WiFi, skrivare, lagring, säkerhetskopiering, underhåll av utrustning, Microsoft Office 365 samt rådgivning och konsultation.",
    },
    {
      icon: Calculator,
      title: "Ekonomitjänster",
      description: "Fakturering, lönehantering, löpande bokföring, betalningar, redovisning samt skattedeklaration.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Prislista
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
                Våra <span className="text-gradient">priser</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transparenta priser för alla våra tjänster. För privatpersoner gäller RUT-avdrag på 50% av arbetskostnaden.
              </p>
              <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground max-w-2xl mx-auto">
                <p className="mb-2">
                  <strong className="text-foreground">Resor</strong> debiteras med timkostnad och milersättning utanför Östhammars tätort och Uppsalas tätort.
                </p>
                <p>
                  <strong className="text-foreground">* – Priser efter RUT-avdrag</strong> (50% avdrag på arbetskostnaden)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privatpersoner */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Privatpersoner
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                Tjänster för <span className="text-gradient">Privatpersoner</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Alla priser inkluderar RUT-avdrag. Du betalar bara 50% av arbetskostnaden direkt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {privatTjanster.map((tjanst, index) => {
                const Icon = tjanst.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">
                      {tjanst.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                      {tjanst.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border/30">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-display font-bold text-gradient">
                          {tjanst.priceAfterRut}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {tjanst.price}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">
                        * Efter RUT-avdrag
                      </p>
                      <Button
                        variant="hero"
                        size="sm"
                        className="w-full"
                        onClick={() => setIsBookingOpen(true)}
                      >
                        Boka tid
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <a
                href="https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete.4.2e56d4ba1202f95012080002966.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Läs mer om RUT-avdrag på Skatteverket
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Företag */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                Företag
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                Tjänster för <span className="text-gradient">Företag</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Från datasupport till ekonomitjänster. Kontakta oss för en skräddarsydd offert.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {foretagTjanster.map((tjanst, index) => {
                const Icon = tjanst.icon;
                return (
                  <div
                    key={index}
                    className="group p-8 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:glow-primary transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-4">
                      {tjanst.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {tjanst.description}
                    </p>
                    <div className="mt-auto">
                      <Button
                        variant="hero"
                        size="default"
                        className="w-full"
                        onClick={() => setIsBookingOpen(true)}
                      >
                        Kontakta oss för offert
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-10" />
              <div className="absolute inset-0 glass" />
              <div className="relative z-10 py-16 px-8 md:px-16 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Har du frågor om våra priser?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Ring oss på 010 - 14 88 777 eller boka en tid så hjälper vi dig hitta rätt lösning.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="hero" size="xl" onClick={() => setIsBookingOpen(true)}>
                    Boka IT-support
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="heroOutline" size="xl" asChild>
                    <a href="tel:010-1488777">
                      <Phone className="w-5 h-5" />
                      010 - 14 88 777
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
};

export default Prislista;
