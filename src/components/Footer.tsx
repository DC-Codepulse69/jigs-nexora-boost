import React from 'react';
import { Zap, MessageSquare, Send, ShoppingBag } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'tos', sectionId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, sectionId?: string) => {
    e.preventDefault();
    if (sectionId === 'tos') {
      onNavigate('tos');
    } else {
      onNavigate('home', sectionId);
    }
  };

  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div
              onClick={(e) => handleLinkClick(e, '')}
              className="flex items-center gap-2 cursor-pointer group w-fit"
            >
              <div className="p-2 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-md">
                <Zap className="w-5 h-5 fill-white/10" />
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white">
                NEXORA<span className="text-primary font-light">BOOST</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Nexora Boost provides elite Discord server boosting, Nitro activations, aged IDs, and high-performance account tokens with 100% automated instantaneous fulfillment.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="[DISCORD_LINK]"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/40 border border-white/5 transition-all duration-300"
                aria-label="Discord Server Link"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="[TELEGRAM_LINK]"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-accent/20 hover:border-accent/40 border border-white/5 transition-all duration-300"
                aria-label="Telegram Support Channel"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="[SELLAUTH_LINK]"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-secondary/20 hover:border-secondary/40 border border-white/5 transition-all duration-300"
                aria-label="SellAuth Shop Link"
              >
                <ShoppingBag className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', sectionId: '' },
                { label: 'Services', sectionId: 'services' },
                { label: 'Reviews', sectionId: 'reviews' },
                { label: 'Contact Details', sectionId: 'contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.sectionId}`}
                    onClick={(e) => handleLinkClick(e, link.sectionId)}
                    className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-4">Support & Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#tos"
                  onClick={(e) => handleLinkClick(e, 'tos')}
                  className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="[DISCORD_LINK]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                >
                  Discord Support Ticket
                </a>
              </li>
              <li>
                <a
                  href="[TELEGRAM_LINK]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                >
                  Contact Admin
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-white/5 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} Nexora Boost. All rights reserved. We are not affiliated with Discord Inc.
          </p>
          <div className="flex gap-4">
            <a
              href="#tos"
              onClick={(e) => handleLinkClick(e, 'tos')}
              className="text-gray-500 hover:text-gray-400 text-xs transition-colors duration-200"
            >
              Terms & Conditions
            </a>
            <span className="text-gray-600 text-xs">|</span>
            <a
              href="[SELLAUTH_LINK]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-400 text-xs transition-colors duration-200"
            >
              Auto Shop Gateway
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
