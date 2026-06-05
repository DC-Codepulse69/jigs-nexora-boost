import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Select Product',
      desc: 'Browse our catalog of server boosts, nitro codes, aged IDs, and account tokens to find the best fit.',
      icon: ShoppingCart,
    },
    {
      step: '02',
      title: 'Complete Purchase',
      desc: 'Pay securely using credit cards, crypto, or other supported methods via our premium SellAuth checkout.',
      icon: CreditCard,
    },
    {
      step: '03',
      title: 'Receive Automatically',
      desc: 'Our high-speed bots deliver the products or apply boosts to your target server in seconds.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 relative bg-bg-dark overflow-hidden">
      {/* Decorative center light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Order Flow</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How Nexora Boost Works
          </h3>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/10 via-secondary/20 to-accent/10 -translate-y-[80px]" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-3xl bg-card-dark border border-white/5 text-primary flex items-center justify-center mb-6 relative group-hover:border-primary/40 group-hover:text-white transition-all duration-300 shadow-xl shadow-black/40">
                  {/* Step Number Badge */}
                  <span className="absolute -top-3 -right-3 px-2 py-0.5 rounded-md text-[10px] font-extrabold tracking-wider bg-gradient-to-r from-primary to-secondary text-white border border-white/10 shadow-md">
                    {item.step}
                  </span>
                  <item.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Info */}
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
