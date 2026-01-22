import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Cookie-policy
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              Senast uppdaterad: {new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">1. Vad är cookies?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies är små textfiler som lagras på din enhet (dator, telefon eller surfplatta) när du 
                besöker en webbplats. Cookies används för att webbplatsen ska fungera korrekt och för att 
                förbättra din användarupplevelse.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">2. Hur använder vi cookies?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                XBIT - Teknik & IT-Support AB använder cookies för följande ändamål:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong className="text-foreground">Nödvändiga cookies:</strong> För att webbplatsen ska fungera korrekt</li>
                <li><strong className="text-foreground">Funktionella cookies:</strong> För att komma ihåg dina inställningar och preferenser</li>
                <li><strong className="text-foreground">Analytiska cookies:</strong> För att förstå hur besökare använder webbplatsen och förbättra den</li>
                <li><strong className="text-foreground">Säkerhetscookies:</strong> För att skydda mot bedrägerier och säkerställa säkerheten</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">3. Typer av cookies vi använder</h2>
              
              <div className="bg-card/50 border border-border/50 rounded-lg p-6 mb-6">
                <h3 className="font-display text-xl font-semibold mb-4">Nödvändiga cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dessa cookies är nödvändiga för att webbplatsen ska fungera. De kan inte stängas av i våra system.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Session cookies för att hålla koll på din aktivitet under besöket</li>
                  <li>Säkerhetscookies för att skydda mot obehörig åtkomst</li>
                </ul>
              </div>

              <div className="bg-card/50 border border-border/50 rounded-lg p-6 mb-6">
                <h3 className="font-display text-xl font-semibold mb-4">Funktionella cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dessa cookies gör det möjligt för webbplatsen att erbjuda förbättrad funktionalitet och personalisering.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Cookies som kommer ihåg dina språk- och regioninställningar</li>
                  <li>Cookies som sparar dina preferenser för webbplatsens utseende</li>
                </ul>
              </div>

              <div className="bg-card/50 border border-border/50 rounded-lg p-6 mb-6">
                <h3 className="font-display text-xl font-semibold mb-4">Analytiska cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla 
                  in och rapportera information anonymt.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Cookies som räknar besökare och spår vilka sidor som besöks</li>
                  <li>Cookies som hjälper oss att förbättra webbplatsens prestanda</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">4. Tredjepartscookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi kan använda tjänster från tredje part som också använder cookies. Dessa inkluderar:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong className="text-foreground">Google reCAPTCHA:</strong> För att skydda webbplatsen mot spam och missbruk</li>
                <li><strong className="text-foreground">Analysverktyg:</strong> För att analysera webbplatsens användning (om tillämpligt)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Dessa tredjepartscookies regleras av respektive tredjeparts integritetspolicy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">5. Hantera cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Du kan hantera och kontrollera cookies på flera sätt:
              </p>
              
              <div className="bg-card/50 border border-border/50 rounded-lg p-6 mb-4">
                <h3 className="font-display text-xl font-semibold mb-4">Via din webbläsare</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De flesta webbläsare tillåter dig att:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Se vilka cookies du har och ta bort dem</li>
                  <li>Blockera cookies från specifika webbplatser</li>
                  <li>Blockera alla cookies från tredje part</li>
                  <li>Radera alla cookies när du stänger webbläsaren</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Observera att om du blockerar cookies kan vissa delar av webbplatsen inte fungera korrekt.
                </p>
              </div>

              <div className="bg-card/50 border border-border/50 rounded-lg p-6">
                <h3 className="font-display text-xl font-semibold mb-4">Instruktioner för vanliga webbläsare</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Chrome:</strong> Inställningar → Sekretess och säkerhet → Cookies</li>
                  <li><strong className="text-foreground">Firefox:</strong> Inställningar → Sekretess och säkerhet → Cookies och webbplatsdata</li>
                  <li><strong className="text-foreground">Safari:</strong> Inställningar → Sekretess → Hantera webbplatsdata</li>
                  <li><strong className="text-foreground">Edge:</strong> Inställningar → Cookies och webbplatsbehörigheter</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">6. Lagringstid för cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies kan vara antingen session cookies eller permanenta cookies:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong className="text-foreground">Session cookies:</strong> Raderas automatiskt när du stänger webbläsaren</li>
                <li><strong className="text-foreground">Permanenta cookies:</strong> Förblir på din enhet tills de antingen upphör att gälla eller raderas manuellt</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Lagringstiden varierar beroende på typ av cookie, men är vanligtvis mellan några minuter och upp till två år.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">7. Dina rättigheter</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Du har rätt att:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Få information om vilka cookies som används</li>
                <li>Välja att acceptera eller avvisa cookies (utom nödvändiga cookies)</li>
                <li>Ta bort cookies från din enhet när som helst</li>
                <li>Konfigurera din webbläsare för att blockera cookies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">8. Ändringar av cookie policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi kan komma att uppdatera denna cookie policy från tid till annan för att återspegla ändringar 
                i vår praxis eller av andra operativa, juridiska eller regulatoriska skäl. Vi meddelar dig om 
                väsentliga ändringar genom att publicera den nya policyn på denna sida med uppdaterat datum.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">9. Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Om du har frågor om vår användning av cookies eller denna cookie policy, kontakta oss:
              </p>
              <div className="bg-card/50 border border-border/50 rounded-lg p-6 mt-4">
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">E-post:</strong> <a href="mailto:info@xbit.se" className="text-primary hover:underline">info@xbit.se</a>
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Telefon:</strong> 010 - 14 88 777
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Företag:</strong> XBIT - Teknik & IT-Support AB
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">10. Ytterligare information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                För mer information om hur vi behandlar dina personuppgifter, se vår 
                <a href="/integritetspolicy" className="text-primary hover:underline ml-1">Integritetspolicy</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CookiePolicy;
