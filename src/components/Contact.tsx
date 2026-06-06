import { motion } from 'framer-motion';
import { MessageSquare, Send, ShoppingCart, ExternalLink } from 'lucide-react';

import config from '../../config.json';

const sellAuthLink: string = config.sellAuthLink;
const discordLink: string = config.discordLink;
const telegramLink: string = config.telegramLink;

export default function Contact() {
  const channels = [
    {
      title: 'Discord Server',
      desc: 'Join our guild to get live support, participate in giveaways, and view reviews from our community.',
      link: discordLink,
      label: 'Join Discord',
      icon: MessageSquare,
      color: 'from-[#5865F2]/20 to-[#5865F2]/5 border-[#5865F2]/30 hover:border-[#5865F2]/80 text-[#5865F2]',
      btnBg: 'bg-[#5865F2] hover:bg-[#5865F2]/90',
    },
    {
      title: 'Telegram Channel',
      desc: 'Subscribe to our channel for announcements, backup contact options, bulk inventory logs, and discounts.',
      link: telegramLink,
      label: 'Message Telegram',
      icon: Send,
      color: 'from-[#229ED9]/20 to-[#229ED9]/5 border-[#229ED9]/30 hover:border-[#229ED9]/80 text-[#229ED9]',
      btnBg: 'bg-[#229ED9] hover:bg-[#229ED9]/90',
    },
    {
      title: 'AutoBuy Store',
      desc: 'Purchase boosts, nitro, and account tokens instantly. Payments are securely managed through SellAuth.',
      link: sellAuthLink,
      label: 'Purchase (SellAuth)',
      icon: ShoppingCart,
      color: 'from-[#6D5DFC]/20 to-[#6D5DFC]/5 border-[#6D5DFC]/30 hover:border-[#6D5DFC]/80 text-[#6D5DFC]',
      btnBg: 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90',
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-bg-dark grid-bg">
      <div className="absolute inset-0 radial-fade pointer-events-none"></div>

      {/* Decorative Glow elements */}
      <div className="absolute top-[30%] left-[-15%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-15%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Contact Head */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Connect With Us</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready To Get Boosted?
          </h3>
          <p className="text-gray-400 text-lg">
            Choose your preferred platform to order, request custom bundles, or receive instant customer support.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {channels.map((ch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-3xl bg-gradient-to-br border flex flex-col justify-between group transition-all duration-300 ${ch.color}`}
            >
              <div>
                {/* Header Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-current">
                  <ch.icon className="w-7 h-7" />
                </div>

                {/* Info */}
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {ch.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {ch.desc}
                </p>
              </div>

              {/* Link Button */}
              <a
                href={ch.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-2xl font-bold text-white text-sm tracking-wide text-center flex items-center justify-center gap-2 shadow-lg transition-all duration-300 transform scale-100 hover:scale-103 active:scale-97 ${ch.btnBg}`}
              >
                <span>{ch.label}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Large Secondary CTA banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 sm:p-12 rounded-3xl glass-panel border border-white/5 relative overflow-hidden text-center max-w-5xl mx-auto"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 blur-[80px] pointer-events-none"></div>

          <h4 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 relative z-10">
            Need Custom Boosting Quantities?
          </h4>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 relative z-10">
            If you are running a massive esports tournament, guild network, or corporate server hub, we provide high-volume discounts and custom integration strategies. Open a ticket in Discord or message us via Telegram.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Contact Support
            </a>
            <a
              href={sellAuthLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-md shadow-primary/20 transition-all duration-300"
            >
              Go to Auto-Shop
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
