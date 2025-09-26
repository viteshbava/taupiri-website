import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import ArtistsSection from '@/components/ArtistsSection';
import StudioSection from '@/components/StudioSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-bone-white">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <ArtistsSection />
        <StudioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
