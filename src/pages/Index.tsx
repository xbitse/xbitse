import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy load heavy components for better code splitting
const Services = lazy(() => import("@/components/Services"));
const RutInfo = lazy(() => import("@/components/RutInfo"));
const About = lazy(() => import("@/components/About"));
const CTA = lazy(() => import("@/components/CTA"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Testimonials = lazy(() => import("@/components/TestimonialsGoogle"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Hoppa till huvudinnehåll
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<div className="h-96" />}>
        <Services />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
        <RutInfo />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
        <About />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
        <CTA />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
        <FAQ />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
        <Testimonials />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;