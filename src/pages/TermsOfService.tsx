import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, Shield, AlertTriangle, RefreshCcw, UserCheck, HelpCircle } from 'lucide-react';

interface TermsOfServiceProps {
  onBackToHome: () => void;
}

export default function TermsOfService({ onBackToHome }: TermsOfServiceProps) {
  const sections = [
    {
      id: 'general',
      title: 'General Terms',
      icon: Scale,
      points: [
        'All sales are final unless stated otherwise.',
        'Customers must follow platform rules (including Discord Terms of Service).',
        'Abuse, chargebacks, or fraudulent transaction behaviors may result in immediate blacklisting and service refusal.',
      ],
    },
    {
      id: 'delivery',
      title: 'Delivery Policy',
      icon: Shield,
      points: [
        'Most products (tokens, nitro codes, account inventories) are delivered automatically via SellAuth instant protocols.',
        'Delivery times for custom boost operations or high-tier accounts may vary due to stock limitations, API rate limits, or general technical updates.',
      ],
    },
    {
      id: 'refunds',
      title: 'Refund Policy',
      icon: RefreshCcw,
      points: [
        'Refunds are only available if an order cannot be fulfilled due to systemic technical faults on our side.',
        'No refunds will be granted after successful delivery of the code, tokens, or boosts.',
      ],
    },
    {
      id: 'responsibility',
      title: 'Customer Responsibility',
      icon: UserCheck,
      points: [
        'Customers are solely responsible for providing accurate inputs (target discord guild invite links, payment details, etc.).',
        'Misuse, termination, or banning of purchased assets or server guilds due to post-delivery user actions is not the responsibility of Nexora Boost.',
      ],
    },
    {
      id: 'availability',
      title: 'Service Availability',
      icon: HelpCircle,
      points: [
        'Products, stock availability, pricing, and specific delivery criteria may change without prior notice.',
        'We reserve the right to adapt our pipeline configurations depending on updates deployed by Discord Inc.',
      ],
    },
  ];

  const [activeSection, setActiveSection] = useState('general');

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // account for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-bg-dark grid-bg relative">
      <div className="absolute inset-0 radial-fade pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Back Action Button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white px-4 py-2 rounded-xl glass-panel border border-white/5 hover:border-primary/30 transition-all duration-300 mb-8 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </motion.button>

        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <Scale className="w-8 h-8 text-primary" />
            Terms of Service
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Please read our guidelines and operating policies carefully before completing your purchase.
          </p>
        </div>

        {/* Layout: Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Navigation (Sticky on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 glass-panel p-4 rounded-3xl border border-white/5 lg:sticky lg:top-28 space-y-1.5"
          >
            <h3 className="text-gray-500 text-xs font-bold tracking-widest uppercase px-4 py-2.5 mb-2">TOS Navigation</h3>
            {sections.map((sect) => {
              const IconComp = sect.icon;
              const isActive = activeSection === sect.id;
              return (
                <button
                  key={sect.id}
                  onClick={() => handleScrollToSection(sect.id)}
                  className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-left text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-primary/20 to-secondary/10 text-white border border-primary/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                  <span>{sect.title}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Main Content Sections */}
          <div className="lg:col-span-8 space-y-8">
            {sections.map((sect, sIdx) => {
              const IconComp = sect.icon;
              return (
                <motion.section
                  key={sect.id}
                  id={sect.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: sIdx * 0.05 }}
                  className="glass-panel p-8 rounded-3xl border border-white/5 space-y-6 hover:border-white/10 transition-colors duration-300"
                >
                  {/* Card Title */}
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-primary/10 text-primary">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{sect.title}</h3>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-4">
                    {sect.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                        {/* Custom dot icon */}
                        <div className="w-5 h-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        </div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              );
            })}

            {/* Crucial Note Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4"
            >
              <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-base mb-1">Additional Warning / Notice</h4>
                <p className="text-amber-500/80 text-sm leading-relaxed">
                  Chargebacks or intentional payment disputes initiated without first discussing support avenues directly violates our operational agreement. Such actions will lead to full removal of tokens/boosts and permanent blocks across all partner platforms.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
