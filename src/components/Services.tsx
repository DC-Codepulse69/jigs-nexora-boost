import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles, Mail, CheckCircle2, ShoppingBag } from 'lucide-react';

interface ServiceItem {
  title: string;
  price: string;
  badge: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  popular?: boolean;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: 'Discord Boosts',
      price: '$1.49',
      badge: 'Best Seller',
      description: 'Supercharge your server features, custom URL, and audio quality instantly.',
      features: ['Instant Auto-Delivery', 'Automatic Setup System', 'Stable & Reliable Service'],
      icon: Zap,
      popular: true,
    },
    {
      title: 'Discord Nitro',
      price: '$2.99',
      badge: 'Hot Deals',
      description: 'Unlock special custom emojis, profile themes, banners, and massive uploads.',
      features: ['Various Nitro Tiers', 'Extremely Fast Fulfillment', 'Safe Account Activation'],
      icon: Sparkles,
    },
    {
      title: 'Discord IDs',
      price: '$0.49',
      badge: 'Ready To Use',
      description: 'Premium quality discord accounts with unique age tags and clean profiles.',
      features: ['High-Quality Aged IDs', 'Instant Delivery Format', 'Secure & Full Ownership'],
      icon: Shield,
    },
    {
      title: 'Email Verified Tokens',
      price: '$0.05',
      badge: 'Bulk Stock',
      description: 'High durability automated tokens verified using top-tier mail systems.',
      features: ['Email Verified Accounts', 'Highly Stable Token Supply', 'Perfect for Developer APIs'],
      icon: Mail,
    },
    {
      title: 'Fully Verified Tokens',
      price: '$0.25',
      badge: 'Premium Quality',
      description: 'Double-verified accounts equipped with both email and premium phone binding.',
      features: ['Fully Phone & Email Verified', 'Aesthetic Profile Assets', 'Highly Resistant to Flagging'],
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-bg-dark grid-bg">
      <div className="absolute inset-0 radial-fade pointer-events-none"></div>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Offerings</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Premium Discord Services
          </h3>
          <p className="text-gray-400 text-lg">
            Elevate your community experience with our elite range of boosting and verified account inventory.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-panel p-8 rounded-3xl relative flex flex-col justify-between overflow-hidden group ${
                service.popular 
                  ? 'border-2 border-primary/50 shadow-2xl shadow-primary/10' 
                  : 'border border-white/5 hover:border-primary/20'
              } transition-all duration-300`}
            >
              {/* Top accent line for popular card */}
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary"></div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                    service.popular
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'bg-white/5 text-gray-400'
                  }`}>
                    {service.badge}
                  </span>
                </div>

                {/* Title & Price */}
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="text-gray-400 text-xs sm:text-sm">Starts from</span>
                  <span className="text-3xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{service.price}</span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/5 mb-6"></div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Purchase Button */}
              <a
                href="[SELLAUTH_LINK]"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-2xl font-bold text-sm tracking-wide text-center flex items-center justify-center gap-2 group-hover:scale-102 transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                Purchase Product
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
