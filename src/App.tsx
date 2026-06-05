import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsOfService from './pages/TermsOfService';

type PageType = 'home' | 'tos';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigateTo = (page: PageType, sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      if (sectionId) {
        // Give Vite/React a brief moment to switch tabs before attempting scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const yOffset = -80; // offset for sticky navbar height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-bg-dark text-gray-100 min-h-screen relative font-sans selection:bg-primary/30 selection:text-white">
      {/* Sticky header */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main viewport */}
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onOrderClick={() => navigateTo('home', 'contact')} />
            <Stats />
            <Services />
            <Features />
            <Testimonials />
            <HowItWorks />
            <Contact />
          </>
        ) : (
          <TermsOfService onBackToHome={() => navigateTo('home')} />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
