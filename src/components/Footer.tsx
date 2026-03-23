import { Mail, Phone } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.hash === "#/";

  const handleHashLink = (hash: string) => {
    if (!isHomePage) {
      window.location.href = `#${hash}`;
    }
  };

  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo />
            <p className="text-muted-foreground mt-4 max-w-md">
              Teknik & IT-Support för både företag och privatpersoner. 
              Över 30 års erfarenhet inom IT-branschen. Säker och professionell 
              service med RUT-avdrag för privatpersoner.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={isHomePage ? "#services" : "#services"} 
                  onClick={() => handleHashLink("#services")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  IT-Support Privat
                </a>
              </li>
              <li>
                <a 
                  href={isHomePage ? "#services" : "#services"} 
                  onClick={() => handleHashLink("#services")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Företagssupport
                </a>
              </li>
              <li>
                <a 
                  href={isHomePage ? "#rut" : "#rut"} 
                  onClick={() => handleHashLink("#rut")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  RUT-avdrag
                </a>
              </li>
              <li>
                <a 
                  href={isHomePage ? "#ekonomitjanster" : "#ekonomitjanster"} 
                  onClick={() => handleHashLink("#ekonomitjanster")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Ekonomitjänster
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:010-1488777" className="hover:text-foreground transition-colors">
                  010 - 14 88 777
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@xbit.se" className="hover:text-foreground transition-colors">
                  info@xbit.se
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Öppettider</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Mån-Fre:</strong> 08.00-22.00
              </li>
              <li>
                <strong className="text-foreground">Lör-Sön:</strong> 08.00-22.00
              </li>
              <li className="text-xs text-muted-foreground mt-3">
                <strong className="text-foreground">Jour:</strong> Mån-Fre 18.00-22.00
              </li>
            </ul>
          </div>
        </div>

        {/* Payment & Legal */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Betalning:</strong> Swish: 1233354818 | Bankgiro: 5713-0296
            </div>
            <div className="text-sm text-muted-foreground">
              Org.nr: 559329-9257 | Registrerad för F-skatt
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} XBIT - Teknik & IT-Support AB. Alla rättigheter förbehållna.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link to="/integritetspolicy" className="hover:text-foreground transition-colors">
                Integritetspolicy
              </Link>
              <Link to="/anvandarvillkor" className="hover:text-foreground transition-colors">
                Villkor
              </Link>
              <Link to="/cookie-policy" className="hover:text-foreground transition-colors">
                Cookie-policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;