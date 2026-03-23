import { Routes, Route } from "react-router-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import CookieConsent from "./CookieConsent";
import Index from "../pages/Index";
import Prislista from "../pages/Prislista";
import Integritetspolicy from "../pages/Integritetspolicy";
import Anvandarvillkor from "../pages/Anvandarvillkor";
import CookiePolicy from "../pages/CookiePolicy";
import NotFound from "../pages/NotFound";

const Router = () => {
  const isProduction = import.meta.env.PROD;
  const RouterComponent = isProduction ? HashRouter : BrowserRouter;
  const routerProps = isProduction ? {} : { basename: import.meta.env.BASE_URL };

  return (
    <RouterComponent {...routerProps}>
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
    </RouterComponent>
  );
};

export default Router;
