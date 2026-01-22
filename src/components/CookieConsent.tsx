import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X, Cookie, Settings } from "lucide-react";
import { Link } from "react-router-dom";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Alltid aktiverad
    functional: false,
    analytics: false,
  });

  useEffect(() => {
    // Ladda sparade preferenser
    const savedConsent = localStorage.getItem("cookieConsent");
    const savedPreferences = localStorage.getItem("cookiePreferences");
    
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
      } catch (e) {
        console.error("Error parsing cookie preferences", e);
      }
    }

    // Visa banner om användaren inte har valt
    if (!savedConsent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
    };
    savePreferences(allAccepted, "accepted");
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
    };
    savePreferences(onlyNecessary, "rejected");
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences, "custom");
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = (prefs: CookiePreferences, consentType: string) => {
    localStorage.setItem("cookieConsent", consentType);
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    
    // Blockera eller tillåt cookies baserat på preferenser
    applyCookiePreferences(prefs);
  };

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Här kan du lägga till logik för att blockera/tillåta cookies
    // T.ex. Google Analytics, Facebook Pixel, etc.
    if (!prefs.analytics) {
      // Blockera analytiska cookies
      // window.gtag = function() {};
    }
    if (!prefs.functional) {
      // Blockera funktionella cookies
    }
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
    setShowBanner(false);
  };

  const handleClose = () => {
    // Om användaren stänger utan att välja, behandla som avvisat
    if (!localStorage.getItem("cookieConsent")) {
      handleRejectAll();
    } else {
      setShowBanner(false);
      setShowSettings(false);
    }
  };

  // Visa "Cookie-inställningar" knapp om användaren redan har valt
  const hasConsented = localStorage.getItem("cookieConsent");

  return (
    <>
      {/* Cookie Settings Button - visas alltid om användaren har valt */}
      {hasConsented && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={handleOpenSettings}
          className="fixed bottom-4 right-4 z-40 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Cookie-inställningar"
          title="Cookie-inställningar"
        >
          <Cookie className="w-6 h-6 text-primary-foreground" />
        </motion.button>
      )}

      <AnimatePresence>
        {/* Cookie Banner */}
        {showBanner && !showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="container mx-auto max-w-4xl">
              <div className="bg-card border border-border/50 rounded-2xl shadow-2xl p-6 md:p-8 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Stäng"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold mb-2">
                      Vi använder cookies
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                      Vi använder cookies för att förbättra din upplevelse på vår webbplats. 
                      Nödvändiga cookies är alltid aktiverade. Du kan välja att acceptera eller 
                      avvisa övriga cookies.
                      <Link 
                        to="/cookie-policy" 
                        className="text-primary hover:underline ml-1"
                      >
                        Läs mer om cookies
                      </Link>
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleOpenSettings}
                      className="flex-1 sm:flex-none"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Inställningar
                    </Button>
                    <Button
                      variant="hero"
                      size="sm"
                      onClick={handleAcceptAll}
                      className="flex-1 sm:flex-none"
                    >
                      Acceptera alla
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleRejectAll}
                      className="flex-1 sm:flex-none"
                    >
                      Avvisa
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Cookie Settings Modal */}
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border/50 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-2xl font-bold">Cookie-inställningar</h2>
                  <button
                    onClick={handleClose}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Stäng"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-muted-foreground mb-6">
                  Välj vilka typer av cookies du vill tillåta. Nödvändiga cookies krävs för att 
                  webbplatsen ska fungera och kan inte inaktiveras.
                  <Link 
                    to="/cookie-policy" 
                    className="text-primary hover:underline ml-1"
                  >
                    Läs mer om cookies
                  </Link>
                </p>

                <div className="space-y-6 mb-8">
                  {/* Nödvändiga cookies */}
                  <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-card/50 border border-border/30">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-display font-semibold">Nödvändiga cookies</h3>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Alltid aktiverade</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt. 
                        De kan inte inaktiveras.
                      </p>
                    </div>
                    <Switch checked={true} disabled />
                  </div>

                  {/* Funktionella cookies */}
                  <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-card/50 border border-border/30">
                    <div className="flex-1">
                      <h3 className="font-display font-semibold mb-2">Funktionella cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Dessa cookies gör det möjligt för webbplatsen att erbjuda förbättrad funktionalitet 
                        och personalisering, som att komma ihåg dina inställningar.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.functional}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, functional: checked })
                      }
                    />
                  </div>

                  {/* Analytiska cookies */}
                  <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-card/50 border border-border/30">
                    <div className="flex-1">
                      <h3 className="font-display font-semibold mb-2">Analytiska cookies</h3>
                      <p className="text-sm text-muted-foreground">
                        Dessa cookies hjälper oss att förstå hur besökare använder webbplatsen genom att 
                        samla in och rapportera information anonymt.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, analytics: checked })
                      }
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={handleClose}
                  >
                    Avbryt
                  </Button>
                  <Button
                    variant="hero"
                    onClick={handleSavePreferences}
                  >
                    Spara inställningar
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
