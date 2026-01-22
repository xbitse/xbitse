import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Integritetspolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Integritetspolicy
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              Senast uppdaterad: {new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">1. Introduktion</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                XBIT - Teknik & IT-Support AB ("vi", "oss", "vår") respekterar din integritet och är 
                engagerade i att skydda dina personuppgifter. Denna integritetspolicy förklarar hur vi 
                samlar in, använder, delar och skyddar dina personuppgifter när du använder vår webbplats 
                eller våra tjänster.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">2. Personuppgiftsansvarig</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                XBIT - Teknik & IT-Support AB är personuppgiftsansvarig för behandlingen av dina 
                personuppgifter.
              </p>
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
              <h2 className="font-display text-2xl font-semibold mb-4">3. Vilka personuppgifter samlar vi in?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi samlar in följande typer av personuppgifter:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong className="text-foreground">Kontaktuppgifter:</strong> Namn, e-postadress, telefonnummer, adress</li>
                <li><strong className="text-foreground">Teknisk information:</strong> IP-adress, webbläsartyp, enhetsinformation</li>
                <li><strong className="text-foreground">Kommunikation:</strong> Meddelanden och korrespondens som du skickar till oss</li>
                <li><strong className="text-foreground">Bokningsinformation:</strong> Information relaterad till bokningar och tjänster</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">4. Hur använder vi dina personuppgifter?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi använder dina personuppgifter för följande ändamål:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>För att tillhandahålla och förbättra våra IT-supporttjänster</li>
                <li>För att hantera bokningar och beställningar</li>
                <li>För att kommunicera med dig angående våra tjänster</li>
                <li>För att följa lagkrav och förvaltningsförfaranden</li>
                <li>För att förbättra vår webbplats och användarupplevelse</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">5. Rättslig grund för behandling</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi behandlar dina personuppgifter baserat på följande rättsliga grunder:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong className="text-foreground">Uppfyllelse av avtal:</strong> För att kunna tillhandahålla våra tjänster</li>
                <li><strong className="text-foreground">Berättigat intresse:</strong> För att förbättra våra tjänster och webbplats</li>
                <li><strong className="text-foreground">Rättslig förpliktelse:</strong> För att följa lagkrav (t.ex. bokföringslagen)</li>
                <li><strong className="text-foreground">Samtycke:</strong> När du har gett ditt samtycke till behandling</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">6. Delning av personuppgifter</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi delar inte dina personuppgifter med tredje part utom i följande fall:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>När det krävs enligt lag eller myndighetsbeslut</li>
                <li>Med leverantörer som hjälper oss att driva vår verksamhet (t.ex. hosting, betalningstjänster)</li>
                <li>När du har gett ditt uttryckliga samtycke</li>
              </ul>
              
              <div className="bg-card/50 border border-border/50 rounded-lg p-6 mt-6">
                <h3 className="font-display text-lg font-semibold mb-3">Google reCAPTCHA</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Våra kontaktformulär är skyddade av Google reCAPTCHA för att förhindra spam och missbruk. 
                  När du använder våra formulär kan Google reCAPTCHA samla in och behandla vissa personuppgifter 
                  (t.ex. IP-adress, webbläsarinformation) för att verifiera att du är en människa och inte en bot.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Denna behandling sker enligt Googles integritetspolicy och användarvillkor. För mer information 
                  om hur Google behandlar personuppgifter, se{" "}
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Googles integritetspolicy
                  </a>{" "}
                  och{" "}
                  <a 
                    href="https://policies.google.com/terms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Googles användarvillkor
                  </a>.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Genom att använda våra formulär godkänner du att Google reCAPTCHA kan behandla dina personuppgifter 
                  enligt ovanstående.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">7. Dina rättigheter</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Enligt GDPR har du följande rättigheter:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong className="text-foreground">Rätt till information:</strong> Du har rätt att få information om hur vi behandlar dina personuppgifter</li>
                <li><strong className="text-foreground">Rätt till tillgång:</strong> Du har rätt att få en kopia av dina personuppgifter</li>
                <li><strong className="text-foreground">Rätt till rättelse:</strong> Du har rätt att få felaktiga personuppgifter rättade</li>
                <li><strong className="text-foreground">Rätt till radering:</strong> Du har rätt att begära radering av dina personuppgifter under vissa omständigheter</li>
                <li><strong className="text-foreground">Rätt till begränsning:</strong> Du har rätt att begära begränsning av behandlingen</li>
                <li><strong className="text-foreground">Rätt till dataportabilitet:</strong> Du har rätt att få dina personuppgifter i ett strukturerat format</li>
                <li><strong className="text-foreground">Rätt att invända:</strong> Du har rätt att invända mot behandling baserad på berättigat intresse</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                För att utöva dina rättigheter, kontakta oss på <a href="mailto:info@xbit.se" className="text-primary hover:underline">info@xbit.se</a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">8. Datasäkerhet</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter 
                mot obehörig åtkomst, förlust, förstörelse eller ändring. Vi använder säkra kommunikationsprotokoll 
                och begränsar åtkomsten till personuppgifter till endast behörig personal.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">9. Lagringstid</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi sparar dina personuppgifter så länge det är nödvändigt för att uppfylla de ändamål för 
                vilka de samlats in, eller så länge som krävs enligt lag. Bokföringsmaterial sparas enligt 
                bokföringslagens krav (7 år).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">10. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vår webbplats använder cookies för att förbättra användarupplevelsen. Du kan hantera dina 
                cookie-inställningar i din webbläsare. För mer information, se vår 
                <a href="/cookie-policy" className="text-primary hover:underline ml-1">Cookie-policy</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">11. Ändringar av integritetspolicyn</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vi kan komma att uppdatera denna integritetspolicy från tid till annan. Vi meddelar dig om 
                väsentliga ändringar genom att publicera den nya policyn på denna sida med uppdaterat datum.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">12. Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Om du har frågor om denna integritetspolicy eller hur vi behandlar dina personuppgifter, 
                kontakta oss:
              </p>
              <div className="bg-card/50 border border-border/50 rounded-lg p-6 mt-4">
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">E-post:</strong> <a href="mailto:info@xbit.se" className="text-primary hover:underline">info@xbit.se</a>
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Telefon:</strong> 010 - 14 88 777
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Postadress:</strong> XBIT - Teknik & IT-Support AB
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4">13. Klagomål</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Om du anser att vi har behandlat dina personuppgifter på ett sätt som strider mot GDPR, 
                har du rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY):
              </p>
              <div className="bg-card/50 border border-border/50 rounded-lg p-6 mt-4">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Integritetsskyddsmyndigheten (IMY)</strong><br />
                  Box 8114<br />
                  104 20 Stockholm<br />
                  <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.imy.se</a>
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

export default Integritetspolicy;
