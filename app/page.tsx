import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import QuoteBanner from "@/components/QuoteBanner";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.twobearsrenovation.cz/#business",
      name: "Two Bears Renovation s.r.o.",
      url: "https://www.twobearsrenovation.cz",
      telephone: "+420776219323",
      email: "info@twobearsrenovation.cz",
      identifier: "23684038",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mokropeská č.ev. 574",
        addressLocality: "Černošice",
        postalCode: "252 28",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 50.0755,
          longitude: 14.4378,
        },
        geoRadius: "100000",
      },
      description:
        "Kompletní rekonstrukce, fasády, terasy a stavební realizace v Praze a okolí do 100 km.",
      priceRange: "$$",
      image: "https://www.twobearsrenovation.cz/photos/praha-stodulky-a/1.jpeg",
    },
    {
      "@type": "Organization",
      "@id": "https://www.twobearsrenovation.cz/#organization",
      name: "Two Bears Renovation s.r.o.",
      url: "https://www.twobearsrenovation.cz",
      logo: {
        "@type": "ImageObject",
        url: "https://www.twobearsrenovation.cz/logo-dark.svg",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+420776219323",
        email: "info@twobearsrenovation.cz",
        contactType: "customer service",
        areaServed: "CZ",
        availableLanguage: ["Czech", "Ukrainian", "English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.twobearsrenovation.cz/#website",
      name: "Two Bears Renovation",
      url: "https://www.twobearsrenovation.cz",
      publisher: {
        "@id": "https://www.twobearsrenovation.cz/#organization",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <QuoteBanner />
        <Portfolio />
        <Process />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
