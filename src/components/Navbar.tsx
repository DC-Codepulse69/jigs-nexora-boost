import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

import config from '../../config.json';

const sellAuthLink: string = config.sellAuthLink;

interface NavbarProps {
  currentPage: 'home' | 'tos';
  onNavigate: (page: 'home' | 'tos', sectionId?: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId?: string) => {
    setIsOpen(false);
    if (sectionId === 'tos') {
      onNavigate('tos');
    } else {
      onNavigate('home', sectionId);
    }
  };

  const navLinks = [
    { label: 'Home', sectionId: '' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Reviews', sectionId: 'reviews' },
    { label: 'TOS', sectionId: 'tos' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'py-4 glass-panel bg-opacity-70 border-b border-white/5 shadow-lg shadow-black/20'
        : 'py-6 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleLinkClick('')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="p-2 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Zap className="w-5 h-5 fill-white/10" />
            </div>
            <span className="font-extrabold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-primary/80 group-hover:text-primary transition-colors duration-300">
              NEXORA<span className="text-primary font-light">BOOST</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.sectionId === 'tos'
                  ? currentPage === 'tos'
                  : currentPage === 'home' && (link.sectionId === '' ? window.scrollY < 200 : false); // active highlights handled dynamically
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.sectionId)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary relative py-1 cursor-pointer ${isActive ? 'text-primary' : 'text-gray-300'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={sellAuthLink ? () => window.open(sellAuthLink, '_blank') : (e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
              target={sellAuthLink ? "_blank" : undefined}
              rel={sellAuthLink ? "noopener noreferrer" : undefined}
              className="px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 scale-100 hover:scale-103 active:scale-97 cursor-pointer"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-panel border-b border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.sectionId)}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-gray-300 hover:text-primary hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <a
              href="#contact"
              onClick={sellAuthLink ? () => window.open(sellAuthLink, '_blank') : (e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
              target={sellAuthLink ? "_blank" : undefined}
              rel={sellAuthLink ? "noopener noreferrer" : undefined}
              className="block w-full text-center py-3 rounded-xl text-base font-bold text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 shadow-lg shadow-primary/10"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
