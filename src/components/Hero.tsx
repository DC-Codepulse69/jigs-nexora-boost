import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Sparkles } from 'lucide-react';

import config from '../../config.json';

const sellAuthLink: string = config.sellAuthLink;
const discordLink: string = config.discordLink;
const telegramLink: string = config.telegramLink;

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden grid-bg">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/20 blur-[100px] pointer-events-none animate-pulse duration-[6000ms]"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-secondary/15 blur-[120px] pointer-events-none animate-pulse duration-[8000ms]"></div>

      {/* Grid fade effect */}
      <div className="absolute inset-0 radial-fade pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Trust Badge / Info Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            #1 Discord Service Provider
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-white mb-6"
        >
          Premium Discord <br />
          <span className="text-neon-glow bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Boosting & Tokens
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-xl text-gray-400 mb-10 leading-relaxed"
        >
          Trusted by hundreds of clients. Fast delivery, automated systems, and reliable service. Boost your server presence instantly.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={sellAuthLink ? () => window.open(sellAuthLink, '_blank') : onOrderClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform scale-100 hover:scale-103 active:scale-97 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-5 h-5 fill-white/10" />
            Buy Now (SellAuth)
          </button>
          <a
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-gray-300 hover:text-white glass-panel hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            Join Discord
          </a>
        </motion.div>

        {/* Interactive Stats Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: 'Instant Auto Delivery', desc: 'Fulfillment in seconds', icon: Zap },
            { label: 'Secure Payment Flow', desc: 'Via SellAuth ecosystem', icon: ShieldCheck },
            { label: '24/7 Quality Support', desc: 'Active community helper staff', icon: Sparkles },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 flex items-center gap-4 text-left group"
            >
              <div className="p-3 rounded-xl bg-white/5 text-primary group-hover:bg-primary/10 group-hover:text-secondary transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-primary transition-colors duration-300">
                  {item.label}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
