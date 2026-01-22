import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import BookingDialog from "./BookingDialog";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Tjänster" },
    { href: "#rut", label: "RUT-avdrag" },
    { href: "/prislista", label: "Prislista" },
    { href: "#about", label: "Om oss" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-6"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="XBit - Gå till startsidan">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Huvudnavigation">
          {navLinks.map((link) => {
            const isHashLink = link.href.startsWith("#");
            
            if (isHashLink) {
              // Hash links - go to home page first if not already there
              const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!isHomePage) {
                  e.preventDefault();
                  window.location.href = `/${link.href}`;
                }
              };
              return (
                <a
                  key={link.href}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={handleClick}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              );
            } else {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </Link>
              );
            }
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="hero" size="default" onClick={() => setIsBookingOpen(true)}>
            Boka Support
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-lg p-6 animate-fade-in">
          <nav className="flex flex-col gap-4" role="navigation" aria-label="Mobilnavigation">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith("#");
              
              if (isHashLink) {
                const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  setIsMobileMenuOpen(false);
                  if (!isHomePage) {
                    e.preventDefault();
                    window.location.href = `/${link.href}`;
                  }
                };
                return (
                  <a
                    key={link.href}
                    href={isHomePage ? link.href : `/${link.href}`}
                    onClick={handleClick}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium"
                  >
                    {link.label}
                  </a>
                );
              } else {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              }
            })}
            <a 
              href="tel:010-1488777" 
              className="flex items-center gap-2 text-primary font-medium mt-2"
            >
              <Phone className="w-4 h-4" />
              010 - 14 88 777
            </a>
            <div className="flex items-center gap-3 mt-4">
              <ThemeToggle />
              <Button variant="hero" size="default" className="flex-1" onClick={() => {
                setIsBookingOpen(true);
                setIsMobileMenuOpen(false);
              }}>
                Boka Support
              </Button>
            </div>
          </nav>
        </div>
      )}

      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </header>
  );
};

export default Header;