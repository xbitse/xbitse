import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Anvandarvillkor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Användarvillkor
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              Senast uppdaterad: {new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">1. Allmänt</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dessa användarvillkor ("Villkor") gäller för användning av XBIT - Teknik & IT-Support AB:s 
                ("XBIT", "vi", "oss", "vår") webbplats och tjänster. Genom att använda vår webbplats eller 
                våra tjänster godkänner du dessa villkor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">2. Företagsinformation</h2>
              <div className="bg-card/50 border border-border/50 rounded-lg p-6 mt-4">
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Företag:</strong> XBIT - Teknik & IT-Support AB
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Organisationsnummer:</strong> 559329-9257
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">E-post:</strong> info@xbit.se
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Telefon:</strong> 010 - 14 88 777
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">3. Tjänster</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                XBIT erbjuder IT-supporttjänster för både privatpersoner och företag, inklusive:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Datorhjälp och reparation</li>
                <li>Support för telefoner och surfplattor</li>
                <li>Internet och nätverkssupport</li>
                <li>TV och streaming-installation</li>
                <li>Hembesök med RUT-avdrag</li>
                <li>Företagssupport</li>
                <li>Ekonomitjänster och fakturering</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">4. Beställningar och avtal</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                När du beställer en tjänst från oss ingår ett avtal mellan dig och XBIT. Avtalet träder 
                i kraft när vi bekräftar din beställning. Vi förbehåller oss rätten att vägra beställningar 
                av tekniska eller andra skäl.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">5. Priser och betalning</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Alla priser anges i svenska kronor (SEK) och inkluderar moms om inte annat anges. Vi förbehåller 
                oss rätten att ändra priser. Betalning sker enligt överenskommelse, vanligtvis via Swish eller 
                bankgiro. Vid försenad betalning kan ränta och påminnelseavgifter tillkomma.
              </p>
              <div className="bg-card/50 border border-border/50 rounded-lg p-6 mt-4">
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Swish:</strong> 1233354818
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Bankgiro:</strong> 5713-0296
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">6. RUT-avdrag</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                För privatpersoner gäller RUT-avdrag på 50% av arbetskostnaden för IT-support i hemmet. 
                Vi sköter allt pappersarbete kring RUT-avdraget. Mer information finns på 
                <a href="https://www.skatteverket.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Skatteverkets webbplats</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">7. Ångerrätt</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Enligt distansavtalslagen har du som konsument rätt att ångra ett avtal inom 14 dagar från 
                det att avtalet ingicks. Ångerrätten gäller dock inte för tjänster som fullständigt utförts 
                med ditt uttryckliga samtycke innan ångerfristen löpt ut.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">8. Ansvar och garantier</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi strävar efter att utföra våra tjänster professionellt och enligt god praxis. Vi ansvarar 
                för skador som orsakas av vår försummelse eller felaktig utförande, men vårt ansvar är begränsat 
                till direkta skador. Vi ansvarar inte för indirekta skador, förlorad vinst eller dataförluster 
                som inte orsakats av vår försummelse.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Vi rekommenderar att du säkerhetskopierar dina data innan vi utför arbeten på din utrustning.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">9. Intellektuell egendom</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Allt innehåll på vår webbplats, inklusive texter, bilder, logotyper och design, är skyddat 
                av upphovsrätt och tillhör XBIT eller våra licensgivare. Du får inte kopiera, modifiera eller 
                distribuera innehållet utan vårt skriftliga tillstånd.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">10. Användning av webbplatsen</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Du får använda vår webbplats endast för lagliga ändamål. Du får inte:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Använda webbplatsen på ett sätt som kan skada eller störa vår verksamhet</li>
                <li>Försöka få obehörig åtkomst till våra system</li>
                <li>Sprida skadlig programvara eller virus</li>
                <li>Kopiera eller modifiera innehållet utan tillstånd</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">11. Sekretess och datasäkerhet</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi behandlar all information konfidentiellt och i enlighet med gällande dataskyddslagstiftning. 
                För mer information om hur vi behandlar dina personuppgifter, se vår 
                <a href="/integritetspolicy" className="text-primary hover:underline ml-1">Integritetspolicy</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">12. Uppsägning</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi förbehåller oss rätten att avbryta eller vägra service om du inte följer dessa villkor, 
                eller om det finns tekniska eller säkerhetsmässiga skäl. Du har rätt att avbryta en beställning 
                enligt gällande konsumentskyddslagstiftning.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">13. Tvistlösning</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Om en tvist uppstår ska vi först försöka lösa den i godo. Om en lösning inte kan nås kan 
                tvisten tas upp hos Allmänna reklamationsnämnden (ARN) eller vid tingsrätt. Svensk lag 
                tillämpas på dessa villkor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">14. Ändringar av villkoren</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi förbehåller oss rätten att ändra dessa villkor när som helst. Väsentliga ändringar 
                meddelas på vår webbplats. Fortsatt användning av våra tjänster efter ändringar innebär 
                att du accepterar de nya villkoren.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">15. Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Om du har frågor om dessa användarvillkor, kontakta oss:
              </p>
              <div className="bg-card/50 border border-border/50 rounded-lg p-6 mt-4">
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">E-post:</strong> <a href="mailto:info@xbit.se" className="text-primary hover:underline">info@xbit.se</a>
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Telefon:</strong> 010 - 14 88 777
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Öppettider:</strong> Mån-Sön: 08.00-22.00
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Anvandarvillkor;
