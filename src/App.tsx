import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ThemeProvider } from "next-themes";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";
import Prislista from "./pages/Prislista";
import Integritetspolicy from "./pages/Integritetspolicy";
import Anvandarvillkor from "./pages/Anvandarvillkor";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// reCAPTCHA Site Key - Ersätt med din egen från https://www.google.com/recaptcha/admin
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Test key från Google
const IS_TEST_KEY = RECAPTCHA_SITE_KEY === "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const IS_PRODUCTION = import.meta.env.PROD;

// Varning om test-nyckel används i produktion
if (IS_TEST_KEY && IS_PRODUCTION) {
  console.error("🚨 KRITISK SÄKERHETSVARNING: reCAPTCHA test-nyckel används i produktion!");
  console.error("🚨 Sätt miljövariabeln VITE_RECAPTCHA_SITE_KEY med en riktig nyckel från https://www.google.com/recaptcha/admin");
  console.error("🚨 Utan en riktig nyckel kommer reCAPTCHA inte att fungera korrekt i produktion!");
} else if (IS_TEST_KEY && !IS_PRODUCTION) {
  console.warn("⚠️ Utvecklingsläge: reCAPTCHA test-nyckel används. Kom ihåg att sätta VITE_RECAPTCHA_SITE_KEY i produktion.");
}

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      language="sv"
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <CookieConsent />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/prislista" element={<Prislista />} />
              <Route path="/integritetspolicy" element={<Integritetspolicy />} />
              <Route path="/anvandarvillkor" element={<Anvandarvillkor />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </GoogleReCaptchaProvider>
  </ThemeProvider>
);

export default App;
